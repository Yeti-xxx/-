import request from './request'

//登录
export function loginByJson(data){
    return request({
        url:'/api/u/loginByJson',
        method:'post',
        data
    })
}