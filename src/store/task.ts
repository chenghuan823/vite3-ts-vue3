import {defineStore} from 'pinia'
import {cityList} from '@/api/task'
export const taskStore=defineStore({
    id:'task',
    state:()=>{
        return {
            cityList:[],
            areaList:[],
            cityValue:localStorage.getItem('city') || '北京',
            bannerList:[],
            positionList:[],
            filterList:[],
            taskCycle:'',
            serviceMode:'',
            hotSearch:[]
        }
    },
    actions:{
        async getCityList(){
            const res=await cityList({})
            if(res){
                this.cityList=res
                let city:any=[]
                for(var i=0;i<res.length;i++){
                    city.push({
                        text:res[i].name,
                        children:[]
                    })
                    if(res[i].children && res[i].children.length){
                        for(var j=0;j<res[i].children.length;j++){
                            city[i].children.push({
                                text:res[i].children[j].name
                            })
                        }
                    }
                }
                this.areaList=city
            }
        },
        setCityList(data:any){
            this.cityList=data
        },
        setCityValue(data:any){
            this.cityValue=data
        },
        setBannerList(data:any){
            this.bannerList=data
        },
        setPositionList(data:any){
            this.positionList=data
        },
        setFilterList(data:any){
            this.filterList=data
        },
        setTaskCycle(data:any){
            this.taskCycle=data
        },
        setServiceMode(data:any){
            this.serviceMode=data
        },
        setHotSearch(data:any){
            this.hotSearch=data
        },
    }
})