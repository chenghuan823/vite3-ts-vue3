<script setup lang="ts">
const props=defineProps({
    taskList:Array
})
</script>
<template>
    <h3>其他任务<span></span></h3>
    <div class="task-source-item" v-for="item in taskList" :key="item.task_id">
        <div class="title">
            <h5>{{ item.task_name }}</h5>
            <span>{{ item.task_budget }}</span>
        </div>
        <dl>
            <dt>
                {{ item.city }}
            </dt>
            <dt>
                ｜
            </dt>
            <dt>
                {{item.cycle}}天
            </dt>
            <dt>
                ｜
            </dt>
            <dt>
                {{ item.service_mode }}
            </dt>
        </dl>
    </div>
</template>


<style scoped>
h3{
    font-size: 0.96rem;
font-weight: 500;
color: #333333;
line-height: 0.96rem;
margin: 1.15rem .77rem .4rem;
position:relative;
}
h3 span{
    display: inline-block;
    width: 1.87rem;
height: 0.64rem;
background: linear-gradient(90deg, #FE8F27, #ffffff);
opacity: 0.46;
border-radius: 0.32rem; 
position: absolute;
left: 0;bottom: 0;
}
.task-source-item{
    padding: 1.55rem .59rem 1.47rem;
    border-bottom: 1px solid #eee;
}
.task-source-item .title{
    padding: 0rem 0 .48rem;
    display: flex;
    justify-content: space-between;
}
.task-source-item .title h5{
    font-size: 0.85rem;
font-weight: 400;
color: #333333;
line-height:0.85rem;
}
.task-source-item .title span{
    font-size: 0.75rem;
font-weight: 400;
color: #F1983C;
line-height: .75rem;
}
.task-source-item dl{
display: flex;
}
.task-source-item dl dt{
    margin-right: .3rem;
    font-size: 0.69rem;
font-weight: 100;
color: #333333;
line-height: 0.69rem;
}
</style>