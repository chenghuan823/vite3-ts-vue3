<script setup lang="ts">
import {reactive,inject} from 'vue'
import { Toast } from 'vant';
import {expressAdd,chatMessageWordsEdit} from '@/api/message'
const {closeWorksAdd} =inject('popup')
const props=defineProps({
    title:String,
    text:String,
    id:Number
})
const state=reactive({
    value:props.text || ''
})
const getExpressAdd=async()=>{
    if(!state.value){
        return
    }
    let res=null;
    if(props.id){
        res=await chatMessageWordsEdit({
            "text": state.value,
            id:props.id
        })
    }else{
        res=await expressAdd({
        "text": state.value
        })
    }
    
    if(res){
        Toast(res.msg)
        state.value=''
        closeWorksAdd()
    }else{
        Toast('error')
    }
}

</script>
<template>
        <van-nav-bar
        :title="props.title"
        left-arrow
        @click-left="closeWorksAdd"
        >
        <template #right>
            <span @click="getExpressAdd">完成</span>
        </template>
        </van-nav-bar>
        <van-field
            v-model="state.value"
            maxlength="200"
            autosize
            rows="10"
            show-word-limit
            type="textarea"
            label=""
            placeholder="请输入您的常用回复请不要填写qq、微信等联系方式或 广告信息，否则系统将封禁您的账号。"
        />
</template>


<style scoped>
</style>