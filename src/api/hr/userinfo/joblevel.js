import request from '@/utils/request'

// 查询职称列表
export function listJoblevel(query) {
  return request({
    url: '/userinfo/joblevel/list',
    method: 'get',
    params: query
  })
}

// 查询职称详细
export function getJoblevel(id) {
  return request({
    url: '/userinfo/joblevel/' + id,
    method: 'get'
  })
}

// 新增职称
export function addJoblevel(data) {
  return request({
    url: '/userinfo/joblevel',
    method: 'post',
    data: data
  })
}

// 修改职称
export function updateJoblevel(data) {
  return request({
    url: '/userinfo/joblevel',
    method: 'put',
    data: data
  })
}

// 删除职称
export function delJoblevel(id) {
  return request({
    url: '/userinfo/joblevel/' + id,
    method: 'delete'
  })
}

// 导出职称
export function exportJoblevel(query) {
  return request({
    url: '/userinfo/joblevel/export',
    method: 'get',
    params: query
  })
}