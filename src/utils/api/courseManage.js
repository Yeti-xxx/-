import request from './request'

// 获取一级分类
export function getFirstCategorys() {
    return request({
        url: '/api/course/category/getFirstCategorys',
        method: "get",
    })
}

//获取二级分类
export function getSecondCategorys(params) {
    return request({
        url: '/api/course/category/getSecondCategorys',
        params
    })
}

// 查询课程标签
export function tagList(data) {
    return request({
        url: '/api/course/tags/list',
        method: "post",
        data
    })
}

// 查询课程
export function searchCourse(data) {
    return request({
        url: '/api/course/search',
        method: "post",
        data
    })
}

// 轮播图
export function getSlider(data) {
    return request({
        url: '/api/slider/getSliders'
    })
}

//查询最新课程
export function mostNewCourse(data) {
    return request({
        url: '/api/course/mostNew',
        method: 'post',
        data
    })
}

//查询网站配置
export function getSetting() {
    return request({
        url: '/api/setting/get',
        method: 'get'
    })
}

// 课程详情
export function getCourseDetail(params) {
    return request({
        url: '/api/course/getDetail',
        params
    })
}

// 检查下载资料是否有权限
export function courseCheckAuth(params){
    return request({
        url:'/api/course/checkAuth',
        params
    })
}

// 下载资料
export function downloadAttachment( params ){
	return request({
		url:'/api/course/downloadAttachment',
		params,
		responseType: 'blob',
	})
}

// 播放课程
export function player(params){
    return request({
        url:'/api/player/play',
        params
    })
}

// 记录播放历史
export function recordHistory(data){
    return request({
        url:'/api/course/history/recordHistory',
        method:'post',
        data
    })
}

// 最后一次记录的视频播放时间
export function getLastHistoryByChapterId(params){
    return request({
        url:'/api/course/history/getLastHistoryByChapterId',
        params
    })
}