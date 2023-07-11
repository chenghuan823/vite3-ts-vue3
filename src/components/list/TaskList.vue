<script setup lang="ts">
import  {useRouter} from 'vue-router'
const props=defineProps({
    taskList:{
        type:Array,
        default:()=>[{}]
    }
})
const router=useRouter()
const gotoDetail=(id:any)=>{
    router.push('/task/details/'+id)
}
</script>
<template>
    <div class="task-item" v-for="(item,index) in taskList" :key="index" @click="gotoDetail(item.task_id)">
        <div class="task-item-top">
            <h3>{{ item.task_name }}</h3>
            <span v-if="item.is_emergency==1">紧急</span>
        </div>
        <dl>
            <dt>
                <h5>任务预算</h5>
                <strong>&yen;{{ item.task_budget }}</strong>
            </dt>
            <dt>
                <h5>任务周期</h5>
                <strong>{{item.task_cycle}}天</strong>
            </dt>
            <dt>
                <h5>服务方式</h5>
                <strong>{{item.service_mode}}</strong>
            </dt>
        </dl>
        <p>任务要求：{{item.task_ask}}</p>
        <div class="task-item-bottom">
            <label>{{item.company_name}}</label>
            <span><van-icon name="location-o" />{{item.city}}</span>
        </div>
    </div>
</template>


<style scoped>
.task-item{
    position: relative;
    box-sizing: border-box;
    margin: 0rem auto .53rem;
    padding:.88rem .48rem 0;
    width: 18.72rem;
/* height: 10.14rem; */
    background: #FFFFFF;
    border-radius: 0.53rem;
    font-weight: 100; 
    font-size: 0.69rem;
}
.task-item-top{
display: flex;
}
.task-item-top h3{
    font-size: 0.91rem;
    line-height: .91rem;
font-weight: 400;
color: #333333;
}
.task-item-top span{
    position: absolute;
    right: 0;
    width: 2.29rem;
height: 1.08rem;
background: linear-gradient(90deg, #FEA829, #FE8F27);
border-radius: 0.53rem 0 0 .53rem;
font-size: 0.59rem;
font-weight: 300;
color: #FFFFFF;
line-height: 1.08rem;
text-align: center;
}
dl{
    display: flex;
    margin: 1.01rem 0 .91rem;
}
dl dt{
    margin-right: 1.44rem;
}
dl dt h5{
    font-size: 0.69rem;
font-weight: 100;
color: #999999;
line-height: 0.69rem;
margin-bottom: .51rem;
}
dl dt strong{
    font-size: 0.64rem;
font-weight: 500;
color: #333333;
line-height: 0.64rem;
}
.task-item p{
    overflow: hidden;
    text-overflow: ellipsis;
    display:-webkit-box;
    -webkit-line-clamp:2;
    -webkit-box-orient :vertical;
    color: #333333;
}
.task-item-bottom{
    color: #666666;
    margin-top: .83rem;
    border-top: 1px solid #f5f5f5;
    padding: .75rem 0;
    display: flex;
    justify-content: space-between;
}
.task-item-bottom i{
    font-size:.8rem;
    font-weight: 600;
    margin-right: .1rem;
}
</style>