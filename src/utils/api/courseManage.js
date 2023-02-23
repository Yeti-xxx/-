import request from './request'

// 获取一级分类
export function getFirstCategorys() {
    return request({
        url: '/api/course/category/getFirstCategorys',
        method: "get",
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