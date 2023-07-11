<script setup lang="ts">
import {reactive,provide} from 'vue'
import { taskStore } from '@/store/task'
import {taskAllList} from '@/api/task'
import FooterTabbar from '@/components/FooterTabbar.vue'
import TaskList from '@/components/list/TaskList.vue'
import Banner from './components/Banner.vue'
import CitySwitch from './components/CitySwitch.vue'
import PositionType from './components/PositionType.vue'
import Screen from './components/Screen.vue'
import { Toast } from 'vant'
import { useRouter } from 'vue-router';
const router=useRouter()
const store=taskStore()
const state=reactive({
    citySwitchBool:false,
    positionTypeBool:false,
    filterBool:false,
    taskList:[],
    pageNum:0,
    pageSize: 10,
    positionType:'',
    loading:false,
    finished:false
})
const closeCitySwitch=(name:any)=>{
    if(name){
        store.setCityValue(name)
        localStorage.setItem('city',name)
        onRefresh()
    }
        state.citySwitchBool=false
}
const closePositionType=(name:any)=>{
    if(name){
        state.positionType=name;
        onRefresh()
    }
    state.positionTypeBool=false
}
const closeScreen=(data:any)=>{
    if(data){
        state.filterBool=false
        return
    }
    onRefresh()
    state.filterBool=false
}
provide('popup',{
    closeCitySwitch,
    closePositionType,
    closeScreen
})
const getTaskAllList=async ()=>{
    state.loading=true;
    if(state.pageNum===1){
        state.taskList=[]
    }
    const res=await taskAllList({
        position_name: state.positionType, 
        service_mode: store.serviceMode, 
        task_cycle: store.taskCycle, 
        pageNum: state.pageNum, 
        pageSize: state.pageSize, 
        city: store.cityValue, 
    })
    if(res){
        state.taskList=state.taskList.concat(res.records)
        if(state.taskList.length>=res.total){
            state.finished=true
        }else{
            state.finished=false
        }
    state.loading=false

    }else{
        Toast('error')
    state.loading=false

    }
}
const onLoad=()=>{
    state.pageNum+=1
    getTaskAllList()
}
const onRefresh=()=>{
    state.pageNum=1
    getTaskAllList()
}
</script>
<template>
    <div class="task-bg">
        <div class="task-page">
            <div class="task-top">
                <div class="task-top-city" @click="state.citySwitchBool=true">
                    <i></i>
                    <strong>{{ store.cityValue }}</strong>
                    <span></span>
                </div>
                <input type="text" readonly placeholder="请输入想要搜素的内容" @click="router.push('/task/search')">
                <router-link to="/message/systemList" class="task-icon-message"></router-link>
            </div>
            <Banner></Banner>
            <div class="task-title">
                <h3>最新任务</h3>
                <div class="task-position-pop" @click="state.positionTypeBool=true">{{ state.positionType || '职位类型' }}<span></span></div>
                <div class="task-screen-pop" @click="state.filterBool=true">筛选<span></span></div>
            </div>
            <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
                <van-list
                v-model:loading="state.loading"
                :finished="state.finished"
                finished-text="没有更多了"
                @load="onLoad">
                    <div class="wy-no-data" v-if="!state.loading&&state.taskList.length==0">暂无数据</div>
                    <TaskList v-else :taskList="state.taskList"/>
                </van-list>
            </van-pull-refresh>
            <!-- 切换城市 -->
            <van-popup v-model:show="state.citySwitchBool" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
                <CitySwitch/>
            </van-popup>
            <!-- 职位类型 -->
            <van-popup v-model:show="state.positionTypeBool" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
                <PositionType/>
            </van-popup>
            <!-- 筛选 -->
            <van-popup v-model:show="state.filterBool" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
                <Screen/>
            </van-popup>
            
            
        </div>
    </div>
    <FooterTabbar/>     
</template>


<style scoped>
.task-bg{
    box-sizing: border-box;
    background:#f5f5f5;
    padding-bottom: 3rem;
    min-height: calc(100vh - 3rem);
}
.task-top{
    display: flex;
    align-items: center;
    margin: 0rem .59rem 0rem;
    padding: .5rem 0 .91rem;
}
.task-top .task-top-city{
margin-right: .51rem;
display: flex;
    align-items: center;
}
.task-top .task-top-city i{
    background: url('@/assets/img/icon/icon-place.png') no-repeat;
    background-size:100%;
    width: 1rem;
    height: 1rem;
    margin-right: .11rem;
}
.task-top .task-top-city strong{
line-height: .8rem;
    font-size: 0.8rem;
    
font-weight: 500;
margin-right: .24rem;
}
.task-top .task-top-city span{
border-left:.18rem solid transparent;
border-right:.18rem solid transparent;
border-top:.36rem solid #333;
}
.task-top input{
flex: 1;

height: 1.71rem;
background: #fff url('@/assets/img/icon/icon-search.png') .35rem .3rem no-repeat;
background-size: 8%;
border: 0.03px solid #EDEDED;
border-radius: 0.85rem;
font-size: 0.69rem;
padding-left: 1.7rem;
}
.task-top a{
    background:url('@/assets/img/icon/icon-remind.png') no-repeat;
    background-size: 100%;
margin-left: .27rem;
width: 1.31rem;
height: 1.28rem;
}
.task-title{
    display: flex;
    align-items: center;
    width: 18.72rem;

    margin: 1.44rem auto .67rem;
}
.task-title h3{
font-size: 0.96rem;
color: #333333;
line-height: 0.96rem;
/* margin-right: 7.81rem; */
flex: 1;
}
.task-title .task-position-pop{
margin-right: .56rem;
font-size: 0.75rem;
font-weight: 300;
color: #666666;
line-height: 0.75rem;
}
.task-title .task-position-pop span ,.task-title .task-screen-pop span{
    display: inline-block;
margin-left: .27rem;
border-left: .18rem solid transparent;
border-right: .18rem solid transparent;
border-top: .36rem solid #333;
}
.task-title .task-screen-pop{
font-size: 0.75rem;
font-weight: 300;
color: #666666;
line-height: 0.75rem;
}
</style>