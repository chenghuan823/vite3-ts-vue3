<script setup lang="ts">
const props=defineProps({
    companpySource:Object
})
</script>
<template>
    <div class="company-source"> 
        <div class="detail">
            <img v-show="companpySource.head_img" :src="companpySource.head_img" alt="">
            <div class="content">
                <h4>{{ companpySource.company_name }}</h4>
                <label><span>{{companpySource.user_name}}</span>.<span>{{ companpySource.city }}</span></label>
            </div>
        </div>
    </div>
</template>


<style scoped>
.company-source{
    padding: .91rem .67rem 1.2rem;
    border-bottom: 1px solid #eee;
}
.detail{
    display: flex;
}
.detail img{
    width: 2.67rem;
height: 2.67rem;
    margin-right: 0.61rem;
    border-radius: 50%;
}
.detail .content{
flex: 1;
}
.detail h4{
font-size: 0.8rem;
font-weight: 300;
color: #333333;
line-height: 0.8rem;
margin:.37rem 0 .51rem;
}
.detail label{
font-size: 0.69rem;
font-weight: 100;
color: #666666;
line-height: 0.69rem;
margin-top: .51rem;
}
</style>