import {defineStore} from 'pinia'
import {userInfo,resumeDetail,resumeDict} from '@/api/my'
export const myStore=defineStore({
    id:'my',
    state:()=>{
        return {
            userInfo:{},
            companyList:[],
            projectList:[],
            resumeInfo:{},
            experience:[],
            highestEducation:[],
            jobsType:[],
            salary_scope:<any>[]
        }
    },
    actions:{
        async getUserInfo(){
            const res=await userInfo()
            if(res){
                this.userInfo=res
            }
        },
        async getResumeDetail(){
            if(!this.userInfo.resume_id){
                await this.getUserInfo()
            }
            const res=await resumeDetail(this.userInfo)
            if(res.data[0]){
                this.companyList=res.data[0].companyList
                this.projectList=res.data[0].projectList
                this.resumeInfo=res.data[0].info[0]
            }
        },
        async getResumeDict(){
           const res= await resumeDict()
           if(res){
            this.experience=res.data.experience
            this.highestEducation=res.data.highestEducation
            this.jobsType=res.data.jobsType
            let arr=[]
            let scope=res.data.salary_scope
            for(let i=0;i<scope.length;i++){
                arr.push({name:scope[i]})
            }
            this.salary_scope=arr
           }
        }
    }
})