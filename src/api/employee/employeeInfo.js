import request from '@/utils/request'

// 查询员工信息管理列表
export function listEmployeeInfo(query) {
  return request({
    url: '/employee/employeeInfo/list',
    method: 'get',
    params: query
  })
}

// 查询员工信息管理详细
export function getEmployeeInfo(id) {
  return request({
    url: '/employee/employeeInfo/' + id,
    method: 'get'
  })
}

// 新增员工信息管理
export function addEmployeeInfo(data) {
  return request({
    url: '/employee/employeeInfo',
    method: 'post',
    data: data
  })
}

// 修改员工信息管理
export function updateEmployeeInfo(data) {
  return request({
    url: '/employee/employeeInfo',
    method: 'put',
    data: data
  })
}

// 删除员工信息管理
export function delEmployeeInfo(id) {
  return request({
    url: '/employee/employeeInfo/' + id,
    method: 'delete'
  })
}

// 导出员工信息管理
export function exportEmployeeInfo(query) {
  return request({
    url: '/employee/employeeInfo/export',
    method: 'get',
    params: query
  })
}