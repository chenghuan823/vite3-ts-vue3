<script setup lang="ts">
import { provide } from 'vue';
import {reactive} from 'vue'
import {myStore} from '@/store/my'
import PositionTypePopup from './PositionTypePopup.vue'
const store=myStore()

const state=reactive({
    showPopup:false,

})

const closePopup=()=>{
    state.showPopup=false
    store.getResumeDetail()
}
provide('popup',{
    closePopup
})
</script>
<template>
    <div class="resume-label" @click="state.showPopup=true">
        <h3>求职意愿<van-icon name="add-o"/></h3>
        <p>{{'请添加您的求职意愿'}}</p>
    </div>
    <van-popup v-model:show="state.showPopup" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
        <PositionTypePopup></PositionTypePopup>
    </van-popup>
</template>


<style scoped>
</style>