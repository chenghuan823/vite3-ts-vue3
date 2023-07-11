<script setup lang="ts">
import {reactive} from 'vue'
import {messageStore} from '@/store/message'
import {systemDetail} from '@/api/message'
import {useRoute} from 'vue-router'
import { Toast } from 'vant';
const route=useRoute()
const detailId=route.params.id
const store=messageStore()
store.getSystemMessageList()
const state=reactive({
    detail:[]
})
const onClickLeft=()=>{
    history.back()
}
const getSystemDetail=async ()=>{
    const res=await systemDetail({
        id:detailId
    })
    if(res){
        state.detail=res[0]
    }else{
        Toast('error')
    }
}
getSystemDetail()
</script>
<template>
    <div>
        <van-nav-bar
        title="查看消息"
        left-arrow
        @click-left="onClickLeft"
        />
        <section>
            <h3>{{ state.detail.title }}</h3>
            <p>{{ state.detail.content }}</p>
        </section>
    </div>
</template>


<style scoped>
section{
    padding: 1.21rem .75rem 0;
}
h3{
    font-size: 0.8rem;
font-weight: 400;
color: #333333;
line-height: .8rem;
margin-bottom: .83rem;
}
p{
    font-size: 0.69rem;
font-weight: 500;
color: #666666;
line-height: 1.23rem;
text-indent: 1.5rem;
}
</style>