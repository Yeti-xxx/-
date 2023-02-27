import request from './request'

// 获取一级分类
export function getFirstCategorys() {
    return request({
        url: '/api/course/category/getFirstCategorys',
        method: "get",
    })
}

//获取二级分类
export function getSecondCategorys( params ){
	return request({
		url:'/api/course/category/getSecondCategorys',
		params
	})
}

// 查询课程标签
export function tagList(data){
    return request({
        url: '/api/course/tags/list',
        method: "post",
        data
    })
}

// 查询课程
export function searchCourse(data){
    return request({
        url: '/api/course/search',
        method: "post",
        data
    })
}

// 轮播图
export function getSlider(data){
    return request({
        url: '/api/slider/getSliders'
    })
}

//查询最新课程
export function mostNewCourse( data ){
	return request({
		url:'/api/course/mostNew',
		method:'post',
		data
	})
}

//查询网站配置
export function getSetting(){
    return request({
        url:'/api/setting/get',
        method:'get'
    })
}