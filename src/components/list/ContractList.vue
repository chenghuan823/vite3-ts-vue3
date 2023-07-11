<script setup lang="ts">
import  {useRouter} from 'vue-router'
import ProgressBar from '../ProgressBar.vue'
const props=defineProps({
    contractList:{
        type:Array,
        default:()=>[]
    }
})
const router=useRouter()
const gotoDetail=(id:any)=>{
    router.push('/contract/details/'+id)
}
</script>
<template>
    <dl v-for="(item,index) in contractList" :key="index" @click="gotoDetail(item.contract_id)">
        <dd>
            <h3>{{ item.contract_name }}</h3>
            <span>{{ item.is_contract_type_text }}<van-icon name="arrow"/></span>
        </dd>
        <dt>
            <label>公司名称</label>
            <span>{{ item.company_name }}</span>
        </dt>
        <dt>
            <label>合约类型</label>
            <span>{{ item.contract_type }}</span>
        </dt>
        <dt>
            <label>合约周期</label>
            <span>{{ item.start_cycle_time }}-{{ item.end_cycle_time }}</span>
        </dt>
        <dt>
            <label>签约时间</label>
            <span>{{ item.signing_time }}</span>
        </dt>
        <dt>
            <label>合约进度</label>

        </dt>
        <ProgressBar :item="item" />
    </dl>
</template>


<style scoped>
dl{
padding:1rem .7rem;  
color: #666666;
font-size: 0.64rem; 
border-bottom: 1px solid #eee;
}
dl dd{
    display: flex;
    justify-content: space-between;
    margin-bottom: .9rem;
}
dl dd span{ 
line-height: .75rem;
font-weight: 400;
font-size: 0.75rem;
color: #FF9415;
}
dl dd i{ 
line-height: .75rem;
font-weight: 400;
font-size: 0.75rem;
color: #666;
margin-left: .1rem;

}
dl dd h3{ 
line-height: .8rem;
font-weight: 500;

font-size: 0.8rem;

color: #333333;
}
    
dl dt{
    display: flex;
    margin-bottom: .72rem;
    justify-content: space-between;
}
dl dt{
    display: flex;
    margin-bottom: .72rem;
    justify-content: space-between;
}

</style>