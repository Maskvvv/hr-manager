<template>
  <div id="app">
    <div class="sidebar">
      <card></card>
      <list></list>
    </div>
    <div class="main">
      <message></message>
      <usertext></usertext>
    </div>
  </div>
</template>

<script>
  import card from '../../components/chat/card'
  import list from '../../components/chat/list'
  import message from '../../components/chat/message'
  import usertext from '../../components/chat/usertext'
  import { getUserProfile } from "@/api/system/user";
  import store from "../../store";

  export default {
    name: 'FriendChat',
    data () {
      return {

      }
    },
    mounted:function() {
      this.$store.dispatch('initData');
    },
    components:{
      card,
      list,
      message,
      usertext
    },
    created() {
      getUserProfile().then(res => {
        this.$store.state.currentAdmin = res.data;

      })

      // this.$store.state.sessions = JSON.parse(localStorage.getItem("vue-chat-session"))
      //
      // console.log("--------------------------------this.$store.state.sessions")
      // console.log(this.$store.state.sessions)

    }
  }
</script>

<style lang="scss" scoped>
  #app {
    margin: 20px auto;
    width: 800px;
    height: 600px;
    overflow: hidden;
    border-radius: 10px;
    .sidebar, .main {
      height: 100%;
    }
    .sidebar {
      float: left;
      color: #f4f4f4;
      background-color: #2e3238;
      width: 200px;
    }
    .main {
      position: relative;
      overflow: hidden;
      background-color: #eee;
    }
  }
</style>

