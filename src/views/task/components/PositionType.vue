<script setup lang="ts">
import {inject,reactive} from 'vue'
const {closePositionType} =inject('popup')
import {positionType} from '@/api/task'
import { Toast } from 'vant';
import {taskStore} from '@/store/task'
const store=taskStore()
const state=reactive({
    type:0
})
const onClickLeft=()=>{
    closePositionType()
}
const getPositionType=async()=>{
    const res=await positionType()
    if(res){
        store.setPositionList(res)
    }else{
        Toast('error')
    }
}
getPositionType()
const closePositionType_=(e:any)=>{
    if(e.target.tagName!=='DT'){
        return
    }
    const currentPositionType=e.target.dataset.position
    closePositionType(currentPositionType)
}
</script>
<template>
    <div>
        <van-nav-bar
        title="职位类型"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="position">
            <div class="position-category">
                <dl>
                    <dt :class="state.type===index?'active':''" v-for="(item,index) in store.positionList" :key="item.id" @click="state.type=index">{{ item.name }}</dt>
                </dl>
            </div>
            <div class="position-list">
                <dl @click="closePositionType_">
                    <dt v-for="item in store.positionList[state.type] && store.positionList[state.type].children" :key="item.id" :data-position="item.name">{{ item.name }}</dt>
                </dl>
            </div>
        </div>
    </div>
</template>


<style scoped>
.position{
    height: calc(100vh - 46px);
display: flex;
}
.position-category{
    width: 4.77rem;
height: 100%;
background: #F6F6F6;
}
.position-category dt{
    width: 4.77rem;
height: 2.4rem;
text-align: center;
line-height: 2.4rem;
}
.position-category dt.active{

    background: #EFEFEF;
}
.position-list{
    flex: 1;

}
.position-list dl{
display: flex;
flex-wrap: wrap;
padding: 0 .7rem;
}
.position-list dl dt{
    width: 6.61rem;
height: 2.03rem;
box-sizing: border-box;
    font-size: 0.75rem;
    text-align: center;
font-weight: 300;
color: #666666;
line-height: 2.03rem;
border: 1px solid #e9e9e9;
margin:0 .59rem .64rem 0;
}
.position-list dl dt:nth-child(2n){
margin-right: 0;
}
</style>