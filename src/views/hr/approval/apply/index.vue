<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="审批类型" prop="approvalType">
        <el-select v-model="queryParams.approvalType" placeholder="请选择审批类型" clearable size="small">
          <el-option
            v-for="dict in dict.type.hr_approval_type"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="审批状态" prop="aprrovalState">
        <el-select v-model="queryParams.aprrovalState" placeholder="请选择审批状态" clearable size="small">
          <el-option
            v-for="dict in dict.type.hr_approval_state"
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
          v-hasPermi="['approval:apply:add']"
        >提交申请</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
          plain
          icon="el-icon-edit"
          size="mini"
          @click="viewApprovalProcess"
        >查看审批流程</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
          plain
          icon="el-icon-download"
          size="mini"
          :loading="exportLoading"
          @click="handleExport"
          v-hasPermi="['approval:apply:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>
    <!--列表-->
    <el-table v-loading="loading" :data="applyList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="审批类型" align="center" prop="approvalType">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.hr_approval_type" :value="scope.row.approvalType"/>
        </template>
      </el-table-column>
      <el-table-column label="审批人" align="center" prop="approvalUser.nickName" />
      <el-table-column label="审批内容" align="center" prop="approvalRemark" />
      <el-table-column label="申请人id" align="center" prop="applyUser.nickName" />
      <el-table-column label="审批状态" align="center" prop="aprrovalState">
        <template slot-scope="scope">
          <dict-tag :options="dict.type.hr_approval_state" :value="scope.row.aprrovalState"/>
        </template>
      </el-table-column>
      <el-table-column label="失败理由" align="center" prop="reasonFailure" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            :disabled="scope.row.aprrovalState != 2"
            v-hasPermi="['approval:apply:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            :disabled="scope.row.aprrovalState != 2"
            @click="handleDelete(scope.row)"
            v-hasPermi="['approval:apply:remove']"
          >取消</el-button>
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

    <!-- 添加或修改审批申请对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="审批类型" prop="approvalType">
          <el-select v-model="form.approvalType" placeholder="请选择审批类型">
            <el-option
              v-for="dict in dict.type.hr_approval_type"
              :key="dict.value"
              :label="dict.label"
              :value="dict.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="审批内容" prop="approvalRemark">
          <el-input v-model="form.approvalRemark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
<!--        <el-form-item label="审批状态" prop="aprrovalState">-->
<!--          <el-select v-model="form.aprrovalState" placeholder="请选择审批状态">-->
<!--            <el-option-->
<!--              v-for="dict in dict.type.hr_approval_state"-->
<!--              :key="dict.value"-->
<!--              :label="dict.label"-->
<!--              :value="dict.value"-->
<!--            ></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>

    <!--审批流程弹出框-->
    <el-dialog title="审批流程示意图" :visible.sync="viewApprovalProcessOpen" append-to-body>
      <div class="block" align="center">
        <el-image
          style="width: 350px; height: 500px;"
          src="https://gitee.com/Maskvvv/photo/raw/master/2021/12/2/1638426745842-1638426745849.png"
          fit="fill"></el-image>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listApply, getApply, delApply, addApply, updateApply, exportApply } from "@/api/hr/approval/apply";

export default {
  name: "Apply",
  dicts: ['hr_approval_type', 'hr_approval_state'],
  data() {
    return {
      // 审批流程图
      viewApprovalProcessOpen: false,
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
      // 审批申请表格数据
      applyList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        approvalId: null,
        approvalType: null,
        approvalUserId: null,
        applyUserId: null,
        aprrovalState: null,
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

    viewApprovalProcess() {

      this.viewApprovalProcessOpen = true;
    },
    /** 查询审批申请列表 */
    getList() {
      this.loading = true;
      listApply(this.queryParams).then(response => {
        this.applyList = response.rows;
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
        approvalId: null,
        approvalType: null,
        approvalUserId: null,
        approvalRemark: null,
        applyUserId: null,
        aprrovalState: null,
        reasonFailure: null,
        passTime: null,
        creatTime: null
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
      this.ids = selection.map(item => item.approvalId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加审批申请";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const approvalId = row.approvalId || this.ids
      getApply(approvalId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改审批申请";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.approvalId != null) {
            updateApply(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addApply(this.form).then(response => {
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
      const approvalIds = row.approvalId || this.ids;
      this.$modal.confirm('是否确认删除审批申请编号为"' + approvalIds + '"的数据项？').then(function() {
        return delApply(approvalIds);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$modal.confirm('是否确认导出所有审批申请数据项？').then(() => {
        this.exportLoading = true;
        return exportApply(queryParams);
      }).then(response => {
        this.$download.name(response.msg);
        this.exportLoading = false;
      }).catch(() => {});
    }
  }
};
</script>
