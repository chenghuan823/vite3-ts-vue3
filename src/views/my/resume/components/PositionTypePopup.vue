<script setup lang="ts">
import {reactive,inject,provide,computed} from 'vue'
// import {advantage} from '@/api/my'
import { Toast } from 'vant'; 
import {myStore} from '@/store/my'
import PositionType from '../../../task/components/PositionType.vue'
import ServiceTypePopup from './ServiceTypePopup.vue'
const store=myStore()
const {closePopup}=inject('popup')
const state=reactive({
    positionTypeBool:false,
    positionValue:'',
    showServiceType:false,
    serviceTypeValue:'',
    showServicePrice:false,
    servicePriceValue:'',
    showPrice:false
})

const confirm=async()=>{
    // const res=await advantage({
    //     "advantage": state.message
    // })
    // if(res){
    //     closePopup()
    //     Toast('保存成功')
    // }else{
    //     Toast('保存失败')
    // }
}

const closePositionType=(name:any)=>{
    if(name){
        state.positionValue=name
    }
    state.positionTypeBool=false

}
const closeServiceType=(name:any)=>{
    if(name){
        state.serviceTypeValue=name.toString()
    }
    state.showServiceType=false
}
provide('popup',{
    closePositionType,
    closeServiceType
})

const priceSelect=(value:any)=>{
    state.servicePriceValue=value.name
}

</script>
<template>
    <div>
        <van-nav-bar left-arrow title="求职意愿" @click-left="closePopup"/>
        <div class="position-list">
            <div class="user-item">
                <h5>职位类型</h5>
                <van-field v-model="state.positionValue" label="" placeholder="请选择您的职位类型" readonly is-link   @click="state.positionTypeBool=true" />
            </div>
        </div>
        <!-- 职位类型 -->
        <van-popup v-model:show="state.positionTypeBool" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
            <PositionType/>
        </van-popup>

        <div class="position-list">
            <div class="user-item">
                <h5>服务类型</h5>
                <van-field v-model="state.serviceTypeValue" label="" placeholder="请选择您的服务类型" readonly is-link   @click="state.showServiceType=true" />
            </div>
        </div>
        <!-- 服务类型 -->
        <van-popup v-model:show="state.showServiceType" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
            <ServiceTypePopup></ServiceTypePopup>
        </van-popup>

        <div class="position-list">
            <div class="user-item">
                <h5>服务价格</h5>
                <van-field v-model="state.servicePriceValue" label="" placeholder="请选择您的服务价格" readonly is-link   @click="state.showPrice=true" />
            </div>
        </div>
        <van-action-sheet
            v-model:show="state.showPrice"
            :actions="store.salary_scope"
            cancel-text="取消"
            close-on-click-action
            @cancel="state.showPrice=false"
            @select="priceSelect"
        />
        <button class="resumen-btn" @click="confirm">完成</button>
    </div>
</template>


<style scoped>
.position-list{
    margin: 1.52rem .67rem 0;

}
.user-item{
    margin-bottom: 1rem;
    border-bottom: 1px solid #f3f3f3;
}
.user-item h5{
    font-size: 0.75rem;
font-weight: 300;
color: #666666;
line-height: o.75rem;
}
:deep(.van-cell){
    padding-left: 0;
}
:deep(.van-field__control){
    color: #999;
}
</style>