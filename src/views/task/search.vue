<script setup lang="ts">
import {reactive,inject} from 'vue'
import{getTaskDetails,HotSeach,taskAllList} from '@/api/task'
import { useRoute,useRouter } from 'vue-router';
import TaskList from '@/components/list/TaskList.vue'
import { Toast } from 'vant';
import {taskStore} from '@/store/task'
const route=useRoute()
const router=useRouter()
const store=taskStore()
const searchHistory=localStorage.getItem('searchHistory')
const state=reactive({
    value:'',
    taskList:[],
    searchHistory:searchHistory?searchHistory.split(','):[],
    pageNum:1,
    pageSize:10,
    loading:false,
    finished:false,
    searchFlag:false
})

const onClickLeft=()=>{
    history.back()
}

const onSearch=(value:any)=>{
    // if(!value){
    //     return
    // }·
    state.searchFlag=true  
    if(!state.searchHistory.includes(value)&&value){
        state.searchHistory.push(value)
        localStorage.setItem('searchHistory',state.searchHistory)
    }
    getTaskAllList()
}
const onCancel=()=>{
    state.searchFlag=false
    state.value=''
}
const clear=()=>{
    state.searchHistory=[]
    localStorage.removeItem('searchHistory')
}
const gotoSearch=(item:any)=>{
    state.pageNum=1;
    state.value=item;
    onSearch(item)
}
const getHotSeach=async ()=>{
    const res=await HotSeach({
        type:1
    });
    if(res){
        store.setHotSearch(res.data)
    }else{
        Toast(res.msg)
    }
}
if(store.hotSearch.length<=0){
    getHotSeach()
} 
const getTaskAllList=async ()=>{
    state.loading=true;
    if(state.pageNum===1){
        state.taskList=[]
    }
    const res=await taskAllList({
        position_name: state.value, 
        pageNum: state.pageNum, 
        pageSize: state.pageSize, 
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
    <div :class="{wrapper:state.searchFlag}">
        <van-nav-bar
        class="nav-modify"
        title="搜索"
        left-arrow
        @click-left="onClickLeft"
        />
        <van-search
            v-model="state.value"
            show-action
            placeholder="请输入搜索职位"
            @search="onSearch"
            @cancel="onCancel"
        />
        <div class="search-cont">
            <div class="search-item" v-if="!state.searchFlag">
                <h3>搜索历史<van-icon @click="clear" size="1rem" name="delete-o"/></h3>
                <dl>
                    <dt v-for="(item,index) in state.searchHistory" :key="index" @click="gotoSearch(item)">{{ item }}</dt>
                </dl>
                <h3>热门搜索</h3>
                <dl>
                    <dt v-for="(item,index) in store.hotSearch" :key="index" @click="gotoSearch(item.title)">{{ item.title }}</dt>
                </dl>
            </div>
            <div class="search-list" v-show="state.searchFlag">
                <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
                    <van-list
                        v-model:loading="state.loading"
                        :finished="state.finished"
                        finished-text=""
                        @load="onLoad">
                            <div class="wy-no-data" v-if="!state.loading&&state.taskList.length==0">暂无数据</div>
                            <TaskList v-else :taskList="state.taskList"/>
                    </van-list>
                </van-pull-refresh>
                    
            </div>
        </div>
    </div>
</template>


<style scoped>
.wrapper{
    background: #f9f9f9;
    height: 100%;
    min-height: 100vh;
}
 :deep(.van-search__content){
    background: #F5F6F7;
    border-radius: 0.85rem;
}
:deep(.van-search__action){
    font-size: 0.85rem;
font-weight: 400;
color: #666666;
}
:deep(.van-search ){
    background: transparent;
}
.search-cont{
    padding: 0 .67rem 0;
}
h3{
    font-size: 0.8rem;
font-weight: 500;
color: #000000;
line-height: .8rem;
margin: .7rem 0 .85rem;
}
h3 i{
    float: right;
}
dl dt{
    display: inline-block;
    padding: 0 .45rem;
    background: #F5F5F5;
    height: 1.71;
    margin:0 .51rem 0.53rem 0rem;
border-radius: 0.16rem;
font-size: 0.64rem;
font-weight: 400;
color: #333333;
line-height: 1.71rem;
}
</style>