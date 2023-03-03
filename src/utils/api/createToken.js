// 创建临时token用于登录    防止重复提交
import request from './request'

export function createToken(){
    return request({
        url:'/api/token/createToken',
    })
}