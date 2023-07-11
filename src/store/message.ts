import {defineStore} from 'pinia'
import { systemList,chatMessageList } from '@/api/message';

export const messageStore=defineStore({
    id:'message',
    state:()=>{
        return {
            systemMessageList:[],
            systemNewMessage:[],
            chatMessageList:[]
        }
    },
    actions:{
        async getSystemMessageList(){
            const res=await systemList({
                type:0,
                is_informtype:2
            })
            if(res){
                this.systemMessageList=res.data
                this.systemNewMessage=[this.systemMessageList[0]] || []
            }
        },
        async getChatMessageList(){
            const res=await chatMessageList({})
            if(res){
                this.chatMessageList=res.data
            }
        },
    }
})