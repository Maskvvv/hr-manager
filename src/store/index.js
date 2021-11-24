import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import tagsView from './modules/tagsView'
import permission from './modules/permission'
import settings from './modules/settings'
import getters from './getters'
import { listUser } from "@/api/system/user";
import  SocKJS from 'sockjs-client'
import Stomp from 'stompjs'
import Cookies from "js-cookie";
import { getToken } from '@/utils/auth'
Vue.use(Vuex)
import { getUserProfile } from "@/api/system/user";

const now = new Date();

const store = new Vuex.Store({
  state:{
    sessions:[],
    admins:[],
    currentSessionId: null,
    filterKey:'',
    stomp: null
  },
  mutations:{
    changeCurrentSessionId (state,id) {
      state.currentSessionId = id;
    },
    addMessage (state,msg) {
      state.sessions[state.currentSessionId-1].messages.push({
        content:msg,
        date: new Date(),
        self:true
      })
    },
    INIT_DATA (state) {

      // let data = localStorage.getItem('vue-chat-session');
      // //console.log(data)
      // if (data) {
      //   state.sessions = JSON.parse(data);
      // }
    },
    INIT_ADMINS(state, data) {
      // var arr2;
      // getUserProfile().then(res => {
      //   arr2 = data.filter(function (item) {
      //     if (item.userId != item.userId)
      //       return item;
      //   });
      // });

      state.admins = data
      console.log(data)
    }
  },
  actions:{
    connect (context) {
      context.state.stomp = Stomp.over(new SocKJS('/ws/ep'))
      let token = 'Bearer ' + getToken()
      context.state.stomp.connect({}, success => {
        getUserProfile().then(res => {
          context.state.stomp.subscribe('/user/'+ res.data.userName +'/queue/chat', msg => {
            console.log("-------------store-websocket---------")
            console.log(msg)
          })
        });



      }, error => {
        // display the error's message header:
        alert(error.headers.message);
      })
    },
    initData (context) {
      listUser().then(res => {
        context.commit('INIT_ADMINS', res.rows)
      })
    }
  },


  modules: {
    app,
    user,
    tagsView,
    permission,
    settings
  },
  getters
})

store.watch(function (state) {
  return state.sessions
},function (val) {
  console.log('CHANGE: ', val);
  localStorage.setItem('vue-chat-session', JSON.stringify(val));
},{
  deep:true/*这个貌似是开启watch监测的判断,官方说明也比较模糊*/
})

export default store
