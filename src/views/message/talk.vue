<script setup lang="ts">
import {reactive,provide} from 'vue'
import {messageStore} from '@/store/message'
import {chatMessageContent,chatMessageContentAdd} from '@/api/message'
import {useRoute} from 'vue-router'
import { Toast } from 'vant';
import { onBeforeUnmount } from 'vue';
import TalkWords from './components/TalkWords.vue'
import TalkEmoji from './components/TalkEmoji.vue';
const route=useRoute()
const taskId=route.params.taskId
const userId=route.params.userId
const store=messageStore()
store.getSystemMessageList()
const state=reactive({
    usefulExpressBool:false,
    emojiVisible:false,
    chatMessageContent:[],
    loading:false,
    value:'',
    taskName:'',
    createSetInterval:null,
})
const onClickLeft=()=>history.back();

const sendSubmit=async()=>{
    state.loading=true
    const res=await chatMessageContentAdd({
        "receive_id": userId, 
        "things_id": taskId, 
        "content": state.value, 
        "things_type": 0 
    })
    if(res){
        getChatMessageContent()
        state.value=''
    }
    Toast(res.msg)
}

const getChatMessageContent=async ()=>{
    const res=await chatMessageContent({
        receive_id:userId,
        things_id:taskId,
        things_type:0
    })
    if(res){
        state.chatMessageContent=res.data
        state.taskName=res.data[0].task_name || '任务'
    }else{
        Toast('error')
    }
}
getChatMessageContent()

const createInterval=()=>{
    stopInterval()
    state.createSetInterval=setInterval(()=>{
        getChatMessageContent()
    },5000)
}
const stopInterval=()=>{
    state.createSetInterval && clearInterval(state.createSetInterval)
    state.createSetInterval=null
}
createInterval()
onBeforeUnmount(()=>{
    stopInterval()
})

const worksChange=(data:any)=>{
    state.value=data
}
const emojiChange=(data:any)=>{
    state.value+=data
    state.emojiVisible=false
}
provide('popup',{
    worksChange,
    emojiChange
})

const clickSmile=()=>{
    state.usefulExpressBool=false
    state.emojiVisible=!state.emojiVisible
}
const switchExpress=()=>{
    state.emojiVisible=false
    state.usefulExpressBool=!state.usefulExpressBool
}
</script>
<template>
    <div>
        <van-nav-bar
        :title="state.taskName"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="talk-page">
            <dl>
                <dt :class="{active:item.receive_id===userId}" v-for="(item,index) in state.chatMessageContent" :key="index" >
                    <h5>{{ item.create_time }}</h5>
                    <div class="talk-con">
                        <img v-if="item.receive_id===userId" :src="item.senderPhoto" alt="">
                        <img v-else :src="item.receivePhoto" alt="">
                        <p>{{ item.text }}</p>
                    </div>
                </dt>
            </dl>
        </div>
        <div class="talk-bottom">
            <div class="talk-input">
                <span @click="switchExpress">常用语</span>
                <input v-model="state.value" type="text">
                <van-icon size="1.36rem" name="smile-o" @click="clickSmile"/>
                <span @click="sendSubmit">发送</span>
            </div>
            <TalkWords v-show="state.usefulExpressBool" />
            <TalkEmoji v-show="state.emojiVisible"/>
        </div>
    </div>
</template>


<style scoped>
:deep(.van-hairline--bottom:after){
    border-bottom:1px solid #eee;
}
.talk-page{
    box-sizing: border-box;
    width: 100%;
    background:#f3f3f3;
    min-height: calc(100vh - 46px - 2.95rem);
    padding: 1.01rem .75rem 4rem;
}
.talk-page dl dt h5{
    font-size: 0.64rem;
    font-weight: 300;
    color: #999999;
    line-height: 0.64rem;
    margin-bottom: .51rem;
    text-align: center;
}
.talk-page dl dt .talk-con{
    display: flex;
    margin-bottom: 1.47rem;
}
.talk-page dl dt .talk-con img{
    width: 2.14rem;
    height: 2.14rem;
    border-radius: 50%;
}
.talk-page dl dt .talk-con p{
    width: 12.53rem;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EFEFEF;
    border-radius: 0.11rem;
    padding: 0.4rem .6rem;
    margin-left: .3rem;
    line-height: 1rem;
    color: #030303;
    font-weight: 100;
    font-size: 0.75rem;
}
.talk-page dl dt.active h5{
    font-size: 0.64rem;
    font-weight: 300;
    color: #999999;
    line-height: 0.64rem;
    margin-bottom: .51rem;
    text-align: center;
}
.talk-page dl dt.active .talk-con{
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 1.47rem;
}
.talk-page dl dt.active .talk-con img{
    width: 2.14rem;
    height: 2.14rem;
    border-radius: 50%;
    margin-left: .3rem;
}
.talk-page dl dt.active .talk-con p{
    width: 12.53rem;
    box-sizing: border-box;
    color: #fff !important;;
    background: #FF9415;
    border: 1px solid #EFEFEF;
    border-radius: 0.11rem;
    padding: 0.4rem .6rem;
    margin-left: .3rem;
    line-height: 1rem;
    color: #030303;
    font-weight: 100;
    font-size: 0.75rem;
}

.talk-bottom{
    
/* height: 3.95rem; */
    position: fixed;
    bottom:0;
    left: 0;
    right:0;
    padding-bottom: 0.57rem;
    
background: #FFFFFF;
}
.talk-bottom .talk-input{
    margin-top: .24rem;
    display: flex;
    align-items: center;
    padding: 0 .64rem;
}
.talk-bottom .talk-input span{
    width: 2.61rem;
    height: 1.33rem;
    background: #FF9415;
    border-radius: 0.13rem;
    font-size: 0.64rem;
    font-weight: 100;
    color: #FFFFFF;
    line-height: 1.33rem;
    text-align: center;
}
.talk-bottom .talk-input i{
    margin-right: .43rem;
}
.talk-bottom .talk-input input{
    flex: 1;
    height: 2.13rem;
    background: #FBFBFB;
    border: 0px solid #EFEFEF;
    border-radius: 0.13rem;
    margin: 0 .61rem;
}
</style>