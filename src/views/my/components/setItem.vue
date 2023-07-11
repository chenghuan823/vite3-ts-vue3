<script setup lang="ts">
import {useRouter} from 'vue-router'
const router=useRouter()
const gotoPage=(path:any)=>{
    router.push(path)
}
</script>

<template>
    <div class="my-common">
        <div class="my-item" @click="gotoPage('/login/privacyPolicy')">
        <img src="@/assets/img/my/icon-privacy.png" alt="">
        <label for="">隐私政策</label>
        <span><van-icon name="arrow" /></span>
    </div>
    <div class="my-item" @click="gotoPage('/login/serviceAgree')">
        <img src="@/assets/img/my/icon-agreement.png" alt="">
        <label for="">服务协议</label>
        <span><van-icon name="arrow" /></span>
    </div>
    </div>
</template>

<style>
    .my-common{
        width: 18.45rem;
background: #FFFFFF;
border-radius: 0.27rem;
margin-bottom: .59rem;
    }
    .my-common .my-title{
        font-size: 0.8rem;
font-weight: 400;
color: #333333;
padding: 1rem .77rem;
line-height: .8rem;
border-bottom:1px solid #eee;
    }
    .my-common .my-item{
height: 2.67rem;
background: #FFFFFF;
border-radius: 0.27rem;    
border-bottom: 1px solid #eee; 
display: flex;
align-items: center;
margin: 0 .4rem 0 .69rem;
font-size: 0.69rem;
font-weight: 300;
color: #464646;
    }
    .my-common .my-item:last-child{
border-bottom: 0;
    }
    .my-common .my-item>img{
        width: 1.12rem;
        height: 1.12rem;
        margin-right: .85rem;
        
    }
    .my-common .my-item label{
        flex: 1;
    }
    .my-common .my-item span{
        display: flex;
        align-items: center;
        text-align: right;
    }
    .my-common .my-item span img{
        width: 1.28rem;
height: 1.28rem;
border-radius: 50%;
margin-right: .32rem;
    }
</style>