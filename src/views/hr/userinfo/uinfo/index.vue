<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">

      <el-form-item label="员工姓名" prop="userInfoName">
        <el-input
          v-model="queryParams.userInfoName"
          placeholder="请输入员工姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="婚姻状况" prop="maritalStatus">
        <el-select v-model="queryParams.maritalStatus" placeholder="请选择婚姻状况" clearable size="small">
          <el-option
            v-for="dict in dict.type.marital_status"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="聘用形式" prop="engageForm">
        <el-select v-model="queryParams.engageForm" placeholder="请选择聘用形式" clearable size="small">
          <el-option
            v-for="dict in dict.type.engage_form"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="在职状态" prop="workState">
        <el-select v-model="queryParams.workState" placeholder="请选择在职状态" clearable size="small">
          <el-option
            v-for="dict in dict.type.work_state"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['userinfo:uinfo:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['userinfo:uinfo:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
          plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['userinfo:uinfo:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['userinfo:uinfo:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="uinfoList" @selection-change="handleSelectionChange">

      <el-table-column type="expand">
        <template slot-scope="scope">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="身份证号">
              <span>{{ scope.row.idCard }}</span>
            </el-form-item>
            <el-form-item label="婚姻状况">
                <dict-tag :options="dict.type.marital_status" :value="scope.row.maritalStatus"/>
            </el-form-item>
            <el-form-item label="民族">
              <span>{{ scope.row.nation.nationName }}</span>
            </el-form-item>
            <el-form-item label="籍贯">
              <span>{{ scope.row.nativePlace }}</span>
            </el-form-item>
            <el-form-item label="政治面貌">
              <span>{{ scope.row.politicsStatus.politicsName }}</span>
            </el-form-item>
            <el-form-item label="联系地址">
              <span>{{ scope.row.address }}</span>
            </el-form-item>
            <el-form-item label="职称">
              <span>{{ scope.row.jobLevel.name }}</span>
            </el-form-item>
            <el-form-item label="聘用形式">
                <dict-tag :options="dict.type.engage_form" :value="scope.row.engageForm"/>
            </el-form-item>
            <el-form-item label="最高学历">
              <span>{{ scope.row.tiptopDegree }}</span>
            </el-form-item>
            <el-form-item label="所属专业">
              <span>{{ scope.row.specialty }}</span>
            </el-form-item>
            <el-form-item label="毕业院校">
              <span>{{ scope.row.school }}</span>
            </el-form-item>
            <el-form-item label="入职日期">
              <span>{{ scope.row.beginDate }}</span>
            </el-form-item>
            <el-form-item label="在职状态">
                <dict-tag :options="dict.type.work_state" :value="scope.row.workState"/>
            </el-form-item>
            <el-form-item label="工号">
              <span>{{ scope.row.workid }}</span>
            </el-form-item>
            <el-form-item label="合同期限">
              <span>{{ scope.row.contractterm }}</span>
            </el-form-item>
            <el-form-item label="转正日期">
                <span>{{ parseTime(scope.row.conversionTime, '{y}-{m}-{d}') }}</span>
            </el-form-item>
            <el-form-item label="离职日期">
                <span>{{ parseTime(scope.row.notWorkDate, '{y}-{m}-{d}') }}</span>
            </el-form-item>
            <el-form-item label="合同起始日期">
                <span>{{ parseTime(scope.row.beginContract, '{y}-{m}-{d}') }}</span>
            </el-form-item>
            <el-form-item label="合同终止日期">
                <span>{{ parseTime(scope.row.endContract, '{y}-{m}-{d}') }}</span>
            </el-form-item>
            <el-form-item label="工龄">
              <span>{{ scope.row.workAge }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>

      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="员工姓名" align="center" prop="userInfoName" />
      <el-table-column label="所属部门" align="center" prop="sysDept.deptName"/>
      <el-table-column label="套账id" align="center" prop="salary.salaryName" />
      <el-table-column label="出生日期" align="center" prop="birthday" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.birthday, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['userinfo:uinfo:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['userinfo:uinfo:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改用户详细信息对话框 -->
    <el-drawer
      title="员工信息"
      :visible.sync="open"
      direction="rtl"
      size="50%">
      <div style="padding-left: 40px; padding-right: 40px">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="员工姓名" prop="userInfoName">
            <el-input v-model="form.userInfoName" placeholder="请输入员工姓名" />
          </el-form-item>
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker clearable size="small"
                            v-model="form.birthday"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择出生日期">
            </el-date-picker>
          </el-form-item>

          <el-form-item label="用户性别">
            <el-select v-model="form.sex" placeholder="请选择">
              <el-option
                v-for="dict in dict.type.sys_user_sex"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="手机号码" prop="phonenumber">
            <el-input v-model="form.phonenumber" maxlength="11" />
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" maxlength="50" />
          </el-form-item>
          <el-form-item label="身份证号">
            <el-input v-model="form.idCard" :maxlength="18" placeholder="请输入身份证号" value="371322111111110016" />
          </el-form-item>
          <el-form-item label="婚姻状况">
            <el-radio-group v-model="form.maritalStatus">
              <el-radio
                v-for="dict in dict.type.marital_status"
                :key="dict.value"
                :label="dict.value"
              >{{dict.label}}</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="民族" prop="nationId">
            <el-select v-model="form.nationId" placeholder="请输入民族">
              <el-option
                v-for="item in nationList"
                :label="item.nationName"
                :value="item.nationId">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="套账" prop="salaryId">
            <el-select v-model="form.salaryId" placeholder="请输入套账">
              <el-option
                v-for="item in salaryList"
                :label="item.salaryName"
                :value="item.salaryId">
              </el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="所属部门" prop="deptId">
            <el-select v-model="form.deptId" placeholder="请选择所属部门">
              <el-option
                v-for="item in deptList"
                :label="item.deptName"
                :value="item.deptId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="籍贯" prop="nativePlace">
            <el-input v-model="form.nativePlace" placeholder="请输入籍贯" value="山东青岛" />
            <!--          <el-select v-model="form.nativePlace" placeholder="请选择籍贯">-->
            <!--            <el-option label="请选择字典生成" value="" />-->
            <!--          </el-select>-->
          </el-form-item>
          <el-form-item label="政治面貌" prop="politicsId">
            <el-select v-model="form.politicsId" placeholder="请输入政治面貌">
              <el-option
                v-for="item in politicsList"
                :label="item.politicsName"
                :value="item.politicsId">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系地址" prop="address">
            <el-input v-model="form.address" placeholder="请输入联系地址" />
          </el-form-item>
          <el-form-item label="职称" prop="jobLevelId">
            <el-select v-model="form.jobLevelId" placeholder="请选择职称">
              <el-option
                v-for="item in jobLevelList"
                :label="item.name"
                :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="聘用形式" prop="engageForm">
            <el-select v-model="form.engageForm" placeholder="请选择聘用形式">
              <el-option
                v-for="dict in dict.type.engage_form"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="最高学历" prop="tiptopDegree">
            <el-select v-model="form.tiptopDegree" placeholder="请选择最高学历">
              <el-option label="初中" value="初中" />
              <el-option label="高中" value="高中" />
              <el-option label="本科" value="本科" />
              <el-option label="硕士" value="硕士" />
              <el-option label="博士" value="博士" />
              <el-option label="博士后" value="博士后" />
            </el-select>
          </el-form-item>
          <el-form-item label="所属专业" prop="specialty">
            <!--          <el-select v-model="form.specialty" placeholder="请选择所属专业">-->
            <!--            <el-option label="请选择字典生成" value="" />-->
            <!--          </el-select>-->
            <el-input v-model="form.specialty" placeholder="请输入所属专业" />
          </el-form-item>
          <el-form-item label="毕业院校" prop="school">
            <!--          <el-select v-model="form.school" placeholder="请选择毕业院校">-->
            <!--            <el-option label="请选择字典生成" value="" />-->
            <!--          </el-select>-->
            <el-input v-model="form.school" placeholder="请输入毕业院校" value="山东大学"/>
          </el-form-item>
          <el-form-item label="入职日期" prop="beginDate">
            <el-date-picker clearable size="small"
                            v-model="form.beginDate"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择入职日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="在职状态" prop="workState">
            <el-select v-model="form.workState" placeholder="请选择在职状态">
              <el-option
                v-for="dict in dict.type.work_state"
                :key="dict.value"
                :label="dict.label"
                :value="dict.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="转正日期" prop="conversionTime">
            <el-date-picker clearable size="small"
                            v-model="form.conversionTime"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择转正日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="离职日期" prop="notWorkDate">
            <el-date-picker clearable size="small"
                            v-model="form.notWorkDate"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择离职日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="合同起始日期" prop="beginContract">
            <el-date-picker clearable size="small"
                            v-model="form.beginContract"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择合同起始日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="合同终止日期" prop="endContract">
            <el-date-picker clearable size="small"
                            v-model="form.endContract"
                            type="date"
                            value-format="yyyy-MM-dd"
                            placeholder="选择合同终止日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="工龄" prop="workAge">
            <el-input v-model="form.workAge" placeholder="请输入工龄" />
          </el-form-item>
        </el-form>


        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitForm">确 定</el-button>
          <el-button @click="cancel">取 消</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { listUinfo, getUinfo, delUinfo, addUinfo, updateUinfo, exportUinfo } from "@/api/hr/userinfo/uinfo";
import request from "@/utils/request";

export default {
  name: "Uinfo",
  dicts: ['marital_status', 'work_state', 'engage_form', 'sys_user_sex'],
  data() {
    return {
      // 民族列表
      nationList: [],
      // 民族列表
      salaryList: [],
      // 政治面貌列表
      politicsList: [],
      // 部门列表
      deptList: [],
      // 职称列表
      jobLevelList: [],

      // 遮罩层
      loading: true,
      // 导出遮罩层
      exportLoading: false,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 用户详细信息表格数据
      uinfoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userInfoId: null,
        salaryId: null,
        userId: null,
        userInfoName: null,
        birthday: null,
        idCard: null,
        maritalStatus: null,
        nationId: null,
        nativePlace: null,
        politicsId: null,
        address: null,
        jobLevelId: null,
        engageForm: null,
        tiptopDegree: null,
        specialty: null,
        school: null,
        beginDate: null,
        workState: null,
        conversionTime: null,
        notWorkDate: null,
        beginContract: null,
        endContract: null,
        workAge: null
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
      }
    };
  },
  created() {
    this.getList();



    request({
      url: '/userinfo/nation/listAll',
      method: 'get',
    }).then(response => {
      console.log(response)
      this.nationList = response
    });

    request({
      url: '/userinfo/politics/listAll',
      method: 'get',
    }).then(response => {
      this.politicsList = response
    });

    request({
      url: '/system/dept/listAll',
      method: 'get',
    }).then(response => {
      this.deptList = response
    });

    request({
      url: '/userinfo/joblevel/listAll',
      method: 'get',
    }).then(response => {
      this.jobLevelList = response
    });

    request({
      url: '/userinfo/salary/listAll',
      method: 'get',
    }).then(response => {
      this.salaryList = response
    });

    // request({
    //   url: '/system/post/listAll',
    //   method: 'get',
    // }).then(response => {
    //   this.postList = response
    // });

  },
  methods: {
    /** 查询用户详细信息列表 */
    getList() {
      this.loading = true;
      listUinfo(this.queryParams).then(response => {
        this.uinfoList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        userInfoId: null,
        salaryId: null,
        userId: null,
        userInfoName: null,
        birthday: null,
        idCard: null,
        maritalStatus: "0",
        nationId: null,
        nativePlace: null,
        politicsId: null,
        address: null,
        jobLevelId: null,
        engageForm: null,
        tiptopDegree: null,
        specialty: null,
        school: null,
        beginDate: null,
        workState: null,
        conversionTime: null,
        notWorkDate: null,
        beginContract: null,
        endContract: null,
        workAge: null
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.userInfoId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加用户详细信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const userInfoId = row.userInfoId || this.ids
      getUinfo(userInfoId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改用户详细信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          this.form.sysUser =
            {deptId: this.form.deptId,
              sex: this.form.sex,
              phonenumber: this.form.phonenumber,
              email: this.form.email}
          if (this.form.userInfoId != null) {
            updateUinfo(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addUinfo(this.form).then(response => {
              this.$modal.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const userInfoIds = row.userInfoId || this.ids;
      this.$modal.confirm('是否确认删除用户详细信息编号为"' + userInfoIds + '"的数据项？').then(function() {
        return delUinfo(userInfoIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$modal.confirm('是否确认导出所有用户详细信息数据项？').then(() => {
        this.exportLoading = true;
        return exportUinfo(queryParams);
      }).then(response => {
        this.$download.name(response.msg);
        this.exportLoading = false;
      }).catch(() => {});
    }
  }
};
</script>
<style>
.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
