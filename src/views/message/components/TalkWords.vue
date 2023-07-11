<script setup lang="ts">
import {reactive,inject,provide} from 'vue'
import { Toast } from 'vant';
import {userfulExpress} from '@/api/message'
import TalkWordsAdd from './TalkWordsAdd.vue'
import TalkWordsManage from './TalkWordsManage.vue'

const {worksChange} =inject('popup')

const state=reactive({
    expressList:[],
    addBool:false,
    manageBool:false
})

const getUserfulExpress=async()=>{
    const res=await userfulExpress({})
    if(res){
        state.expressList=res.data
    }else{
        Toast('error')
    }
}
getUserfulExpress()

const closeWorksAdd=()=>{
    state.addBool=false
    getUserfulExpress()
}

const closeWorkManage=()=>{
    state.manageBool=false
    getUserfulExpress()
}
provide('popup',{
    closeWorksAdd,
    closeWorkManage
})
</script>
<template>
    <div class="talk-word">
        <dl>
            <dt v-for="item in state.expressList" :key="item.id"  @click="worksChange(item.text)">{{ item.text }}</dt>
        </dl>
        <div class="talk-word-btn">
            <p @click="state.addBool=true" >
                <img src="@/assets/img/icon/icon-add.png" alt="">添加
            </p>
            <p @click="state.manageBool=true">
                <img src="@/assets/img/icon/icon-file.png" alt="">管理
            </p>
        </div>
        
        <!-- 添加常用语 -->
        <van-popup v-model:show="state.addBool"  teleport="body" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
            <TalkWordsAdd title="添加常用语"/>
        </van-popup>
        <!-- 管理常用语 -->
        <van-popup v-model:show="state.manageBool"  teleport="body" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
            <TalkWordsManage />
        </van-popup>
    </div>
</template>


<style scoped>
.talk-word{
    padding: 0.29rem .85rem 0;
}
.talk-word dl{
    box-sizing: border-box;
    height: 8.77rem;
    overflow-y: scroll;
    border-top: 1px solid #eee;
}
.talk-word dl dt{
height: 2.91rem;
line-height: 2.91rem;
font-size: 0.75rem;
font-weight: 300;
color: #030303;
border-bottom: 1px solid #eee;
overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient :vertical;
}
.talk-word dl dt:last-child{
    border: none;
}

.talk-word .talk-word-btn{
    display: flex;
    height: 3rem;
    border-top: 1px solid #eee;
}
.talk-word .talk-word-btn p{
    display: flex;
    align-items: center;
 flex: 1;  
font-weight: 300; 
color: #030303;
font-size: 0.75rem;
}
.talk-word .talk-word-btn p img{
    width: .91rem;
    height: .91rem;
    margin:0 .29rem 0 3rem;
}
</style>