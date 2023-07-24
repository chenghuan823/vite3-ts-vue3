<script setup lang="ts">
import {reactive,inject} from 'vue'
import {advantage} from '@/api/my'
import { Toast } from 'vant';
import {myStore} from '@/store/my'
const store=myStore()
const {closePopup}=inject('popup')
const state=reactive({
    message:''
})
state.message=store.resumeInfo.advantage

const confirm=async()=>{
    const res=await advantage({
        "advantage": state.message
    })
    if(res){
        closePopup()
        Toast('保存成功')
    }else{
        Toast('保存失败')
    }
}
</script>
<template>
    <div>
        <van-nav-bar left-arrow title="个人优势" @click-left="closePopup"/>
        <van-field v-model="state.message" rows="8" autosize type="textarea" maxlength="500" placeholder="请输入您的个人优势"/>
        <button class="resumen-btn" @click="confirm">保存</button>

    </div>
</template>


<style scoped>
</style>