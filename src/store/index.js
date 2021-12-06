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
    sessions:{},
    admins:[],
    currentSession: null,
    currentAdmin: {},
    filterKey:'',
    stomp: null
  },
  mutations:{
    changeCurrentSession (state,currentSession) {
      state.currentSession = currentSession;
    },
    addCurrentAdmin (state,currentAdmin) {
      state.currentAdmin = currentAdmin;
    },
    addMessage (state,msg) {

      let mss = state.sessions[state.currentAdmin.userName + '#' + msg.to];
      if (!mss) {
        // state.sessions[state.currentHr.username+'#'+msg.to] = [];
        Vue.set(state.sessions, state.currentAdmin.userName + '#' + msg.to, []);
      }
      state.sessions[state.currentAdmin.userName  + '#' + msg.to].push({
        content: msg.content,
        date: new Date(),
        self: !msg.notSelf
      })

    },
    INIT_DATA (state) {

      let data = localStorage.getItem('vue-chat-session');
      //console.log(data)
      if (data) {
        state.sessions = JSON.parse(data);
      }
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

          context.state.currentAdmin = res.data;

          context.state.stomp.subscribe('/user/'+ res.data.userName +'/queue/chat', msg => {

            let receiveMsg = JSON.parse(msg.body);

            console.log("---------------------------------------receiveMsg")
            console.log(receiveMsg)

            // if (!context.state.currentSession || receiveMsg.from != context.state.currentSession.username) {
              // Notification.info({
              //   title: '【' + receiveMsg.fromNickname + '】发来一条消息',
              //   message: receiveMsg.content.length > 10 ? receiveMsg.content.substr(0, 10) : receiveMsg.content,
              //   position: 'bottom-right'
              // })
            //   Vue.set(context.state.isDot, context.state.currentAdmin.userName + '#' + receiveMsg.from, true);
            // }
            receiveMsg.notSelf = true;
            receiveMsg.to = receiveMsg.from;
            context.commit('addMessage', receiveMsg);
          })
        });

      }, error => {
        // display the error's message header:
        alert(error.headers.message);
      })
    },
    initData (context) {
      context.commit('INIT_DATA')

      listUser().then(res => {
        // for (let user in res.rows.length()) {
        //   if (user.userName == context.state.currentAdmin.userName) {
        //     res.rows
        //   }
        // }
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
