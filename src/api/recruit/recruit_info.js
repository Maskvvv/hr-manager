import request from '@/utils/request'

// 查询招聘信息列表
export function listRecruit_info(query) {
  return request({
    url: '/recruit/recruit_info/list',
    method: 'get',
    params: query
  })
}

// 查询招聘信息详细
export function getRecruit_info(recruitId) {
  return request({
    url: '/recruit/recruit_info/' + recruitId,
    method: 'get'
  })
}

// 新增招聘信息
export function addRecruit_info(data) {
  return request({
    url: '/recruit/recruit_info',
    method: 'post',
    data: data
  })
}

// 修改招聘信息
export function updateRecruit_info(data) {
  return request({
    url: '/recruit/recruit_info',
    method: 'put',
    data: data
  })
}

// 删除招聘信息
export function delRecruit_info(recruitId) {
  return request({
    url: '/recruit/recruit_info/' + recruitId,
    method: 'delete'
  })
}

// 导出招聘信息
export function exportRecruit_info(query) {
  return request({
    url: '/recruit/recruit_info/export',
    method: 'get',
    params: query
  })
}