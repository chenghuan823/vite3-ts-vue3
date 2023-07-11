<script setup lang="ts">
import  {useRouter} from 'vue-router'
const props=defineProps({
    TalentList:{
        type:Array,
        default:()=>[{},{}]
    }
})
const router=useRouter()
const gotoDetail=(id:any)=>{
    router.push('/message/details/'+id)
}
</script>
<template>
    <div class="talent-item" v-for="(item,index) in TalentList" :key="index" >
        <div class="talent-item-top">
            <div class="talent-item-pic">
                <img src="@/assets/img/icon/icon-message.png" alt="">
            </div>
            <div class="talent-item-content">
                <h3>理想<span class="orange">驻场</span><span class="green">全职</span></h3>
                <p>前端工程师 ｜ 5年 ｜ 本科 ｜ 23岁 </p>
                <dl>
                    <dt>vue</dt>
                    <dt>nodejs</dt>
                    <dt>小程序</dt>
                </dl>
            </div>
        </div>
        <div class="talent-item-bottom">
            <label>已做2个项目</label>
            <span><van-icon name="location-o"/>北京</span>
        </div>
    </div>
</template>


<style scoped>
.talent-item{
    background: #FFFFFF;
border-radius: 0.53rem;
margin: 0 .64rem .53rem;
padding: .77rem 0.64rem .85rem;
}
.talent-item-top{
display: flex;
padding-bottom: .75rem;
border-bottom: 1px solid #f5f5f5;
}
.talent-item-pic{
    width: 4rem;
height: 4rem;
border-radius: 0.27rem;
margin-right: .85rem;
}
.talent-item-pic img{
width: 100%;
height: 100%;
}
.talent-item-content{
    flex: 1;
}
.talent-item-content h3{
margin: .14rem 0 .64rem;
display: flex;
align-items: center;
line-height: 0.91rem;
color: #333333;
font-size: 0.91rem;
}
.talent-item-content h3 span{  
font-weight: 300;
text-align: center;  
font-size: 0.59rem;
line-height: 0.59rem; 
color: #FFFFFF;
padding:.14rem .43rem ;
margin-right: .2rem;
border-radius: 0.43rem;
}
.talent-item-content h3 span:first-child{
    margin-left: .32rem;
}
.talent-item-content h3 span.orange{
    background: linear-gradient(90deg, #FEA829, #FE8F27);
}
.talent-item-content h3 span.green{
    background: linear-gradient(90deg, #55EDB9, #52DEA4);
}
.talent-item-content h3 span.blue{
    background: linear-gradient(90deg, #42C3E8, #249AF6);
}
.talent-item-content p{
    line-height: 0.69rem; 
    font-size: 0.69rem;
}
.talent-item-content dl{
display: flex;
margin-top: .56rem;
}
.talent-item-content dt{
    background: #F6F7F8;
border-radius: 0.16rem;
padding: .24rem .56rem;
display: block; 

font-size: 0.59rem; 
line-height: .59rem;
margin-right: 0.59rem;
}
.talent-item-bottom{
    margin-top: .72rem;
    font-size: 0.69rem;
font-weight: 100;
color: #666666;
line-height: 0.69rem;
display: flex;
justify-content: space-between;
}
.talent-item-bottom i{
    margin-right: .29rem;
}
</style>