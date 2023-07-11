<script setup lang="ts">
const props=defineProps({
    item:{
        type:Object,
        default:()=>{}
    }
})
const ProgressActive=(data:any)=>{
    if(data===1){
        return 'green'
    }else if(data===2){
        return 'orange'
    }else if(data===3){
        return 'red'
    }else{
        return ''
    }
}
</script>
<template>       
        <dt class="contract-progress">
            <i :class="ProgressActive(item.contract_I_state)"></i>
            <i :class="ProgressActive(item.contract_II_state)" ></i>
            <i :class="ProgressActive(item.contract_III_state)" ></i>
            <i :class="ProgressActive(item.contract_IIII_state)" ></i>
        </dt>
</template>


<style scoped>
dl dd{
    display: flex;
    justify-content: space-between;
    margin-bottom: .9rem;
}
.contract-progress{
    display: flex;
    justify-content: space-between;
    margin-bottom: 0;
}
.contract-progress i.green{
width: 4.59rem;
height: 0.53rem;
background: #50D400;
}
.contract-progress i.orange{
width: 4.59rem;
height: 0.53rem;
background: #FE9215;
}
.contract-progress i{
width: 4.59rem;
height: 0.53rem;
background: #50D400;
}
.contract-progress i.red{
width: 4.59rem;
height: 0.53rem;
background: #FF4800;
}
.contract-progress i{
width: 4.59rem;
height: 0.53rem;
background: #f3f3f3;
}
</style>