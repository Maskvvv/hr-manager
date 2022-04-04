<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="职位名称" prop="title">
        <el-input
          v-model="queryParams.title"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="subTitle">
        <el-input
          v-model="queryParams.subTitle"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="jobCategory">
        <el-input
          v-model="queryParams.jobCategory"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="cityInfo">
        <el-input
          v-model="queryParams.cityInfo"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="recruitType">
        <el-select v-model="queryParams.recruitType" placeholder="请选择职位名称" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="职位名称" prop="publishTime">
        <el-input
          v-model="queryParams.publishTime"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="deliveryInfoId">
        <el-input
          v-model="queryParams.deliveryInfoId"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="channelOnlineStatus">
        <el-select v-model="queryParams.channelOnlineStatus" placeholder="请选择职位名称" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="职位名称" prop="jobHotFlag">
        <el-input
          v-model="queryParams.jobHotFlag"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="jobSubject">
        <el-input
          v-model="queryParams.jobSubject"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="code">
        <el-input
          v-model="queryParams.code"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="departmentId">
        <el-input
          v-model="queryParams.departmentId"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="jobId">
        <el-input
          v-model="queryParams.jobId"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="职位名称" prop="cityList">
        <el-input
          v-model="queryParams.cityList"
          placeholder="请输入职位名称"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
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
          v-hasPermi="['recruit:jobPost:add']"
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
          v-hasPermi="['recruit:jobPost:edit']"
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
          v-hasPermi="['recruit:jobPost:remove']"
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
          v-hasPermi="['recruit:jobPost:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="jobPostList" @selection-change="handleSelectionChange">
      <el-table-column type="expand">
        <template slot-scope="scope">
          <div class="job-detail">
            <h1 class="job-detail-title">{{ scope.row.title }}</h1>
            <div class="job-detail-subTitle" v-if="scope.row.id">
              <span class="city_info">{{ scope.row.cityInfo.name }}</span
              >&nbsp;|
              <span class="job_category">{{ scope.row.jobCategory.name }}</span
              >&nbsp;|
              <span class="recruit_type">{{ scope.row.recruit.name }}</span>
            </div>
            <div class="job-detail-description job-detail-block">
              <h2>职位描述</h2>
              <pre class="textContent">{{ scope.row.description }}</pre>
            </div>
            <div class="job-detail-requirement job-detail-block">
              <h2>职位要求</h2>
              <pre class="textContent">{{ scope.row.requirement }}</pre>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="职位名称" align="center" prop="title" />
      <el-table-column label="城市" align="center" prop="cityInfo.name" />
      <el-table-column label="职位类型" align="center" prop="jobCategory.name" />
      <el-table-column label="招聘类型" align="center" prop="recruit.name" />
      <el-table-column label="发布时间" align="center" prop="publishDate" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['recruit:jobPost:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['recruit:jobPost:remove']"
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

    <!-- 添加或修改招聘职位对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="职位名称" prop="title">
          <el-input v-model="form.title" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="subTitle">
          <el-input v-model="form.subTitle" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="description">
          <el-input v-model="form.description" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="职位名称" prop="requirement">
          <el-input v-model="form.requirement" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="职位名称" prop="jobCategory">
          <el-input v-model="form.jobCategory" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="cityInfo">
          <el-input v-model="form.cityInfo" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="recruitType">
          <el-select v-model="form.recruitType" placeholder="请选择职位名称">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="职位名称" prop="publishTime">
          <el-input v-model="form.publishTime" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="deliveryInfoId">
          <el-input v-model="form.deliveryInfoId" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称">
          <el-radio-group v-model="form.channelOnlineStatus">
            <el-radio label="1">请选择字典生成</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="职位名称" prop="jobHotFlag">
          <el-input v-model="form.jobHotFlag" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="jobSubject">
          <el-input v-model="form.jobSubject" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="code">
          <el-input v-model="form.code" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="departmentId">
          <el-input v-model="form.departmentId" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="jobProcessId">
          <el-input v-model="form.jobProcessId" type="textarea" placeholder="请输入内容" />
        </el-form-item>
        <el-form-item label="职位名称" prop="jobId">
          <el-input v-model="form.jobId" placeholder="请输入职位名称" />
        </el-form-item>
        <el-form-item label="职位名称" prop="cityList">
          <el-input v-model="form.cityList" placeholder="请输入职位名称" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listJobPost, getJobPost, delJobPost, addJobPost, updateJobPost, exportJobPost } from "@/api/recruit/jobPost";

export default {
  name: "JobPost",
  data() {
    return {
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
      // 招聘职位表格数据
      jobPostList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        title: null,
        subTitle: null,
        description: null,
        requirement: null,
        jobCategory: null,
        cityInfo: null,
        recruitType: null,
        publishTime: null,
        deliveryInfoId: null,
        channelOnlineStatus: null,
        jobHotFlag: null,
        jobSubject: null,
        code: null,
        departmentId: null,
        jobProcessId: null,
        jobId: null,
        cityList: null
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
  },
  methods: {
    /** 查询招聘职位列表 */
    getList() {
      this.loading = true;
      listJobPost(this.queryParams).then(response => {
        this.jobPostList = response.rows;
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
        id: null,
        title: null,
        subTitle: null,
        description: null,
        requirement: null,
        jobCategory: null,
        cityInfo: null,
        recruitType: null,
        publishTime: null,
        deliveryInfoId: null,
        channelOnlineStatus: 0,
        jobHotFlag: null,
        jobSubject: null,
        code: null,
        departmentId: null,
        jobProcessId: null,
        jobId: null,
        cityList: null
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
      this.ids = selection.map(item => item.id)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加招聘职位";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getJobPost(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改招聘职位";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateJobPost(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addJobPost(this.form).then(response => {
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
      const ids = row.id || this.ids;
      this.$modal.confirm('是否确认删除招聘职位编号为"' + ids + '"的数据项？').then(function() {
        return delJobPost(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$modal.confirm('是否确认导出所有招聘职位数据项？').then(() => {
        this.exportLoading = true;
        return exportJobPost(queryParams);
      }).then(response => {
        this.$download.name(response.msg);
        this.exportLoading = false;
      }).catch(() => {});
    }
  }
};
</script>

