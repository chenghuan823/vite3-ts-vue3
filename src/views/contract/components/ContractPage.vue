<script setup lang="ts">
import {reactive} from 'vue'
import ContractList from '@/components/list/ContractList.vue'
import {contractAllList} from '@/api/contract'
import { Toast } from 'vant';
const tabs=[
    {
        type:2,
        text:'待签约'
    },
    {
        type:3,
        text:'履约中'
    },
    {
        type:4,
        text:'已完成'
    },
    {
        type:5,
        text:'已失效'
    },
]
const state=reactive({
    tabValue:tabs[0].type,
    contractList:[],
    loading:false,
    activeLoading:0
})
const tabChange=(index:any)=>{
    if(index===state.tabValue){
        return
    }
    state.tabValue=index
    getContractList(index)
}
const getContractList=async (data:any=2)=>{
    state.loading=true
    const res=await contractAllList({
        is_contract_type:data,
        curr_identity:3
    })
    if(res){
        state.contractList=res.records
    }else{
        Toast('error')
    }
    state.loading=false
    state.activeLoading++
}
getContractList()
const onRefresh=()=>{
    getContractList(state.tabValue)
}
</script>

<template>
    <div class="contract-page">
        <div class="contract-tab">
            <span :class="{active:state.tabValue===item.type}"
             v-for="(item,index) in tabs" :key="index"
             @click="tabChange(item.type)"
             >{{ item.text }}<i v-show="state.tabValue===item.type"></i></span>
        </div>
        <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
            <van-loading size="24px" v-if="state.activeLoading===0 && state.loading">加载中...</van-loading>
            <div class="wy-no-data" v-if="!state.loading && state.contractList.length===0">暂无数据</div>
            <ContractList v-else :contractList="state.contractList"/>
        </van-pull-refresh>
    </div>
</template>


<style scoped>
.contract-tab{
    margin-top: .5rem;
    display:flex;
    border-bottom: 1px solid #eee;
    padding-bottom: .59rem;
}
.contract-tab span{
    flex:1;
    text-align: center;
    position: relative;
    font-size: 0.75rem;
font-weight: 400;
color: #666666;
line-height: .75rem;
}
.contract-tab span.active{
color: #FF9415;
}
.contract-tab i{
    position: absolute;
    bottom: -.59rem;
    left: 50%;
    margin-left:-0.8rem ;
    width: 1.63rem;
height: 0.05rem;
background: #FF9415;
}
</style>