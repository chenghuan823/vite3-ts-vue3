<script setup lang="ts">
import { provide } from 'vue';
import {reactive} from 'vue'
import PersonAdvantagePopup from './PersonAdvantagePopup.vue'
import {myStore} from '@/store/my'
const store=myStore()

const state=reactive({
    showPopup:false

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
        <h3>个人优势<van-icon name="edit"/></h3>
        <p>{{store.resumeInfo.advantage || '请您填写个人优势'}}</p>
    </div>
    <van-popup v-model:show="state.showPopup" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
        <PersonAdvantagePopup></PersonAdvantagePopup>
    </van-popup>
</template>


<style scoped>
</style>