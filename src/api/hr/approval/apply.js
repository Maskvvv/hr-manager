import request from '@/utils/request'

// 查询审批申请列表
export function listApply(query) {
  return request({
    url: '/approval/apply/list',
    method: 'get',
    params: query
  })
}

// 审批人查询审批申请列表
export function listApproval(query) {
  return request({
    url: '/approval/apply/approval/list',
    method: 'get',
    params: query
  })
}

// 查询审批申请详细
export function getApply(approvalId) {
  return request({
    url: '/approval/apply/' + approvalId,
    method: 'get'
  })
}

// 新增审批申请
export function addApply(data) {
  return request({
    url: '/approval/apply',
    method: 'post',
    data: data
  })
}

// 修改审批申请
export function updateApply(data) {
  return request({
    url: '/approval/apply',
    method: 'put',
    data: data
  })
}

// 删除审批申请
export function delApply(approvalId) {
  return request({
    url: '/approval/apply/' + approvalId,
    method: 'delete'
  })
}

// 导出审批申请
export function exportApply(query) {
  return request({
    url: '/approval/apply/export',
    method: 'get',
    params: query
  })
}
