import {defineStore} from 'pinia'
import {userInfo} from '@/api/my'
export const myStore=defineStore({
    id:'my',
    state:()=>{
        return {
            userInfo:{}
        }
    },
    actions:{
        async getUserInfo(){
            const res=await userInfo()
            if(res){
                this.userInfo=res
            }
        }
    }
})