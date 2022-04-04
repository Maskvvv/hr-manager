import request from '@/utils/request'

// 查询城市列表
export function listCity(query) {
  return request({
    url: '/recruit/city/list',
    method: 'get',
    params: query
  })
}

// 查询城市详细
export function getCity(code) {
  return request({
    url: '/recruit/city/' + code,
    method: 'get'
  })
}

// 新增城市
export function addCity(data) {
  return request({
    url: '/recruit/city',
    method: 'post',
    data: data
  })
}

// 修改城市
export function updateCity(data) {
  return request({
    url: '/recruit/city',
    method: 'put',
    data: data
  })
}

// 删除城市
export function delCity(code) {
  return request({
    url: '/recruit/city/' + code,
    method: 'delete'
  })
}

// 导出城市
export function exportCity(query) {
  return request({
    url: '/recruit/city/export',
    method: 'get',
    params: query
  })
}