<script setup lang="ts">
import {inject,reactive} from 'vue'
import {taskFilter} from '@/api/task'
import { Toast } from 'vant';
import {taskStore} from '@/store/task'
const {closeScreen} =inject('popup')
const store=taskStore()
const state=reactive({
    type:0,
    serviceMode:'',
    taskCycle:''
})
const onClickLeft=()=>{
    closeScreen('取消')
}
const gettaskFilter=async()=>{
    const res=await taskFilter()
    if(res){
        store.setFilterList(res.data)
    }else{
        Toast('error')
    }
}
gettaskFilter()
const serviceModeChange=(data:any)=>{
    // store.setServiceMode(data)
    state.serviceMode=data
}
const taskCycleChange=(data:any)=>{
    // store.setTaskCycle(data)
    state.taskCycle=data
}
const clearFilter=()=>{
    state.taskCycle='';
    state.serviceMode=''
}
const confirm=()=>{
    store.setTaskCycle(state.taskCycle)
    store.setServiceMode(state.serviceMode)

    closeScreen()
}
</script>
<template>
    <div class="screen-wrapper">
        <van-nav-bar
        title="筛选"
        left-arrow
        @click-left="onClickLeft"
        >
            <template #left>
                <van-icon name="cross" size="18" />
            </template>
        </van-nav-bar>
        <div class="task-screen">
            <h3>服务方式</h3>
            <div class="screen-item">
                <span :class="state.serviceMode===item?'active':''" v-for="(item,index) in store.filterList.serviceMode" :key="index" @click="serviceModeChange(item )">{{ item }}</span>
            </div>
            <h3>任务周期</h3>
            <div class="screen-item">
                <span :class="state.taskCycle===item?'active':''" v-for="(item,index) in store.filterList.taskCycle" :key="index" @click="taskCycleChange(item)">{{ item }}</span>
            </div>
        </div>
        <div class="task-screen-bottom">
            <button class="clear" @click="clearFilter">清除</button>
            <button class="confirm" @click="confirm">确定</button>
        </div>
    </div>
</template>


<style scoped>
.screen-wrapper{
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.task-screen{
    flex:1;
padding: 0 .64rem;
margin-top: 1rem;
}
.task-screen h3{
    font-size: 0.96rem;
font-weight: 500;
color: #333333;
line-height: .96rem;
margin-bottom: .8rem;
}
.task-screen .screen-item{
display: flex;
flex-wrap: wrap;
}
.task-screen .screen-item span{
    font-size: 0.75rem;
    margin: 0 .59rem .51rem 0;
    font-weight: 400;
    color: #666;
    line-height: 1.6rem;
    width: 5.84rem;
    height: 1.6rem;
    box-sizing: border-box;
    background: #F5F6F8;
    border-radius: 0.16rem;
    text-align: center;
    border: 1px solid #F5F6F8;  

}
.task-screen .screen-item span:nth-child(3n){
    margin-right: 0;
}
.task-screen .screen-item span.active{
    color: #FF8A00;
    border: 1px solid #FF8A00;  
    background: #FFFFFF;
}
.task-screen-bottom{
    height: 4.73rem;
font-size: 0.8rem;

}
.task-screen-bottom .clear{
    margin:.83rem .64rem 0 .61rem;
    width: 5.33rem;
    height: 2.35rem;
    background: #F5F6F8;
    border-radius: 0.27rem;
    border: none;
}
.task-screen-bottom .confirm{
    width: 12.77rem;
    height: 2.35rem;
    background: linear-gradient(90deg, #FFA400, #FF8900);
    border-radius: 0.27rem;
    border: none;
    color: #FFFFFF;
}
</style>