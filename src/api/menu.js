import request from '@/utils/request'
import store from "../store";
import {getUserProfile} from "./system/user";

// 获取路由
export const getRouters = () => {
  store.dispatch('connect');
  getUserProfile().then(res => {
    // store.commit('addCurrentAdmin', res.data);
    store.state.currentAdmin = res.data;
  })
  return request({
    url: '/getRouters',
    method: 'get'
  })
}
