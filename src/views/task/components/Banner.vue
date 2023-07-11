<script setup lang="ts">
import { BannerList } from '@/api/task';
import { Toast } from 'vant';
import {taskStore} from '@/store/task'
const store=taskStore()
const getBanner=async ()=>{
    const res=await BannerList({
        type:2
    })
    if(res){
        store.setBannerList(res.list)
    }else{
        Toast('error')
    }
}
if(store.bannerList.length<=0){ 
    getBanner()
}
</script>
<template>
    <van-swipe class="my-swipe" :show-indicators="false" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in store.bannerList" :key="item.id">
            <img :src="item.picture" alt="">
        </van-swipe-item>
    </van-swipe>
</template>


<style scoped>
.my-swipe{
    box-sizing: border-box;
    padding:0 0.64rem;
    margin:0 auto;
}
  .my-swipe .van-swipe-item  img{
    width: 18.72rem;
 border-radius: .4rem;
  }
</style>