<template>
  <div id="uesrtext">
    <textarea placeholder="按 Ctrl + Enter 发送" v-model="content" v-on:keyup="addMessage"></textarea>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import { getUserProfile } from "@/api/system/user";

export default {
  name: 'uesrtext',
  data () {
    return {
      content:'',
      nickName:'',
      userName:''

    }
  },
  methods: {
  	addMessage (e) {
  		if (e.ctrlKey && e.keyCode ===13 && this.content.length) {
  			// this.$store.commit('addMessage',this.content);
  			// this.content='';

        let msgObj = new Object();
        msgObj.to = 'ry';
        msgObj.content = this.content;
        msgObj.from = this.userName;
        msgObj.fromNickname = this.nickName;
        this.$store.state.stomp.send('/ws/chat', {}, JSON.stringify(msgObj))

  		}
  	}
  },
  created() {
    getUserProfile().then(res => {
      // /profile/avatar/2021/11/22/6d300837-4792-4056-ad26-c641fb2cef82.jpeg
      this.nickName = res.data.nickName
      this.userName = res.data.userName
    });
  }
}
</script>

<style lang="scss" scoped>
#uesrtext {
	position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 30%;
  border-top: solid 1px #DDD;
  > textarea {
  	padding: 10px;
  	width: 100%;
  	height: 100%;
  	border: none;
  	outline: none;
  }
}
</style>
