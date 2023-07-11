<script setup lang="ts">
import {contractDetailList} from '@/api/contract'
import {reactive} from 'vue'
import {useRoute} from 'vue-router'
import ProgressBar from '@/components/ProgressBar.vue'
const route=useRoute()
const detailId=Number(route.params.id)
const state=reactive({
    detail:{},
    loading:false,

})
const onClickLeft=()=>{
    history.back()
}
const getContractList=async ()=>{
    state.loading=true
    const res=await contractDetailList({
        id:detailId
    })
    if(res){
        state.detail=res.records[0]
    }else{
        Toast('error')
    }
    state.loading=false
    // state.activeLoading++
}
getContractList()
const onIsContract=async (data:any)=>{
    const res=await isContract({
        is_contract_type: data, 
        contract_id: detailId
    })
    if(res.errCode===200){
        Toast(res.meg)
        history.back()
    }else{
        Toast(res.meg)
    }
}
const refuseContract=()=>{
    onIsContract(5)
}
const confirmContract=()=>{
    onIsContract(3)
}
</script>
<template>
    <div>
        <van-nav-bar left-arrow class="mb" title="合约详情" @click-left="onClickLeft"/>
        <div class="detail-page">
        <div class="detail-top">
            <img :src="state.detail.it_head || ''" alt="">
            <div class="con">
                <h5>{{ state.detail.create_user_name }}</h5>
                <p>{{ state.detail.duties }} ｜{{ state.detail.sex }} ｜ {{ state.detail.work_year }} ｜ {{ state.detail.highest_education }} ｜{{state.detail.age}}</p>
            </div>
        </div>
        <dl>
            <dt>
                <label>合约状态</label><span>{{ state.detail.is_contract_type_text }}</span>
            </dt>

            <dt>

                <label>合约名称</label><span>{{ state.detail.contract_name }}</span>
            </dt>

            <dt>

                <label>合约类型</label><span>{{ state.detail.contract_type }}</span>
            </dt>

            <dt>

                <label>合约薪资</label><span>{{ state.detail.task_salary }}元</span>
            </dt>

            <dt>

                <label>合约周期 </label><span>{{ state.detail.start_cycle_time }}至{{ state.detail.end_cycle_time }}</span>
            </dt>

            <dt>

                <label>签约时间</label><span>{{ state.detail.signing_time || '-' }}</span>
            </dt>

            <dt>

                <label>结薪方式</label><span >{{ state.detail.check_out }}</span>
            </dt>

            <dt>

                <label>合约备注</label><span>{{ state.detail.task_ask }}</span>
            </dt>

            <dt>

                <label>任务结算</label><span>{{ state.detail.settle_salary || '暂无' }}</span>
            </dt>
            <dt>

                <label>合约进度</label>
            </dt>
            <ProgressBar :item="state.detail" />
        </dl>
        <div class="btn-group" v-if="state.detail.is_contract_type===2">
        <button class="refuse" v-debounce="refuseContract">拒绝签约</button>
            <button class="confirm" v-debounce="confirmContract">确认签约</button>
        </div>
        <div class="btn-group" v-if="state.detail.is_contract_type===3">
            <button class="progress">合约进度</button>
        </div>
    </div>
    </div>
</template>


<style scoped>
.mb{
    border-bottom: 1px solid #eee;
}
.detail-top{
    display: flex;
    align-items: center;
    padding: .85rem;
    border-bottom: 1px solid #eee;
margin: .85remrem 0 .96rem  .93rem;

}
.detail-top img{
    margin-right: .75rem;
    width: 2.67rem;
height: 2.67rem;
border-radius: 50%;
}
.con{

}
.con h5{
    font-size: 0.96rem;
font-weight: 300;
color: #333333;
line-height: 0.96rem;
margin: 0 0 .48rem 0;
}
.con p{
    font-size: 0.69rem;
font-weight: 100;
color: #333333;
line-height: 0.69rem;
}
dl{
    padding: 1.07rem .56rem 0;
}
dl dt{
    display: flex;
    font-size: 0.69rem;
font-weight: 500;
color: #666666;
line-height: .69rem;
margin-bottom: 1.04rem;

}
dl dt span{
    flex: 1;
    margin-left: 4rem;
}
dl dt span{
    text-align:right;
color: #000000;
}
.btn-group{
    position:fixed;
    bottom:1.39rem;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
}
.btn-group .progress{
    bottom:1.39rem;
    width: 96%;
    display: flex;
    justify-content: space-evenly;
    background: #FF9415;
color: #FFFFFF;
}
button{
    width: 9.13rem;
height: 2.35rem;
border: 1px solid #FF9415;
border-radius: 0.27rem;
font-size: 0.8rem;
font-weight: 300;
line-height: 2.35rem;
}
button.refuse{
    color: #FF9415;
    background: transparent;
}
button.confirm{
background: #FF9415;
color: #FFFFFF;
}
</style>