<script setup lang="ts">
import {reactive,inject} from 'vue'
import {userfulExpress} from '@/api/message'

const list = ['😀','😁','😂','😃','😄','😅','😆','😉','😊','😋','😎','😍','😘','😗','😙','😚','😇','😐','😑','😶','😏']

const {emojiChange} =inject('popup')

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

</script>
<template>
    <div class="talk-emoji">
        <span @click="emojiChange(item)" v-for="(item,index) in list" :key="index">{{ item }}</span>
    </div>
</template>


<style scoped>
.talk-emoji{
    height: 8rem;
}
.talk-emoji span{
    width:14.28%;
    display: inline-block;
    text-align: center;
    margin-bottom: .32rem;
    font-size: 1.4rem;
}

</style>