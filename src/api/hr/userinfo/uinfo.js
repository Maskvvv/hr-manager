import request from '@/utils/request'

// 查询用户详细信息列表
export function listUinfo(query) {
  return request({
    url: '/userinfo/uinfo/list',
    method: 'get',
    params: query
  })
}

// 查询用户详细信息详细
export function getUinfo(userInfoId) {
  return request({
    url: '/userinfo/uinfo/' + userInfoId,
    method: 'get'
  })
}

// 新增用户详细信息
export function addUinfo(data) {
  return request({
    url: '/userinfo/uinfo',
    method: 'post',
    data: data
  })
}

// 修改用户详细信息
export function updateUinfo(data) {
  return request({
    url: '/userinfo/uinfo',
    method: 'put',
    data: data
  })
}

// 删除用户详细信息
// export function delUinfo(userInfoId) {
//   return request({
//     url: '/userinfo/uinfo/' + userInfoId,
//     method: 'delete'
//   })
// }

export function delUinfo(userInfoId) {
  return request({
    url: '/system/user/' + userInfoId,
    method: 'delete'
  })
}

// 导出用户详细信息
export function exportUinfo(query) {
  return request({
    url: '/userinfo/uinfo/export',
    method: 'get',
    params: query
  })
}
