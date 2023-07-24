<script setup lang="ts">
import {reactive,inject,provide} from 'vue'
import {myStore} from '@/store/my'
const store=myStore()

const {closeServiceType}=inject('popup')

const state=reactive({
    checked:[]
})
</script>

<template>
    <van-nav-bar left-arrow title="服务类型" @click-left="closeServiceType()"/>
    <van-checkbox-group v-model="state.checked" direction="horizontal">
        <van-checkbox shape="square" :name="item" v-for="(item,index) in store.jobsType" :key="index">{{ item }}</van-checkbox>
    </van-checkbox-group>
    <button class="resumen-btn" @click="closeServiceType(state.checked)">保存</button>
</template>

<style scoped>
.van-checkbox-group--horizontal{
    padding-top: 1rem;
    justify-content: space-evenly;
}
</style>