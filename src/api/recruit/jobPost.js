import request from '@/utils/request'

// 查询招聘职位列表
export function listJobPost(query) {
  return request({
    url: '/recruit/jobPost/list',
    method: 'get',
    params: query
  })
}

// 查询招聘职位详细
export function getJobPost(id) {
  return request({
    url: '/recruit/jobPost/' + id,
    method: 'get'
  })
}

// 新增招聘职位
export function addJobPost(data) {
  return request({
    url: '/recruit/jobPost',
    method: 'post',
    data: data
  })
}

// 修改招聘职位
export function updateJobPost(data) {
  return request({
    url: '/recruit/jobPost',
    method: 'put',
    data: data
  })
}

// 删除招聘职位
export function delJobPost(id) {
  return request({
    url: '/recruit/jobPost/' + id,
    method: 'delete'
  })
}

// 导出招聘职位
export function exportJobPost(query) {
  return request({
    url: '/recruit/jobPost/export',
    method: 'get',
    params: query
  })
}