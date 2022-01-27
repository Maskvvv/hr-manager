import request from '@/utils/request'

// 查询政治面貌列表
export function listPolitics(query) {
  return request({
    url: '/userinfo/politics/list',
    method: 'get',
    params: query
  })
}

// 查询政治面貌详细
export function getPolitics(politicsId) {
  return request({
    url: '/userinfo/politics/' + politicsId,
    method: 'get'
  })
}

// 新增政治面貌
export function addPolitics(data) {
  return request({
    url: '/userinfo/politics',
    method: 'post',
    data: data
  })
}

// 修改政治面貌
export function updatePolitics(data) {
  return request({
    url: '/userinfo/politics',
    method: 'put',
    data: data
  })
}

// 删除政治面貌
export function delPolitics(politicsId) {
  return request({
    url: '/userinfo/politics/' + politicsId,
    method: 'delete'
  })
}

// 导出政治面貌
export function exportPolitics(query) {
  return request({
    url: '/userinfo/politics/export',
    method: 'get',
    params: query
  })
}