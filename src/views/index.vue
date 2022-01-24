<template>
  <div class="app-container home">

    <el-row justify="start" type="flex" :gutter="20">
      <el-col :sm="24" :lg="6">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <i class="el-icon-s-data" style="color: #67C23A"></i><span>在线人数</span>
          </div>
          <div class="body" style="text-align: center">
            <h2>2</h2>
          </div>
        </el-card>

      </el-col>

      <el-col :sm="24" :lg="6">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <i class="el-icon-user-solid" style="color: #E6A23C"></i><span>系统用户数</span>
          </div>
          <div class="body" style="text-align: center">
            <h2>3</h2>
          </div>
        </el-card>
      </el-col>

      <el-col :sm="24" :lg="6">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <i class="el-icon-user-solid" style="color: #F56C6C"></i><span>部门数</span>
          </div>
          <div class="body" style="text-align: center">
            <h2>34</h2>
          </div>
        </el-card>

      </el-col>

      <!--      <el-col :sm="24" :lg="12">-->
      <!--        <el-card>-->
      <!--          test-->
      <!--        </el-card>-->
      <!--      </el-col>-->

    </el-row>

    <el-row :gutter="20">
      <el-col :sm="24" :lg="12" style="padding-left: 20px">
        <h2>人力资源管理系统</h2>
        <p>
          一个简洁、高效、功能齐全的公寓管理系统。
        </p>
        <p>
          <b>当前版本:</b> <span>v{{ version }}</span>
        </p>
      </el-col>

      <el-col :sm="24" :lg="12" style="padding-left: 50px">
        <el-row>
          <el-col :span="12">
            <h2>运用到的技术栈</h2>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="6">
            <h4>后端技术</h4>
            <ul>
              <li>SpringBoot</li>
              <li>Spring Security</li>
              <li>JWT</li>
              <li>MyBatis</li>
              <li>Druid</li>
              <li>Fastjson</li>
              <li>...</li>
            </ul>
          </el-col>
          <el-col :span="6">
            <h4>前端技术</h4>
            <ul>
              <li>Vue</li>
              <li>Vuex</li>
              <li>Element-ui</li>
              <li>Axios</li>
              <li>...</li>
            </ul>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-divider />
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>联系信息</span>
          </div>
          <div class="body">
            <p>
              <i class="el-icon-mobile-phone"></i> 手机号码：17662432931
            </p>
            <p>
              <i class="el-icon-user-solid"></i> QQ：1429855087
            </p>
            <p>
              <i class="el-icon-chat-dot-round"></i> 微信：<a
              href="javascript:;"
            >周宏寅</a
            >
            </p>
            <p>
              <i class="el-icon-money"></i> 支付宝：<a
              href="javascript:;"
              class="支付宝信息"
            >周宏寅</a
            >
            </p>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8">
        <el-card class="update-log">
          <div slot="header" class="clearfix">
            <span>程序编写日志</span>
          </div>
          <el-collapse accordion>
            <el-collapse-item title="v1.0.0 - 2021-06-13">
              <ol>
                <li>添加了部门日志管理模块</li>
              </ol>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      // 版本号
      version: "1.0.0",
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },
  },
};
</script>

<style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}
</style>

