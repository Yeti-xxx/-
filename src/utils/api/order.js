import request from './request'

// 结算
export function settlement(data){
    return request({
        url:'/api/order/settlement',
        method:'post',
        data
    })
}

// 支付宝结算
export function alipayOrder(data){
    return request({
        url:'/api/pay/alipay/createOrder',
        method:'post',
        data
    })
}

// 查询支付宝支付状态
export function queryOrder(params){
    return request({
        url:'/api/pay/alipay/queryOrder',
        params
    })
}

// 微信支付
export function wxpayOrder(data){
    return request({
        url:'/api/pay/wxpay/createOrder',
        method:'post',
        data
    })
}

// 查询微信支付
export function queryWxpay(data){
    return request({
        url:'/api/pay/wxpay/queryOrder',
        data
    })
}