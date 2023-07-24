import request from "@/utils/request"
//个人信息提交接口
export function userModify(data:any){
    return request({
        url:'/user/modify',
        method:'put',
        data
    })
}

//获取用户基本信息接口
export function userInfo(){
    return request({
        url:'/clicent/user_info',
        method:'get',
        params:{}
    })
}

//获取我的收藏接口
export function collectList(){
    return request({
        url:'/task/getTaskCollection',
        method:'get',
        params:{}
    })
}

//获取我的提现接口
export function transfer(){
    return request({
        url:'/my/transfer/userList',
        method:'get',
        params:{}
    })
}

//获取我的收入接口
export function income(){
    return request({
        url:'/admin/task/purchaseRecord',
        method:'get',
        params:{}
    })
}

//我的提现接口
export function tiXian(data:any){
    return request({
        url:'/my/apply/transfer',
        method:'post',
        data
    })
}

//获取我的简历详情接口
export function resumeDetail(data:any){
    return request({
        url:'/admin/resume/getInfoDetailsAPI',
        method:'get',
        params:{
            id:data.resume_id
        }
    })
}

//获取我的简历类型字典接口
export function resumeDict(){
    return request({
        url:'/conllect/recuit/getRecuit',
        method:'get',
        params:{}
    })
}

//个人优势接口
export function advantage(data:any){
    return request({
        url:'/resume/advantage',
        method:'post',
        data
    })
}