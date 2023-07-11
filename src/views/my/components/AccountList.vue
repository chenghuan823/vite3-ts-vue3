<script setup lang="ts">
import {useRouter} from 'vue-router'

const props=defineProps({
    list:{
        type:Array,
        defalult:()=>[]
    }
})

const router=useRouter()

const gotoPage=(path:any)=>{
    router.push(path)
}

</script>
<template>
    <div class="item" v-for="(item,index) in list" :key="index">
        <div class="item-left">
            <h5>{{ item.contract_name ? item.contract_name : '提现' }}</h5>
            <p>{{ item.create_date }}</p>
        </div>
        <div class="item-right">
            <h5>{{ item.price }}</h5>
            <p>{{ item.balance }}</p>
        </div>
    </div>
</template>

<style scoped>
.item{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding: 0 .8rem;
}
.item-left{

}
.item-left p{
    font-size: 0.64rem;
font-weight: 400;
color: #808080;
line-height: 0.64rem;
    padding-bottom: .93rem;
}
.item-left h5{
line-height: .75rem;
    color: #333333;
    font-weight: bold;
    font-size: 0.75rem;
    padding: 1.04rem 0 .53rem 0;
}
.item-right{

}
.item-right p{
    font-size: 0.64rem;
font-weight: 400;
color: #808080;
line-height: 0.64rem;
    padding-bottom: .93rem;
}
.item-right h5{
line-height: .75rem;
color: #F4771F;
    font-weight: bold;
    font-size: 0.75rem;
    padding: 1.04rem 0 .53rem 0;
}
</style>