<script setup lang="ts">
import  {useRouter} from 'vue-router'
const props=defineProps({
    MessageList:{
        type:Array,
        default:()=>[]
    },
    type:{
        type:String
    }
})
const router=useRouter()
const gotoDetail=(things_id:any,receive_id:any)=>{
    if(props.type==='system'){
        router.push(`/message/systemList/`)
    }else{
        router.push(`/message/talk/${things_id}/${receive_id}`)
    }
}
</script>
<template>
    <dl v-for="(item,index) in MessageList" :key="index" @click="gotoDetail(item.things_id,item.receive_id)">
        <dd>
            <img v-if="item.receive_is_read" :src="item.receive_is_read">
            <img v-else src="@/assets/img/icon/icon-message.png" alt="">
            <span v-if="item.is_show"></span>
        </dd>
        <dt>
            <h3>{{ item.title }}<span>{{ item.create_time }}</span></h3>
            <p>{{ item.content }}</p>
        </dt>
    </dl>
</template>


<style scoped>
dl{
    margin: 0 .69rem;
    padding:.72rem 0;
    display: flex;
    border-bottom: 1px solid #eee;
}
dl dd{
position: relative;
width: 2.61rem;
height: 2.61rem;
margin-right: 0.67rem;
}
dl dd img{
    width: 2.64rem;
height: 2.61rem;
border-radius: 50%;
}
dl dd span{
    position:absolute;
    right:0;
    top:0;
    width: 0.32rem;
height: 0.32rem;
background: #FF0000;
border-radius: 50%;
}
dl dt{
    flex: 1;
}
dl dt h3{
    margin-top: .23rem;
    font-size: 0.8rem;
color: #0C1220;
line-height: 0.8rem;
}
dl dt h3 span{
    float: right;
    line-height: 0.64rem;
    color: #999999;
    font-size: 0.64rem;
    
font-weight: 300;
}
dl dt p{
    margin-top: .64rem;
    color: #666666;
    line-height: 0.69rem;
    font-size: 0.69rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:1;
    -webkit-box-orient: vertical;
}
</style>