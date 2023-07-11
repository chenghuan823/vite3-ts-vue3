<script setup lang="ts">
import {reactive,inject} from 'vue'
import TaskDetail from './components/TaskDetail.vue'
import{getTaskDetails,TaskCollection} from '@/api/task'
import { Toast } from 'vant';
import { useRoute,useRouter } from 'vue-router';
const route=useRoute()
const router=useRouter()
const taskId=route.params.id
const state=reactive({
    item:{},
    status:0,//收藏
})
const getTaskCollection=async()=>{
    const res=await TaskCollection({
        task_id:taskId 
    })
    if(res){
        state.status=res.data.status
    }
        Toast(res.msg)
}
const onClickLeft=()=>{
    history.back()
}
const getDetail=async ()=>{
    const res=await getTaskDetails({
        task_id:taskId
    })
    if(res){
        state.item=res.records[0]
        state.status=res.records[0].status
    }else{
        Toast('error')
    }
}
getDetail()
const goToMessage=()=>{
    router.push(`/message/talk/${state.item.user_id}/${taskId}`)
}
</script>
<template>
    <div class="task-detail-wrapper"> 
            <van-nav-bar
        title="任务详情"
        left-arrow
        @click-left="onClickLeft"
        />
        
            <TaskDetail :item="state.item"/>   
        <div class="task-detail-footer">
            <van-action-bar-icon v-if="state.status===1" icon="star" text="收藏"  color="#ff5000" @click="getTaskCollection" />
            <van-action-bar-icon v-else icon="star-o" text="收藏" @click="getTaskCollection" />
            <van-button class="modify-class" type="primary" block @click="goToMessage">立即沟通</van-button>
        </div>
    </div>
</template>


<style scoped>
.task-detail-wrapper{
    height: 100vh;
    display: flex;
    flex-direction: column;
    padding-bottom: 6rem;
}
.task-detail-footer{
    position: fixed;
    left: 0;
    bottom: 0;right: 0;
    display: flex;
    align-items: center;
    padding: 0 .67rem 2.08rem;
    background: #fff;
}
.modify-class{
    
border-radius: 0.27rem;
}
</style>