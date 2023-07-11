<script setup lang="ts">
import {reactive} from 'vue'
import TaskList from '@/components/list/TaskList.vue'
import {collectList} from '@/api/my'

const state=reactive({
    loading:false,
  collect:[]
})

const onClickLeft=()=>{
    history.back()
}

const getCollectList=async ()=>{
    state.loading=true
    const res=await collectList()
    if(res){
        state.collect=res.data
    }else{
        Toast(res.msg)
    }
    state.loading=false
}
getCollectList()

</script>
<template>
    <div>
        <van-nav-bar title="我的收藏" left-arrow @click-left="onClickLeft" />
        <div class="collect-page">
            <TaskList :taskList="state.collect" />
        </div>
    </div>
</template>

<style scoped>
.collect-page{
    background: #f9f9f9;
    padding-top: .4rem;
    height: calc(100vh - 46px - .4rem);
}
</style>