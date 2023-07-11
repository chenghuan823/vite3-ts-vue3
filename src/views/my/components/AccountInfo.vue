<script setup lang="ts">
import {reactive} from 'vue'
import {myStore} from '@/store/my'
import {useRouter} from 'vue-router'
const router=useRouter()

const gotoPage=(path:any)=>{
    router.push(path)
}

const store=myStore()
if(!store.userInfo.user_name){
    store.getUserInfo()
}
// import {collectList} from '@/api/my'

const state=reactive({
    loading:false,
//   collect:[]
})

const onClickLeft=()=>{
    history.back()
}

const getCollectList=async ()=>{
    state.loading=true
    const res=await collectList()
    if(res){
        // state.collect=res.data
    }else{
        // Toast(res.msg)
    }
    state.loading=false
}
// getCollectList()

</script>
<template>
    <div class="account-info">
       <p>
            <label>账户余额（无忧币）<van-icon name="question-o" @click="gotoPage('/my/account/coinExplain')"/></label>
            <span @click="gotoPage('/my/account/advance')">提现<van-icon name="arrow" /></span>
       </p>
       <h3>￥{{ Number(store.userInfo.account_price).toFixed(2) }}</h3>
    </div>
</template>

<style scoped>
.account-info{
color: #FFFFFF;
background: #FF8E00;
width: 100%;

}
.account-info p{
    display: flex;
    justify-content: space-between;
    padding: 1rem .67rem 3.57rem;   
line-height: .8rem;
font-weight: 400;
font-size: 0.8rem;
}
h3{
   
font-weight: 500; 
font-size: 1.6rem;

line-height: 1.07rem;
padding-bottom: 3.49rem;
text-align: center;
}
</style>