import request from '@/utils/request'

// 查询套账列表
export function listSalary(query) {
  return request({
    url: '/userinfo/salary/list',
    method: 'get',
    params: query
  })
}

// 查询套账详细
export function getSalary(salaryId) {
  return request({
    url: '/userinfo/salary/' + salaryId,
    method: 'get'
  })
}

// 新增套账
export function addSalary(data) {
  return request({
    url: '/userinfo/salary',
    method: 'post',
    data: data
  })
}

// 修改套账
export function updateSalary(data) {
  return request({
    url: '/userinfo/salary',
    method: 'put',
    data: data
  })
}

// 删除套账
export function delSalary(salaryId) {
  return request({
    url: '/userinfo/salary/' + salaryId,
    method: 'delete'
  })
}

// 导出套账
export function exportSalary(query) {
  return request({
    url: '/userinfo/salary/export',
    method: 'get',
    params: query
  })
}