<script setup lang="ts">
import {reactive,provide} from 'vue'
import UserInfoPage from '../../components/UserInfoPage.vue'

const props=defineProps({
    item:{
        type:Object
    }
})

const state=reactive({
    showUserInfoPage:false,
})

const closeChange=()=>{
    state.showUserInfoPage=false
}
provide('popup',{
    closeChange
})
</script>
<template>
    <div class="person-info" @click="state.showUserInfoPage=true">
        <div class="info-left">
            <h3>{{ props.item.user_name }}<van-icon size="0.99rem" name="edit"/></h3>
            <p>{{props.item.work_year}} ｜ {{props.item.highest_education}} ｜ {{props.item.age}} </p>
        </div>
        <img :src="props.item.it_head" alt="">
    </div>
    <van-popup v-model:show="state.showUserInfoPage" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
        <UserInfoPage></UserInfoPage>
    </van-popup>

</template>


<style scoped>
.person-info{
    padding: .99rem 0rem 1.41rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    margin: 0 .72rem;
}
.info-left{

}
.info-left h3{
    font-size: 1.28rem;
font-weight: 400;
color: #333333;
line-height: 1.28rem;
margin-bottom: .63rem;
}
.info-left h3 i{
margin-left: .3rem;
}
.info-left p{
    font-size: 0.69rem;
font-weight: 300;
color: #666666;
line-height: 0.69rem;
}
.person-info img{
    width: 3.19rem;
height: 3.19rem;
border-radius: 50%;
}
</style>