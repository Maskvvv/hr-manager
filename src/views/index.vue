<template>
  <div class="app-container home">

    <el-row justify="start" type="flex" :gutter="20">
      <!--左大列-->
      <el-col :xs="24" :lg="16">
        <el-row align="top" :gutter="20">
          <el-col>
            <el-col :xs="24" :lg="6">
              <el-card class="update-log">
                <div slot="header" class="clearfix">
                  <i class="el-icon-s-data" style="color: #67C23A"></i><span>在线人数</span>
                </div>
                <div class="body" style="text-align: center">
                  <h2>2</h2>
                </div>
              </el-card>

            </el-col>

            <el-col :xs="24" :lg="6">
              <el-card class="update-log">
                <div slot="header" class="clearfix">
                  <i class="el-icon-user-solid" style="color: #E6A23C"></i><span>系统用户数</span>
                </div>
                <div class="body" style="text-align: center">
                  <h2>3</h2>
                </div>
              </el-card>
            </el-col>

            <el-col :xs="24" :lg="6">
              <el-card class="update-log">
                <div slot="header" class="clearfix">
                  <i class="el-icon-user-solid" style="color: #F56C6C"></i><span>部门数</span>
                </div>
                <div class="body" style="text-align: center">
                  <h2>34</h2>
                </div>
              </el-card>

            </el-col>

            <el-col :xs="24" :lg="6">
              <el-card class="update-log">
                <div slot="header" class="clearfix">
                  <i class="el-icon-user-solid" style="color: #F56C6C"></i><span>职位数量</span>
                </div>
                <div class="body" style="text-align: center">
                  <h2>34</h2>
                </div>
              </el-card>

            </el-col>
          </el-col>

          <!--echars-->
          <el-col el-col :xs="24" :lg="24" style="padding-top: 20px">
            <el-card class="update-log">
              <div id="dayActiveUserCharts" style="width: 100%; height:400px;"></div>
            </el-card>
          </el-col>

          <el-col span="24" style="padding-top: 20px">
            <el-card class="update-log">
              <div id="cityJob" style="width: 100%; height:400px;"></div>
            </el-card>
          </el-col>

          <el-col span="24" style="padding-top: 20px">
            <el-card class="update-log">
              <div id="jobCategoryEcharts" style="width: 100%; height:400px;"></div>
            </el-card>
          </el-col>
          <!--echars-->

        </el-row>

      </el-col>
      <!--左大列-->

      <!--右大列-->
      <el-col :xs="24" :lg="8">

        <el-row align="top" :gutter="20">

          <el-col :xs="24" :sm="24" :md="24" :lg="24">
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
                <el-collapse-item title="v1.0.0 - 2021-06-13">
                  <ol>
                    <li>添加了部门日志管理模块</li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item title="v1.0.0 - 2021-06-13">
                  <ol>
                    <li>添加了部门日志管理模块</li>
                  </ol>
                </el-collapse-item>
                <el-collapse-item title="v1.0.0 - 2021-06-13">
                  <ol>
                    <li>添加了部门日志管理模块</li>
                  </ol>
                </el-collapse-item>
              </el-collapse>
            </el-card>
          </el-col>

          <el-col span="24" style="padding-top: 20px">
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

          <el-col :sm="24" :lg="24" style="padding-top: 20px">
            <el-card class="update-log">
              <div slot="header" class="clearfix">
                <span>人力资源管理系统</span>
              </div>
              <p>
                一个简洁、高效、功能齐全的公寓管理系统。
              </p>
              <p>
                <b>当前版本:</b> <span>v{{ version }}</span>
              </p>
            </el-card>
          </el-col>

          <el-col :sm="24" :lg="24" style="padding-top: 20px" >
            <el-card class="update-log">
              <div slot="header" class="clearfix">
                <span>运用到的技术栈</span>
              </div>
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
            </el-card>
          </el-col>
        </el-row>
      </el-col>
      <!--右大列-->
    </el-row>

  </div>
</template>

<script>
import * as echarts from 'echarts';
import request from "@/utils/request";
export default {
  name: "index",
  data() {
    return {
      // 版本号
      version: "1.0.0",
      cityJobEchartsData: "",
      jobCategoryEchartsData: "",
      dayActiveUserEchartsData: "",
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    },


    /** 获取职位城市工作统计数据 */
    getJobCityData() {
      request({
        url: '/echars/job/city',
        method: 'get',
      }).then(response => {
        this.cityJobEchartsData = response
        this.cityJobEcharts();
      });

    },

    /** 获取职位类别工作统计数据 */
    getJobCategoryData() {
      request({
        url: '/echars/job/category',
        method: 'get',
      }).then(response => {
        this.jobCategoryEchartsData = response
        this.jobCategoryCharts();
      });
    },

    /** 获取日活统计数据 */
    getDayActiveUserData() {
      request({
        url: '/echars/day/active/user',
        method: 'get',
      }).then(response => {
        this.dayActiveUserEchartsData = response
        this.dayActiveUserCharts();
      });

    },



    /** 生成职位城市工作统计表 */
    cityJobEcharts(){
      var chartDom = document.getElementById('cityJob');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: '职位数量排名前十的城市',
          subtext: '职位数量',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: '职位数量',
            type: 'pie',
            radius: '50%',
            data: this.cityJobEchartsData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };
      option && myChart.setOption(option);
    },

    /** 生成职位类别工作统计表 */
    jobCategoryCharts(){
      var chartDom = document.getElementById('jobCategoryEcharts');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        title: {
          text: '职位数量排名前三十的职位类别',
          left: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          type: 'scroll',
          orient: 'vertical',
          right: 10,
          top: 20,
          bottom: 20
        },
        series: [
          {
            name: '姓名',
            type: 'pie',
            radius: '55%',
            center: ['40%', '50%'],
            data: this.jobCategoryEchartsData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };

      option && myChart.setOption(option);

    },

    /** 生成日活统计数据 */
    dayActiveUserCharts() {
      var chartDom = document.getElementById('dayActiveUserCharts');
      var myChart = echarts.init(chartDom);
      var option;

      option = {
        color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: '系统近七天日活'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: this.dayActiveUserEchartsData.xaxis
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '日活',
            type: 'line',
            stack: 'Total',
            smooth: true,
            lineStyle: {
              width: 0
            },
            showSymbol: false,
            areaStyle: {
              opacity: 0.8,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: 'rgb(128, 255, 165)'
                },
                {
                  offset: 1,
                  color: 'rgb(1, 191, 236)'
                }
              ])
            },
            emphasis: {
              focus: 'series'
            },
            data: this.dayActiveUserEchartsData.yaxis
          }
        ]
      };

      option && myChart.setOption(option);
    }

  },

  mounted() {
    this.getJobCategoryData();
    this.getJobCityData();
    this.getDayActiveUserData();
  },
  created() {


  }
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

