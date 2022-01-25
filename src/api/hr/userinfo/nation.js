import request from '@/utils/request'

// 查询民族列表
export function listNation(query) {
  return request({
    url: '/userinfo/nation/list',
    method: 'get',
    params: query
  })
}

// 查询民族详细
export function getNation(nationId) {
  return request({
    url: '/userinfo/nation/' + nationId,
    method: 'get'
  })
}

// 新增民族
export function addNation(data) {
  return request({
    url: '/userinfo/nation',
    method: 'post',
    data: data
  })
}

// 修改民族
export function updateNation(data) {
  return request({
    url: '/userinfo/nation',
    method: 'put',
    data: data
  })
}

// 删除民族
export function delNation(nationId) {
  return request({
    url: '/userinfo/nation/' + nationId,
    method: 'delete'
  })
}

// 导出民族
export function exportNation(query) {
  return request({
    url: '/userinfo/nation/export',
    method: 'get',
    params: query
  })
}