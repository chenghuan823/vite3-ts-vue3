<script setup lang="ts">
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import FooterTabbar from '@/components/FooterTabbar.vue'
import {myStore} from '@/store/my'
const store=myStore()
const router=useRouter()
if(!store.userInfo.user_name){
    store.getUserInfo()
}
const state=reactive({

})

const gotoPage=(path:any)=>{
    router.push(path)
}
</script>
<template>
    <div class="my-page">
        <van-nav-bar
        title="我的"
        @click-left=""
        >
        <template #right>
            <van-icon name="setting-o" @click="gotoPage('/my/set')"></van-icon>
        </template>
        </van-nav-bar>
        <div class="my-info">
            <img v-if="store.userInfo.it_head" :src="store.userInfo.it_head" alt="">
            <img v-else src="@/assets/img/icon/icon-message.png" alt="">
            <div @click="gotoPage('/my/user')">
                <h3>{{ store.userInfo.user_name }}<span></span></h3>
                <p>IT企业人才</p>
            </div>
            <i @click="gotoPage('/my/account')"></i>
        </div>
        <div class="my-type">
            <router-link to="/my/collect">
                <img src="@/assets/img/my/icon-my-collection.png" alt=""><span>我的收藏</span>
            </router-link>
            <strong></strong>
            <router-link to="/my/resume">
                <img src="@/assets/img/my/icon-my-resume.png" alt=""><span>我的简历</span>
            </router-link>
        </div>
        <div class="my-contract">
            <div class="my-title">
                <h3>我的合约</h3><span>查看全部合约<van-icon name="arrow" /></span>
            </div>
            <div class="my-contract-cur">
                <span><img src="@/assets/img/my/contract-be-signed.png"/>待签约</span>
                <span><img src="@/assets/img/my/contract-in-performance.png"/>履约中</span>
                <span><img src="@/assets/img/my/contract-completed.png"/>已完成</span>
                <span><img src="@/assets/img/my/contract-canceled.png"/>已取消</span>
            </div>
        </div>
        <div class="my-common">
            <div class="my-title">
                <h3>常用功能</h3>
            </div>
            <div class="my-item">
                <img src="@/assets/img/my/icon-real-name-auth.png" alt="">
                <label for="">实名认证</label>
                <span><van-icon name="arrow" /></span>
            </div>
            <div class="my-item">
                <img src="@/assets/img/my/icon-account-manager.png" alt="">
                <label for="">专属客户经理</label>
                <span><img src="@/assets/img/icon/icon-message.png" alt="">无忧经理<van-icon name="arrow" /></span>
            </div>
        </div>
        <div class="my-common">
            <div class="my-item">
                <img src="@/assets/img/my/icon-feedback.png" alt="">
                <label for="">意见反馈</label>
                <span><van-icon name="arrow" /></span>
            </div>
            <div class="my-item">
                <img src="@/assets/img/my/icon-about.png" alt="">
                <label for="">关于我们</label>
                <span><van-icon name="arrow" /></span>
            </div>
        </div>
        <div class="my-common">
            <div class="my-item">
                <img src="@/assets/img/my/icon-switch-role.png" alt="">
                <label for="">切换身份</label>
                <span>当前为IT企业人才身份<van-icon name="arrow" /></span>
            </div>
        </div>
    </div>
    <FooterTabbar/>
</template>


<style scoped>
:deep(.van-nav-bar__title){
    color: #fff;
    font-size: .96rem;
}
:deep(.van-nav-bar .van-icon){
font-size: 1.12rem;
color: #fff;
}
:deep(.van-nav-bar__right){
    padding-right:0 ;
}
    .my-page{
        padding: 0 .77rem 3rem;
        height: calc(100vh -3rem);
        background: #fbfbfb url('@/assets/img/my/top-background.png') center -.8rem no-repeat;
        background-size: contain;
        position: relative;

    }
    .my-info{
        display: flex;
        align-items: center;
        margin: .8rem 0 .93rem;
    }
    .my-info img{
        width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    margin-right: .85rem;
    }
    .my-info h3{
        font-size: 0.96rem;
    font-weight: 400;
    color: #FFFFFF;
    line-height: .96rem;
    margin-bottom: .48rem;
    }
    .my-info p{
        font-size: 0.69rem;
    font-weight: 400;
    color: #FFFFFF;
    line-height: .69rem;
    }
    .my-info span{
        width: .56rem;
        height: .56rem;
        margin-left: .59rem;
        display: inline-block;
        background:url('@/assets/img/my/icon-edit.png') no-repeat;
        background-size: 100%;
    }
    .my-info i{
        width: 4.91rem;
        height: 1.49rem;
        background: url('@/assets/img/my/icon-my-account.png') no-repeat;
        background-size: 100%;
        position: absolute;
        right: 0;
    }
    .my-type{
        display: flex;
        align-items: center;
        height: 3.31rem;
        margin-bottom: .53rem;
        border-radius: 0.27rem;
        box-shadow: 0rem 0rem 1rem 0rem rgba(49,57,73,0.09);
        background: #FFFFFF;
    }
    .my-type strong{
        width: 0.03rem;
height: 1.95rem;
background: #EDEDED;
    }
    .my-type a{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: center;
        
color: #666666;
    }
    .my-type a img{
        width: 2.24rem;
        height: 2.24rem;
        margin-right: .51rem;
    }
    .my-contract{
        width: 18.45rem;
height: 7.9rem;
background: #FFFFFF;
border-radius: 0.27rem;
margin-bottom: .59rem;
    }
    .my-contract .my-title{
display: flex;
justify-content: space-between;
align-items: center;
padding: .77rem .99rem;
border-bottom: 1px solid #eee;
    }
    .my-contract .my-title h3{
        font-size: 0.8rem;
font-weight: 400;
color: #333333;
line-height: .8rem;
    }
    .my-contract .my-title span{
        font-size: 0.64rem;
font-weight: 300;
line-height: .64rem;
color: #464646;
    }
    .my-contract-cur{
        height: 5.17rem;
        display: flex;
        align-items: center;
        vertical-align: center;
    }
    .my-contract-cur span{
flex: 1;
text-align: center;
font-size: 0.69rem;
font-weight: 300;
color: #464646;
    }
    .my-contract-cur span img{
width: 1.39rem;
height: 1.39rem;
display: block;
margin: 0 auto .59rem;
    }
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