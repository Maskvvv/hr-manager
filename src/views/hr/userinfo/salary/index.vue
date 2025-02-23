<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="套账名" prop="salaryName">
        <el-input
          v-model="queryParams.salaryName"
          placeholder="请输入套账名"
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
          v-hasPermi="['userinfo:salary:add']"
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
          v-hasPermi="['userinfo:salary:edit']"
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
          v-hasPermi="['userinfo:salary:remove']"
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
          v-hasPermi="['userinfo:salary:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="salaryList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="套账名" align="center" prop="salaryName" />
      <el-table-column label="公积金比率" align="center" prop="salaryId" />
      <el-table-column label="基本工资" align="center" prop="basicSalary" />
      <el-table-column label="奖金" align="center" prop="bonus" />
      <el-table-column label="午餐补助" align="center" prop="lunchSalary" />
      <el-table-column label="交通补助" align="center" prop="trafficSalary" />
      <el-table-column label="应发工资" align="center" prop="allSalary" />
      <el-table-column label="养老金基数" align="center" prop="pensionBase" />
      <el-table-column label="养老金比率" align="center" prop="pensionPer" />
      <el-table-column label="启用时间" align="center" prop="createDate" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.createDate, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="医疗基数" align="center" prop="medicalBase" />
      <el-table-column label="医疗保险比率" align="center" prop="medicalPer" />
      <el-table-column label="公积金基数" align="center" prop="accumulationFundBase" />
      <el-table-column label="公积金比率" align="center" prop="accumulationFundPer" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['userinfo:salary:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['userinfo:salary:remove']"
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

    <!-- 添加或修改套账对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="套账名" prop="salaryName">
          <el-input v-model="form.salaryName" placeholder="请输入套账名" />
        </el-form-item>
        <el-form-item label="基本工资" prop="basicSalary">
          <el-input v-model="form.basicSalary" placeholder="请输入基本工资" />
        </el-form-item>
        <el-form-item label="奖金" prop="bonus">
          <el-input v-model="form.bonus" placeholder="请输入奖金" />
        </el-form-item>
        <el-form-item label="午餐补助" prop="lunchSalary">
          <el-input v-model="form.lunchSalary" placeholder="请输入午餐补助" />
        </el-form-item>
        <el-form-item label="交通补助" prop="trafficSalary">
          <el-input v-model="form.trafficSalary" placeholder="请输入交通补助" />
        </el-form-item>
        <el-form-item label="应发工资" prop="allSalary">
          <el-input v-model="form.allSalary" placeholder="请输入应发工资" />
        </el-form-item>
        <el-form-item label="养老金基数" prop="pensionBase">
          <el-input v-model="form.pensionBase" placeholder="请输入养老金基数" />
        </el-form-item>
        <el-form-item label="养老金比率" prop="pensionPer">
          <el-input v-model="form.pensionPer" placeholder="请输入养老金比率" />
        </el-form-item>
        <el-form-item label="医疗基数" prop="medicalBase">
          <el-input v-model="form.medicalBase" placeholder="请输入医疗基数" />
        </el-form-item>
        <el-form-item label="医疗保险比率" prop="medicalPer">
          <el-input v-model="form.medicalPer" placeholder="请输入医疗保险比率" />
        </el-form-item>
        <el-form-item label="公积金基数" prop="accumulationFundBase">
          <el-input v-model="form.accumulationFundBase" placeholder="请输入公积金基数" />
        </el-form-item>
        <el-form-item label="公积金比率" prop="accumulationFundPer">
          <el-input v-model="form.accumulationFundPer" placeholder="请输入公积金比率" />
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
import { listSalary, getSalary, delSalary, addSalary, updateSalary, exportSalary } from "@/api/hr/userinfo/salary";

export default {
  name: "Salary",
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
      // 套账表格数据
      salaryList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        salaryId: null,
        salaryName: null,
        basicSalary: null,
        bonus: null,
        lunchSalary: null,
        trafficSalary: null,
        allSalary: null,
        pensionBase: null,
        pensionPer: null,
        createDate: null,
        medicalBase: null,
        medicalPer: null,
        accumulationFundBase: null,
        accumulationFundPer: null
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
    /** 查询套账列表 */
    getList() {
      this.loading = true;
      listSalary(this.queryParams).then(response => {
        this.salaryList = response.rows;
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
        salaryId: null,
        salaryName: null,
        basicSalary: null,
        bonus: null,
        lunchSalary: null,
        trafficSalary: null,
        allSalary: null,
        pensionBase: null,
        pensionPer: null,
        createDate: null,
        medicalBase: null,
        medicalPer: null,
        accumulationFundBase: null,
        accumulationFundPer: null
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
      this.ids = selection.map(item => item.salaryId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加套账";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const salaryId = row.salaryId || this.ids
      getSalary(salaryId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改套账";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.salaryId != null) {
            updateSalary(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addSalary(this.form).then(response => {
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
      const salaryIds = row.salaryId || this.ids;
      this.$modal.confirm('是否确认删除套账编号为"' + salaryIds + '"的数据项？').then(function() {
        return delSalary(salaryIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$modal.confirm('是否确认导出所有套账数据项？').then(() => {
        this.exportLoading = true;
        return exportSalary(queryParams);
      }).then(response => {
        this.$download.name(response.msg);
        this.exportLoading = false;
      }).catch(() => {});
    }
  }
};
</script>
