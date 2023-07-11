import request from "@/utils/request"
//
export function getCode(data:any){
    return request({
        url:'',
        method:'post',
        data
    })
}

//合约列表接口
export function contractAllList(data:any){
    return request({
        url:'/task/myContractAllList',
        method:'get',
        params:data
    })
}

//合约详情接口
export function contractDetailList(data:any){
    return request({
        url:'/task/contractAllList',
        method:'get',
        params:data
    })
}

//合约签约接口
export function isContract(data:any){
    return request({
        url:'/contract/isContract',
        method:'put',
        data
    })
}