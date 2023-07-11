<script setup lang="ts">
import {reactive} from 'vue'
import {taskAllList,getTaskDetails} from '@/api/task'
import { useRoute} from 'vue-router';
import CompanyTask from './components/CompanyTask.vue'
import CompanySource from './components/CompanySource.vue'
const route=useRoute()
const companyId=route.params.companyId
const taskId=route.params.taskId
const onClickLeft=()=>{
    history.back()
}
const state=reactive({
    item:{},
    taskList:[]
})
const getTaskAllList=async ()=>{        //该公司所有任务列表
    const res=await taskAllList({
        company_id:companyId
    })
    if(res){
        state.taskList=res.records

    }else{
        Toast('error')
    }
}
getTaskAllList()
const getDetail=async ()=>{      
    const res=await getTaskDetails({
        task_id:taskId
    })
    if(res){
        state.item=res.records[0]
    }else{
        Toast('error')
    }
}
getDetail()
</script>

<template>
    <van-nav-bar title="任务来源" left-arrow @click-left="onClickLeft" />
    <CompanySource :companpySource="state.item"/>
    
    <CompanyTask :taskList="state.taskList"/>
</template>

<style scoped>

</style>