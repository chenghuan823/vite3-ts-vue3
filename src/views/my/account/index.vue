<script setup lang="ts">
import {reactive} from 'vue'
import AccountInfo from '../components/AccountInfo.vue'
import AccountList from '../components/AccountList.vue'
import {transfer,income} from '@/api/my'
// import {collectList} from '@/api/my'

const tabs=[
    {
        type:0,
        text:'全部'
    },
    {
        type:1,
        text:'收入'
    },
    {
        type:2,
        text:'提现'
    },
]

const state=reactive({
    loading:false,
    currentTab:0,
    list:[]
//   collect:[]
})

const onClickLeft=()=>history.back()


const getTransfer=async ()=>{
    state.loading=true
    const res=await transfer()
    if(res){
        state.list.push(res)
    }else{
        Toast(res.msg)
    }
    state.loading=false
}
const getIncome=async ()=>{
    state.loading=true
    const res=await income()
    if(res){
        state.list=res
    }else{
        Toast(res.msg)
    }
    state.loading=false
}

const tabChange=async (type:any)=>{
    state.currentTab=type
    state.list=[]
    if(type==0){
        await getTransfer()
        await getIncome()
        state.list=state.list.flat()
    }else if(type==1){
        await getIncome()
        state.list=state.list.flat()
    }else{
        await getTransfer()
        state.list=state.list.flat()
    }
}
tabChange(0)

</script>
<template>
    <div>
        <van-nav-bar title="我的账户" left-arrow @click-left="onClickLeft" />
        <AccountInfo/>
        <dl>
            <dt :class="{active:state.currentTab==value.type}" v-for="(value,index) in tabs" :key="index" @click="tabChange(value.type)">{{ value.text }}<i v-show="state.currentTab==value.type"></i>
            </dt>
        </dl>
        <AccountList :list="state.list"/>
    </div>
</template>

<style scoped>
.van-nav-bar{
    background: #ff8e00;
}
:deep(.van-nav-bar__title){
    color: #fff;
}
:deep(.van-nav-bar .van-icon ){
    color: #fff;
}
dl{
    display: flex;
    border-bottom: 1px solid #eee;
}
dl dt{
    flex: 1;
    text-align: center;
    font-size: 0.75rem;
font-weight: 500;
color: #666666;
line-height: .75rem;
padding: 1.47rem 0 .59rem;
position: relative;
}
dl dt i{
    display: block;
    width: 1.63rem;
height: 0.05rem;
background: #FF9415;
position: absolute;
bottom: 0;
left: 50%;
margin-left: -.815rem;
}
dl dt.active{
    color: #FF8E00;
}
</style>