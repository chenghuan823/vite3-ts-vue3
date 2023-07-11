<script setup lang="ts">
import {reactive} from 'vue'
import {getPolicy} from '@/api/user'
import { Toast } from 'vant';
const state=reactive({
    htmlText:''
})
const onClickLeft=()=>{
    history.back()
}
const getPolicyChange=async ()=>{
    const res=await getPolicy({
        id:17
    })
    if(res){
        state.htmlText=res.records[0].content
    }else{
        Toast('请求失败')
    }
}
getPolicyChange()
</script>

<template>
  <van-nav-bar
  title="隐私政策"
  left-arrow
  @click-left="onClickLeft"
/>
<div class="text-agree" v-html="state.htmlText"></div>
</template>

<style scoped>
.text-agree{
    padding:.5rem .7rem ;
}
</style>
