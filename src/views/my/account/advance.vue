<script setup lang="ts">
import {reactive,watch} from 'vue'
import {tiXian} from '@/api/my'
import { Toast } from 'vant';
import {myStore} from '@/store/my'
const store=myStore()
const state=reactive({
    price:'',
})

const onClickLeft=()=>history.back()

const onTiXian=async ()=>{
    if(!(state.price>0)){
        Toast('提现金额不正确')
        return
    }
    const res=await tiXian({
        price:state.price
    })
    if(res){
        state.price=''
        store.getUserInfo()
    }
    Toast(res.msg)
}

const allAdvance=()=>{
    if(store.userInfo.account_price<=0){
        Toast('余额不足')
        return
    }
    state.price=store.userInfo.account_price
    onTiXian()
}

watch(()=>state.price,(newValue,oldValue)=>{
    if(!(newValue>0)){
        Toast('提现金额不正确')
        state.price=parseFloat(oldValue)
        return
    }
    if(parseFloat(newValue)<0){
        Toast('提现金额不正确')
        return
    }
    if(parseFloat(newValue)>50000){
        Toast('提现金额不能超过5万')
        state.price=parseFloat(oldValue)
        return
    }
    if(newValue){
        newValue=newValue.toString()
        let index=newValue.indexOf('.')
        if(index>0 && newValue.length-index>3){
            state.price=parseFloat(oldValue)
            return
        }
    }
})
</script>
<template>
    <div>
        <van-nav-bar title="提现" left-arrow @click-left="onClickLeft" />
        <div class="advance">
            <van-form @submit="onTiXian">
                <div class="advance-amount">
                    <h5>提现金额</h5>
                    <div class="number">
                        <span>￥</span>
                        <input type="number" v-model="state.price">
                    </div>
                    <p>
                        <span>可提现余额￥{{ store.userInfo.account_price }}</span>
                        <label @click="allAdvance">全部提现</label>
                    </p>
                </div>
                <button native-type="submit">提现至支付宝</button>
            </van-form>
        </div>
    </div>
</template>

<style scoped>
.van-nav-bar{
    background: #ff8e00;
}
:deep(.van-nav-bar__title){
    color: #fff;
}
:deep(.van-nav-bar .van-icon ){
    color: #fff;
}
.advance{
    background:#fbfbfb ;
    height: calc(100vh - 46px - 1.17rem);
    padding: 1.17rem .64rem 0;
}
.advance form{
    width: 18.72rem;
    box-sizing: border-box;
}
.advance form .advance-amount{
    padding: 1.31rem .64rem .93rem;
    background:#fff ;
}
.advance form .advance-amount h5{
    font-size: 0.75rem;
    font-weight: 400;
    color: #999999;
    line-height: .75rem;
}
.advance form .advance-amount .number{
    box-sizing: border-box;
    padding: 2.43rem 0 1.6rem;
    height: 4.96rem;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
}
.advance form .advance-amount .number span{
    font-size: 1.28rem;
    font-weight: 400;
    color: #333333;
    line-height: 1.28rem; 
    margin-right: .5rem;
}
.advance form .advance-amount .number input{
    flex: 1;
    font-size: 1.1rem;
}
.advance form .advance-amount p{
    padding: .99rem 0 0;
    font-size: 0.69rem;
    font-weight: 400;
    color: #999999;
    line-height: .69rem;
}
.advance form .advance-amount p label{
    color: #FF8E00;
    float: right;
}
button{
    width: 18.72rem;
    height: 2.35rem;
    background: linear-gradient(90deg, #FEA829, #FE8F27);
    border-radius: 0.27rem;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.35rem;
    border: 0;
    margin-top: 1.33rem;
}
</style>