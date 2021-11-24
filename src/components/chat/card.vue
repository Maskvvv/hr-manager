<template>
  <div id="card">
  	<header>
  		<img class="avatar" v-bind:src="user.img" v-bind:alt="user.name">
  		<p class="name">{{user.name}}</p>
  	</header>
  	<footer>
  		<input class="search" type="text" v-model="$store.state.filterKey" placeholder="search user...">
  	</footer>
  </div>
</template>

<script>
import { getUserProfile } from "@/api/system/user";
import store from "../../store";
import {Message} from "element-ui";

export default {
  name: 'card',
  data () {
    return {
      user: {
      	name: this.$store.state.name,
      	// img: '../../assets/images/1.jpg'
      	img: this.$store.state.avatar
      }
    }
  },
  methods: {
    cardGetUser() {
      getUserProfile().then(res => {
        // /profile/avatar/2021/11/22/6d300837-4792-4056-ad26-c641fb2cef82.jpeg
        this.user.name = res.data.nickName
        this.user.img = process.env.VUE_APP_BASE_API + res.data.avatar
        // console.log(res)
      });
    },


  },
  created() {
    // this.$store.dispatch('GetInfo').then((res) => {
    //   console.log("GetInfo"+res)
    // })

    this.cardGetUser()
    // console.log(this.$store.state.name)
    // console.log(this.$store.state.avatar)
  }


}
</script>

<style lang="scss" scoped>
#card {
	padding: 12px;
  .avatar{
  	width: 40px;
  	height: 40px;
  	vertical-align: middle;/*这个是图片和文字居中对齐*/
  }
  .name {
  	display: inline-block;
  	padding: 10px;
  	margin-bottom: 15px;
  	font-size: 16px;
  }
  .search {
  	background: #26292E;
  	height: 30px;
  	line-height: 30px;
  	padding: 0 10px;
  	border: 1px solid #3a3a3a;
  	border-radius: 4px;
  	outline: none;/*鼠标点击后不会出现蓝色边框*/
    color: #FFF;
  }
}
</style>
