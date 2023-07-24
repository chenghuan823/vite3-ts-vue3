<script setup lang="ts">
import {reactive,inject} from 'vue'
import {common} from '@/utils/common'
import {taskStore} from '@/store/task'
import {myStore} from '@/store/my'
import { userModify} from '@/api/my'
import {Toast} from 'vant'
const {closeChange}=inject('popup')
const my_store=myStore()
const ts_store=taskStore()
if(ts_store.areaList.length<=0){
    ts_store.getCityList()
}
const state=reactive({
    loading:false,
    fileList:[],
    name:'',
    showSex:false,
    sex:'',
    showBirthDay:false,
    birthday:'',
    minDate:new Date(1970,1,1),
    maxDate:new Date(),
    showWorkTime:false,
    WorkTime:'',
    showCity:false,
    city:'',
    area:''
})

const sexList=[
    {name:'男'},
    {name:'女'}
]

const afterRead=async(file:any)=>{

}

const sexSelect=(value:any)=>{
    state.sex=value.name
    state.showSex=false
}
const birthdayConfirm=(value:any)=>{
    state.birthday=value.getFullYear() + '-' + (value.getMonth()+1)
    state.showBirthDay=false
}
const workTimeConfirm=(value:any)=>{
    state.WorkTime=value.getFullYear() + '-' + (value.getMonth()+1)
    state.showWorkTime=false
}
const cityConfirm=(value:any)=>{
    state.city=value[0].text
    state.area=value[1].text
    state.showCity=false
}

const setInfo=()=>{
    state.name=my_store.userInfo.user_name;
    state.sex=common.sex(my_store.userInfo.sex)
    state.birthday=my_store.userInfo.birthday
    state.WorkTime=my_store.userInfo.work_time
    state.city=my_store.userInfo.city
    state.area=my_store.userInfo.area
    if(my_store.userInfo.it_head){
        state.fileList=[
            {url:my_store.userInfo.it_head}
        ]
    }
}
if(!my_store.userInfo.user_name){
    (async function(){
        await my_store.getUserInfo()
        setInfo()
    })()
}else{
    setInfo()
}

const setUserModify=async()=>{
    if(state.fileList.length===0){
        Toast('请上传头像')
        return
    }
    if(!state.name){
        Toast('请填写姓名')
        return
    }
    if(!state.sex){
        Toast('请填写性别')
        return
    }
    if(!state.birthday){
        Toast('请选择出生年月')
        return
    }
    if(!state.WorkTime){
        Toast('请选择参加工作时间')
        return
    }
    if(!state.city){
        Toast('请选择城市')
        return
    }
    state.loading=true
    const res=await userModify({
        user_name:state.name, 
        sex: state.sex, 
        birthday: state.birthday, 
        work_time: state.WorkTime, 
        city: state.city, 
        area: state.area, 
        it_head: state.fileList[0].url, 
        type: 1,
        duties: null
    })
    if(res){
        my_store.getUserInfo()
    }
    Toast(res.msg)
    state.loading=false
}
</script>
<template>
    <div>
        <van-nav-bar title="个人信息" left-arrow @click-left="closeChange"/>
        <div class="user-page">
            <van-form @submit="setUserModify">
                <div class="user-pic">
                    <van-uploader v-model="state.fileList" :after-read="afterRead" :max-count="1" accept=".jpg,.png" />
                </div>
                <div class="user-item">
                    <h5>姓名</h5>
                    <van-field v-model="state.name" label="" placeholder="请输入您的姓名" />
                </div>
                <div class="user-item">
                    <h5>姓别</h5>
                    <van-field v-model="state.sex" label="" placeholder="请选择您的姓别" is-link readonly @click="state.showSex=true" />
                    <van-action-sheet
                        v-model:show="state.showSex"
                        :actions="sexList"
                        cancel-text="取消"
                        close-on-click-action
                        @select="sexSelect"
                    />
                </div>
                <div class="user-item">
                    <h5>出生年月</h5>
                    <van-field v-model="state.birthday" label="" placeholder="请输选择您的出生年月" readonly is-link  @click="state.showBirthDay=true" />
                    <van-action-sheet v-model:show="state.showBirthDay">
                        <van-datetime-picker
                            type="year-month"
                            title="选择年月"
                            :min-date="state.minDate"
                            :max-date="state.maxDate"
                            @confirm="birthdayConfirm"
                        />
                    </van-action-sheet>
                </div>
                <div class="user-item">
                    <h5>参加工作时间</h5>
                    <van-field v-model="state.WorkTime" label="" placeholder="选择您的工作时间" readonly is-link @click="state.showWorkTime=true" />
                    <van-action-sheet v-model:show="state.showWorkTime">
                        <van-datetime-picker
                            type="year-month"
                            title="选择年月"
                            :min-date="state.minDate"
                            :max-date="state.maxDate"
                            @confirm="workTimeConfirm"
                        />
                    </van-action-sheet>
                </div>
                <div class="user-item">
                    <h5>所在城市</h5>
                    <van-field v-model="state.city" label="" placeholder="选择您的城市" readonly is-link @click="state.showCity=true" />
                    <van-action-sheet v-model:show="state.showCity">
                        <van-picker
                            :columns="ts_store.areaList"
                            @confirm="cityConfirm"
                            @cancel="state.showCity=false"
                        />
                    </van-action-sheet>
                </div>
                <button class="wy-confirm-btn" native-type="submit">完成</button>
            </van-form>
        </div>
    </div>
</template>


<style scoped>
:deep(.van-image__img){
    border-radius: 50%;
}
:deep(.van-uploader__upload){
    margin: 0;
}
:deep(.van-cell){
    padding: .8rem 0 0.6rem;
    font-size: 0.8rem;
font-weight: 100;
color: #999999;
line-height: 0.8rem;
}
.user-page{
    margin: 0 .6rem;
    padding-bottom: 2rem;
}
.user-pic{
    text-align: center;
    padding: .67rem;
    margin-bottom: 1.47rem;
    border-bottom: 1px solid #f3f3f3;
}
.user-pic img{
    width: 3.7rem;
    height: 3.7rem;
    border-radius: 50%;
}
.user-item{
    margin-bottom: 1rem;
    border-bottom: 1px solid #f3f3f3;
}
.wy-confirm-btn{
    width: calc(100vw - 1.2rem);
    height:2.35rem ;
    position: fixed;
    left: .59rem;
    bottom: 1.2rem;
border-radius: 0.27rem;
background: linear-gradient(90deg, #FEA829, #FE8F27);
    border: 0;
    font-size: 0.8rem;
font-weight: 400;
color: #FFFFFF;
line-height: 2.35rem;
}
h5{
    font-size: 0.75rem;
font-weight: 300;
color: #666666;
line-height: 0.75rem;
}
</style>