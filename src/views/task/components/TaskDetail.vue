<script setup lang="ts">
const props=defineProps({
    item:{
        type:Object,
        default:{}
    }
})
</script>
<template>
    <div class="task-detail-wrapper">
        <div class="task-detail-title">
            <h3>{{ item.task_name }}</h3>
            <p>{{ item.position_name }}</p>
        </div>
        <dl>
            <dt>
                <h5>任务预算</h5>
                <p>￥{{item.task_budget}}元</p>
            </dt>
            <dt>
                <h5>任务周期</h5>
                <p>{{item.task_cycle}}天</p>
            </dt>
            <dt>
                <h5>服务方式</h5>
                <p>{{item.service_mode}}</p>
            </dt>
        </dl>
        <div class="task-info">
            <h3>任务信息</h3>
            <h5>任务要求</h5>
            <p>{{ item.task_ask }}</p>
        </div>
        <div class="work-guarantee">
            <h3>工作保障</h3>
            <img src="@/assets/img/task/details-guarantee.png" alt="">
        </div>
        <div class="task-source">
            <h3>任务来源</h3>
            <div class="detail">
                <img :src="item.head_img" alt="">
            <router-link :to="`/task/companySource/${item.company_id}/${item.task_id}`" class="content">
                <h4>{{ item.company_name }}</h4>
                <label><span>{{item.user_name}}</span>.<span>{{ item.city }}</span></label>
            </router-link>
            </div>
        </div>
    </div>
</template>


<style scoped>
.task-detail-wrapper{
    padding: .5rem .59rem 2.2rem;
}
.task-detail-title{
    padding-bottom: .85rem;
    border-bottom: 1px solid #f0f0f0;
}
.task-detail-title h3{
    font-size: 1.12rem;
color: #333333;
line-height: 1.12rem;
}
.task-detail-title p{
    margin: .93rem 0 0;
    font-size: 0.69rem;
font-weight: 300;
color: #666666;
line-height: 0.69rem;
}
dl{
    display: flex;
    padding: 1.23rem 0;
    border-bottom: 1px solid #f0f0f0;
}
dl dt{
    flex:1
}
dl dt h5{
    font-size: 0.69rem;
font-weight: 100;
color: #666666;
line-height: 0.69rem;
}
dl dt p{
    font-size: 0.8rem;
    margin-top: .53rem;
font-weight: 500;
color: #FF9415;
line-height: 0.8rem;
}
.task-info{
    padding: 1.55rem 0;
    border-bottom: 1px solid #f0f0f0;
}
.task-info h3{
    font-size: 0.96rem;
font-weight: 400;
color: #333333;
line-height: .96rem;
}
.task-info h5{
    font-size: 0.8rem;
font-weight: 300;
color: #333333;
line-height: 0.8rem;
margin: 1.04rem 0 .8rem;
}
.task-info h5 p{
    font-size: 0.69rem;
font-weight: 100;
color: #333333;
line-height: 0.69rem;
}
.work-guarantee{
    padding: 1.33rem 0 1.44rem;
    border-bottom: 1px solid #f0f0f0;
}
.work-guarantee h3{
    font-size: 0.96rem;
font-weight: 400;
color: #333333;
line-height: 0.96rem;
}
.work-guarantee img{
    margin-top: .83rem;
    width: 18.8rem;
    height: 6.88rem;
    border: 1px dotted #f0f0f0;
    
}
.task-source{
    padding: 1.36rem 0 0;
}
.task-source h3{
    margin-bottom: .44rem;
}
.task-source .detail{
    display: flex;
}
.task-source img{
    width: 2.67rem;
height: 2.67rem;
    margin-right: 0.61rem;
    border-radius: 50%;
}
.task-source .content{
flex: 1;
}
.task-source h4{
font-size: 0.8rem;
font-weight: 300;
color: #333333;
line-height: 0.8rem;
margin:.37rem 0 .51rem;
}
.task-source label{
font-size: 0.69rem;
font-weight: 100;
color: #666666;
line-height: 0.69rem;
margin-top: .51rem;
}
</style>