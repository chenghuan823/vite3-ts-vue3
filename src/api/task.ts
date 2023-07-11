import request from "@/utils/request"
export function getCode(data:any){
    return request({
        url:'',
        method:'post',
        data
    })
}

//城市列表
export function cityList(data:any){
    return request({
        url:'/sys/city/list',
        method:'get',
        params:data
    })
}

//Banner接口
export function BannerList(data:any){
    return request({
        url:'/home/banner/list',
        method:'get',
        params:data
    })
}

//职位类型接口
export function positionType(data:any){
    return request({
        url:'/position/positionTypeApi',
        method:'get',
        params:data
    })
}

//筛选分类接口
export function taskFilter(data:any){
    return request({
        url:'/task/getTaskAll',
        method:'get',
        params:data
    })
}

//任务列表接口
export function taskAllList(data:any){
    return request({
        url:'/task/taskAllList',
        method:'get',
        params:data
    })
}

//任务详情接口
export function getTaskDetails(data:any){
    return request({
        url:'/task/getTaskDetails',
        method:'get',
        params:data
    })
}

//热门搜索接口
export function HotSeach(data:any){
    return request({
        url:'/position/public/getHotSeach',
        method:'get',
        params:data
    })
}

//收藏接口
export function TaskCollection(data:any){
    return request({
        url:'/course/TaskCollection',
        method:'post',
        data
    })
}
