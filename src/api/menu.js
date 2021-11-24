import request from '@/utils/request'
import store from "../store";

// 获取路由
export const getRouters = () => {
  store.dispatch('connect');
  return request({
    url: '/getRouters',
    method: 'get'
  })
}
