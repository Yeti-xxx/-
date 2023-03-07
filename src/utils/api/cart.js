import request from './request'
export function getShopCartList(){
    return request({
        url:'/api/shopcar/getShopCarList'
    })
}
// 删除购物车
export function deletShopCart(params,token){
    return request({
        url:'/api/shopcar/deleteShopCar',
        params,
        headers:{
            token
        },

    })
}

// 加入购物车
export function addShopCart(data,token){
    return request({
        url:'/api/shopcar/addShopCar',
        method:'post',
        data,
        headers:{
            token
        }
    })
}