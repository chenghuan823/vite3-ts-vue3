<script setup lang="ts">
import {reactive} from 'vue'
import {useRouter} from 'vue-router'
import {getCode,login} from '@/api/user'
import {userStore} from '@/store/user'
import {Toast} from 'vant'
const router=useRouter()
const store=userStore()
const state=reactive({
  checked:true,
  accounts:'',
  code:'',
  codeText:'获取验证码',
  time:60,
  interTimeCode:null
})
const getCodeChange=async()=>{
if(state.interTimeCode) return
const res =await getCode({
    accounts: state.accounts
})
if(res){
  state.interTimeCode=setInterval(()=>{
    state.time--
    if(state.time<=0){
      clearInterval(state.interTimeCode)
      state.time=60
      state.codeText='获取验证码'
    }else{
      state.codeText=`重新发送${state.time}s`}
  },1000)
  state.code=res.code
}
}
const loginSubmit=async()=>{
  if(!state.code){
    Toast('请输入验证码')
    return
  }
  if(!state.checked){
    Toast('请勾选协议')
    return
  }
  const res=await login({
    accounts: state.accounts,
    code: state.code
  })
  if(res.errCode===200){
    store.setUserInfo(res.data)
    if(store.role==1){
      router.push('/task')
    }
    if(store.role==2){
      router.push('/talent')
    }
  }else{
    Toast(res.msg)
  }

}
const onClickLeft=()=>{
  history.back()
}
</script>

<template>
  <div>
    <van-icon class="icon-left" name="arrow-left" @click="onClickLeft"/>
    <div class="login-form">
      <h3>验证码登录</h3>
      <div class="login-form-item">
        <i class="icon-phone"></i>
        <input placeholder="请输入手机号" v-model="state.accounts" type="text"/>
      </div>
      <div class="login-form-item">
        <i class="icon-code"></i>
        <input placeholder="请输入验证码" v-model="state.code" type="text"/>
        <span @click="getCodeChange">{{ state.codeText }}</span>
      </div>
    <van-button type="primary" block @click="loginSubmit">登录</van-button>

    </div>
    <div class="login-form-label">
      <van-checkbox v-model="state.checked">我已阅读</van-checkbox>
      <router-link to="/login/serviceAgree">《IT企业平台服务协议》</router-link>和
      <router-link to="/login/privacyPolicy">《隐私政策》</router-link>
    </div>
  </div>
</template>

<style scoped>
.icon-left{
  font-size: .8rem;
  margin: 0.67rem 0 0 .67rem;
}
.login-form{
  padding: 0 1.23rem;
  margin-top: 2rem;
}
.login-form h3{
  font-size: 1.39rem;
color: #333333;
line-height: 1.39rem;
margin-bottom: 4.16rem;
}
.login-form-item{
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e7e7e7;
  margin-bottom:2.2rem ;
  padding: .5rem 0;
}
.login-form-item input{
  background: transparent;
  flex: 1;
}
.login-form-item span{
font-size: 0.75rem;
font-weight: 300;
color: #FE9527;
padding-left: .56rem;
line-height: 0.75rem;
border-left: 1px solid #FE9527;
}
.icon-phone{
  width: 1.01rem;
  margin-right: .6rem;
height: 1.01rem;
  background:url('../../assets/img/icon/icon-phone.png') no-repeat;
  background-size: 100%;
}
.icon-code{
  width: 1.01rem;
height: 1.01rem;
margin-right: .6rem;

  background:url('../../assets/img/icon/icon-code.png') no-repeat;
  background-size: 100%;
}
.login-form-label{
  display: flex;
  align-items: center;
  position: fixed;
  left:2.88rem ;
  bottom: 2.29rem;
}
</style>
