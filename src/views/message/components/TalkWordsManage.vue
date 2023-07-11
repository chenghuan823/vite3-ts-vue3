<script setup lang="ts">
import {reactive,inject,provide} from 'vue'
import { Toast } from 'vant';
import {userfulExpress,chatMessageWordsDelete} from '@/api/message'
import TalkWordsAdd from './TalkWordsAdd.vue'
const {closeWorkManage} =inject('popup')
const state=reactive({
    expressList:[],
    editId:'',
    text:'',
    title:'',
    wordsAddBool:false
})

const getUserfulExpress=async()=>{
    const res=await userfulExpress({})
    if(res){
        state.expressList=res.data
    }
}
getUserfulExpress()

const submitDelete=async(id:any)=>{
    const res=await chatMessageWordsDelete({
        id
    })
    Toast(res.msg)
    getUserfulExpress()
}

const editChange=(id:any,text:any)=>{
    state.editId=id
    state.text=text
    state.title='修改常用语'
    state.wordsAddBool=true
}
const addChange=()=>{
    state.editId=''
    state.text=''
    state.title='添加常用语'
    state.wordsAddBool=true

}
const closeWorksAdd=()=>{
    state.wordsAddBool=false
    getUserfulExpress()
}

provide('popup',{
    closeWorksAdd
})
</script>
<template>
    <van-nav-bar
    title="管理常用语"
    left-arrow
    @click-left="closeWorkManage"
    >
    </van-nav-bar>
    <div class="manage-list">
        <van-swipe-cell  v-for="item in state.expressList" :key="item.id">
            <div class="item">
                <p>{{ item.text }}</p>
                <div>
                    <img src="@/assets/img/icon/icon-edit.png" alt="">
                    <span @click="editChange(item.id,item.text)">编辑</span>
                </div>
            </div>
            <template #right>
                <img @click="submitDelete(item.id)" class="delete" src="@/assets/img/icon/icon-delete.png" alt="">
            </template>
        </van-swipe-cell>
        <div class="add">
            <button @click="addChange">添加常用语</button>
        </div>
        <!-- 添加常用语 -->
        <van-popup v-model:show="state.wordsAddBool"  teleport="body" duration="0" position="top" :style="{ height: '100%',width: '100%' }" >
            <TalkWordsAdd :title="state.title" :id="Number(state.editId)" :text="state.text"/>
        </van-popup>
    </div>
</template>

<style scoped>
:deep(.van-swipe-cell__right ){
    display: flex;
    align-items: center;
}
.manage-list{
padding-bottom: 6rem;
}
.item{
    margin: 0 .72rem;
    border-bottom: 1px solid #eee;
    font-size: .75rem;
    color: #030303;
    line-height: 1.12rem;
    padding:1rem .2rem .4rem ;
}
.item div{
    display: flex;
    align-items: center;
    justify-content: right;
    margin-bottom: .77rem;
    
}
.item div span{
    font-size: .75rem;
    color: #030303;
    font-weight: 300;
    line-height: .75rem;
    text-align: right;
}
.item div img{
    width: .91rem;
    height: .91rem;
}
.delete{
    width: 1.87rem;
    height: 1.87rem;
    margin-right: .64rem;
}
.add{
    bottom: 0rem;
    width: 100%;
    position: fixed;
    padding:0 .59rem .64rem;
    background: #fff;
}
.manage-list .add button{
    width: 18.72rem;
    height: 2.35rem;
    background: linear-gradient(90deg, #FFA400, #FF8900);
    border-radius: 0.27rem;
    font-size: 0.8rem;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 2.35rem;
    text-align: center;
    border: none;
}
</style>