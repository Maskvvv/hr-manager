import request from '@/utils/request'

// 查询职位类型列表
export function listJobType(query) {
  return request({
    url: '/recruit/jobType/list',
    method: 'get',
    params: query
  })
}

// 查询职位类型详细
export function getJobType(id) {
  return request({
    url: '/recruit/jobType/' + id,
    method: 'get'
  })
}

// 新增职位类型
export function addJobType(data) {
  return request({
    url: '/recruit/jobType',
    method: 'post',
    data: data
  })
}

// 修改职位类型
export function updateJobType(data) {
  return request({
    url: '/recruit/jobType',
    method: 'put',
    data: data
  })
}

// 删除职位类型
export function delJobType(id) {
  return request({
    url: '/recruit/jobType/' + id,
    method: 'delete'
  })
}

// 导出职位类型
export function exportJobType(query) {
  return request({
    url: '/recruit/jobType/export',
    method: 'get',
    params: query
  })
}