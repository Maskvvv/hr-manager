import request from '@/utils/request'

// 查询审批管理列表
export function listApprovalProcess(query) {
  return request({
    url: '/employee/approvalProcess/list',
    method: 'get',
    params: query
  })
}

// 查询审批管理详细
export function getApprovalProcess(id) {
  return request({
    url: '/employee/approvalProcess/' + id,
    method: 'get'
  })
}

// 新增审批管理
export function addApprovalProcess(data) {
  return request({
    url: '/employee/approvalProcess',
    method: 'post',
    data: data
  })
}

// 修改审批管理
export function updateApprovalProcess(data) {
  return request({
    url: '/employee/approvalProcess',
    method: 'put',
    data: data
  })
}

// 删除审批管理
export function delApprovalProcess(id) {
  return request({
    url: '/employee/approvalProcess/' + id,
    method: 'delete'
  })
}

// 导出审批管理
export function exportApprovalProcess(query) {
  return request({
    url: '/employee/approvalProcess/export',
    method: 'get',
    params: query
  })
}