<script setup lang="ts">
import {reactive,inject} from 'vue'
import {taskStore} from '@/store/task'
const {closeCitySwitch}=inject('popup')
const store=taskStore()
const state=reactive({

})
const onClickLeft=()=>{
    closeCitySwitch()
}

if(store.cityList.length===0){
    store.getCityList()
}
const changeCity=(e:any)=>{
    if(e.target.tagName !== 'SPAN'){
        return
    }
    closeCitySwitch(e.target.dataset.name)
}
</script>
<template>
    <div>
        <van-nav-bar
        title="切换城市"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="city-switch">
            <h3>当前城市：</h3>
            <div class="city-switch-text">
                <span>{{ store.cityValue }}</span>
            </div>
            <h3>切换城市：</h3>
            <div class="city-switch-text" @click="changeCity">
                <span v-for="(item,index) in store.cityList" :key="index" :data-name="item.name">{{ item.name }}</span>
            </div>
                
        </div>

    </div>
</template>


<style scoped>
.city-switch{
    box-sizing: border-box;
    padding:.5rem .7rem;
}
.city-switch .city-switch-text{
  display: flex;  
  flex-wrap: wrap;
  margin-top:1.23rem ;
}
.city-switch .city-switch-text span{
    width: 4.06rem;
height: 1.6rem;
box-sizing:border-box;    
line-height:1.6rem;
margin:0 .77rem .8rem 0;
font-size: 0.64rem;
text-align:center;
border: 1px solid #EBEBEB;
border-radius: 0.11rem;
}
.city-switch .city-switch-text span:nth-child(4n){
margin-right:0;
}

</style>