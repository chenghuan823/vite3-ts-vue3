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