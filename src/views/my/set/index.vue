<script setup lang="ts">
import {userStore} from '@/store/user'
import setItem from '../components/setItem.vue'
import {useRouter} from 'vue-router'
const router=useRouter()

const store=userStore()
const onClickLeft=()=>{
    history.back()
}

const logout=()=>{
    store.logout()
    router.push('/login')
}
</script>
<template>
    <div class="set-page">
        <van-nav-bar title="我的设置" left-arrow @click-left="onClickLeft" />
        <setItem></setItem>
        <button class="set-btn" @click="logout">退出登录</button>
    </div>
</template>

<style scoped>
.set-page{
    height: 100vh;
    background: #fff;
    margin: .8rem .64rem 1rem;
}
.set-btn{
    font-size: 0.8rem;
font-weight: 300;
color: #FFFFFF;
line-height: 1.23rem;
width: 18.69rem;
height: 2.35rem;
background: linear-gradient(90deg, #FFA400, #FF8900);
border-radius: 0.27rem;
margin: 2rem auto 0;
border: 0;
text-align: center;
}
</style>