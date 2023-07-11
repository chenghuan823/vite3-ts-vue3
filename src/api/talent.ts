import request from "@/utils/request"
//
export function getCode(data:any){
    return request({
        url:'',
        method:'post',
        data
    })
}

//
export function getPolicy(data:any){
    return request({
        url:'',
        method:'get',
        params:data
    })
}