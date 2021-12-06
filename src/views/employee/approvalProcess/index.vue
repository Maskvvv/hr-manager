<template>
  <div class="app-container">
    <!--查询条件-->
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">

      <el-form-item label="审批类型" prop="approvalTypeId">
        <el-select v-model="queryParams.approvalTypeId"
                   placeholder="请选择审批类型"
                   clearable
                   size="small"
                   @keyup.enter.native="handleQuery">
          <el-option v-for="(item, index) in approvalTypeIdOptions" :key="index" :label="item.label"
                     :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>

<!--      <el-form-item label="部门审批状态" prop="deptApprovalState">-->
<!--        <el-input-->
<!--          v-model="queryParams.deptApprovalState"-->
<!--          placeholder="请输入部门审批状态"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="部门审批时间">-->
<!--        <el-date-picker-->
<!--          v-model="daterangeDeptApprovalTime"-->
<!--          size="small"-->
<!--          style="width: 240px"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          type="daterange"-->
<!--          range-separator="-"-->
<!--          start-placeholder="开始日期"-->
<!--          end-placeholder="结束日期"-->
<!--        ></el-date-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="总经理审批状态" prop="ceoApprovalState">-->
<!--        <el-input-->
<!--          v-model="queryParams.ceoApprovalState"-->
<!--          placeholder="请输入总经理审批状态"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="总经理审批时间">-->
<!--        <el-date-picker-->
<!--          v-model="daterangeCeoApprovalTime"-->
<!--          size="small"-->
<!--          style="width: 240px"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          type="daterange"-->
<!--          range-separator="-"-->
<!--          start-placeholder="开始日期"-->
<!--          end-placeholder="结束日期"-->
<!--        ></el-date-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="部门经理(员工信息id)" prop="deptManager">-->
<!--        <el-input-->
<!--          v-model="queryParams.deptManager"-->
<!--          placeholder="请输入部门经理(员工信息id)"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="总经理(员工信息id)" prop="ceo">-->
<!--        <el-input-->
<!--          v-model="queryParams.ceo"-->
<!--          placeholder="请输入总经理(员工信息id)"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
      <el-form-item label="审批状态" prop="aprrovalState">
        <el-select v-model="queryParams.aprrovalState"
                   placeholder="请选择审批状态"
                   clearable
                   size="small"
                   @keyup.enter.native="handleQuery">
          <el-option v-for="(item, index) in aprrovalStateOptions" :key="index" :label="item.label"
                     :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="通过时间">
        <el-date-picker
          v-model="daterangePassTime"
          size="small"
          style="width: 240px"
          value-format="yyyy-MM-dd"
          type="daterange"
          range-separator="-"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>
<!--      <el-form-item label="创建时间">-->
<!--        <el-date-picker-->
<!--          v-model="daterangeCreatTime"-->
<!--          size="small"-->
<!--          style="width: 240px"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          type="daterange"-->
<!--          range-separator="-"-->
<!--          start-placeholder="开始日期"-->
<!--          end-placeholder="结束日期"-->
<!--        ></el-date-picker>-->
<!--      </el-form-item>-->
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <!--工具栏-->
    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['employee:approvalProcess:add']"
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

<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="success"-->
<!--          plain-->
<!--          icon="el-icon-edit"-->
<!--          size="mini"-->
<!--          :disabled="single"-->
<!--          @click="handleUpdate"-->
<!--          v-hasPermi="['employee:approvalProcess:edit']"-->
<!--        >修改</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="danger"-->
<!--          plain-->
<!--          icon="el-icon-delete"-->
<!--          size="mini"-->
<!--          :disabled="multiple"-->
<!--          @click="handleDelete"-->
<!--          v-hasPermi="['employee:approvalProcess:remove']"-->
<!--        >删除</el-button>-->
<!--      </el-col>-->
<!--      <el-col :span="1.5">-->
<!--        <el-button-->
<!--          type="warning"-->
<!--          plain-->
<!--          icon="el-icon-download"-->
<!--          size="mini"-->
<!--          :loading="exportLoading"-->
<!--          @click="handleExport"-->
<!--          v-hasPermi="['employee:approvalProcess:export']"-->
<!--        >导出</el-button>-->
<!--      </el-col>-->
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <!--表格-->
    <el-table v-loading="loading" :data="approvalProcessList" @selection-change="handleSelectionChange">

      <el-table-column type="expand">
        <template slot-scope="props">
          <el-timeline>
            <el-timeline-item v-if="props.row.aprrovalState != 2"
                              :timestamp="parseTime(props.row.passTime)"
                              :color="props.row.aprrovalState == 1 ? '#67C23A' : '#F56C6C'"
                              size="large"
                              :icon="props.row.aprrovalState == 1 ? 'el-icon-check' :'el-icon-close'"
                              placement="top">
              <el-card>
                <h4>审批结果</h4>
                <p>{{ props.row.aprrovalState == 1? "审批通过" : "审批未通过"}}</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item v-if="props.row.ceoApprovalState != 2"
                              :timestamp="parseTime(props.row.ceoApprovalTime)"
                              :color="props.row.ceoApprovalState == 1 ? '#67C23A' : '#F56C6C'"
                              size="large"
                              :icon="props.row.ceoApprovalState == 1 ? 'el-icon-success' :'el-icon-warning-outline'"
                              placement="top">
              <el-card>
                <h4>总经理审批</h4>
                <p>{{props.row.ceoName}} {{ props.row.ceoApprovalState == 1 ? "同意" : "拒绝："+ props.row.reasonFailure}}</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item v-if="props.row.deptApprovalState != 2"
                              :timestamp="parseTime(props.row.deptApprovalTime)"
                              :color="props.row.deptApprovalState == 1 ? '#67C23A' : '#F56C6C'"
                              size="large"
                              :icon="props.row.deptApprovalState == 1 ? 'el-icon-success' :'el-icon-warning-outline'"
                              placement="top">
              <el-card>
                <h4>部门经理审批</h4>
                <p>{{props.row.deptManagerName}} {{ props.row.deptApprovalState == 1 ? "同意" : "拒绝："+ props.row.reasonFailure }}</p>
              </el-card>
            </el-timeline-item>

            <el-timeline-item :timestamp="parseTime(props.row.creatTime)" placement="top">
              <el-card>
                <h4>提交 <span v-for="approvalTypeIdOption in approvalTypeIdOptions">
                          <span v-if="approvalTypeIdOption.value == props.row.approvalTypeId"> {{ approvalTypeIdOption.label }}</span>
                        </span>
                  申请
                </h4>
                <p>{{props.row.approvalName}} {{props.row.approvalRemark}}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </template>
      </el-table-column>

      <el-table-column type="selection" width="55" align="center" />
<!--      <el-table-column label="主键" align="center" prop="id" />-->
      <el-table-column label="申请人" align="center" prop="approvalName" />
      <el-table-column label="部门" align="center" prop="deptName" />
      <el-table-column label="审批类型" align="center" prop="approvalTypeId" >
        <template slot-scope="props">
          <span v-for="approvalTypeIdOption in approvalTypeIdOptions">
            <span v-if="approvalTypeIdOption.value == props.row.approvalTypeId"> {{ approvalTypeIdOption.label }}</span>
          </span>
        </template>
      </el-table-column>


<!--      <el-table-column label="部门审批状态" align="center" prop="deptApprovalState">-->
<!--        <template slot-scope="props">-->
<!--          <el-tag v-if="props.row.deptApprovalState == 1" type="success">通过</el-tag>-->
<!--          <el-tag v-else-if type="danger">未通过</el-tag>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column label="部门审批时间" align="center" prop="deptApprovalTime" width="180">-->
<!--        <template slot-scope="scope">-->
<!--          <span>{{ parseTime(scope.row.deptApprovalTime) }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column label="总经理审批状态" align="center" prop="ceoApprovalState">-->
<!--        <template slot-scope="props">-->
<!--          <el-tag v-if="props.row.ceoApprovalState == 1" type="success">通过</el-tag>-->
<!--          <el-tag v-else-if="" type="danger">未通过</el-tag>-->
<!--        </template>-->
<!--      </el-table-column>-->
<!--      <el-table-column label="总经理审批时间" align="center" prop="ceoApprovalTime" width="180">-->
<!--        <template slot-scope="scope">-->
<!--          <span>{{ parseTime(scope.row.ceoApprovalTime) }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column label="部门经理" align="center" prop="deptManagerName" />
      <el-table-column label="总经理" align="center" prop="ceoName" />
<!--      <el-table-column label="审批备注" align="center" prop="approvalRemark" />-->
      <el-table-column label="审批状态" align="center" prop="aprrovalState">
        <template slot-scope="props">
          <el-tag v-if="props.row.aprrovalState == 1" type="success">通过</el-tag>
          <el-tag v-if="props.row.aprrovalState == 0" type="danger">未通过</el-tag>
          <el-tag v-if="props.row.aprrovalState == 2">进行中</el-tag>
        </template>
      </el-table-column>
<!--      <el-table-column label="未通过原因" align="center" prop="reasonFailure" />-->
<!--      <el-table-column label="通过时间" align="center" prop="passTime" width="180">-->
<!--        <template slot-scope="scope">-->
<!--          <span>{{ parseTime(scope.row.passTime) }}</span>-->
<!--        </template>-->
<!--      </el-table-column>-->
      <el-table-column label="创建时间" align="center" prop="creatTime" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.creatTime) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-check"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['employee:approvalProcess:edit']"
          >同意</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-close"
            @click="open = true"
            v-hasPermi="['employee:approvalProcess:edit']"
          >拒绝</el-button>
          <el-dropdown size="mini" @command="(command) => handleCommand(command, scope.row)" v-hasPermi="['monitor:job:changeStatus', 'monitor:job:query']">
            <span class="el-dropdown-link">
              <i class="el-icon-d-arrow-right el-icon--right"></i>更多
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="handleUpdate" icon="el-icon-edit"
                                v-hasPermi="['employee:approvalProcess:edit']">修改</el-dropdown-item>
              <el-dropdown-item command="handleDelete" icon="el-icon-delete"
                                v-hasPermi="['employee:approvalProcess:remove']">删除</el-dropdown-item>
              <el-dropdown-item command="handleJobLog" icon="el-icon-s-operation"
                                v-hasPermi="['monitor:job:query']">调度日志</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
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

    <!-- 添加或修改审批管理对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
<!--        <el-form-item label="审批类型id" prop="approvalTypeId">-->
<!--          <el-input v-model="form.approvalTypeId" placeholder="请输入审批类型id" />-->
<!--        </el-form-item>-->
        <el-form-item label="审批类型" prop="approvalTypeId">
          <el-select v-model="form.approvalTypeId"
                     placeholder="请选择审批类型"
                     size="small">
            <el-option v-for="(item, index) in approvalTypeIdOptions" :key="index" :label="item.label"
                       :value="item.value" :disabled="item.disabled"></el-option>
          </el-select>
        </el-form-item>
<!--        <el-form-item label="部门审批状态" prop="deptApprovalState">-->
<!--          <el-input v-model="form.deptApprovalState" placeholder="请输入部门审批状态" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="部门审批时间" prop="deptApprovalTime">-->
<!--          <el-date-picker clearable size="small"-->
<!--            v-model="form.deptApprovalTime"-->
<!--            type="date"-->
<!--            value-format="yyyy-MM-dd"-->
<!--            placeholder="选择部门审批时间">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="总经理审批状态" prop="ceoApprovalState">-->
<!--          <el-input v-model="form.ceoApprovalState" placeholder="请输入总经理审批状态" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="总经理审批时间" prop="ceoApprovalTime">-->
<!--          <el-date-picker clearable size="small"-->
<!--            v-model="form.ceoApprovalTime"-->
<!--            type="date"-->
<!--            value-format="yyyy-MM-dd"-->
<!--            placeholder="选择总经理审批时间">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="部门经理(员工信息id)" prop="deptManager">-->
<!--          <el-input v-model="form.deptManager" placeholder="请输入部门经理(员工信息id)" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="总经理(员工信息id)" prop="ceo">-->
<!--          <el-input v-model="form.ceo" placeholder="请输入总经理(员工信息id)" />-->
<!--        </el-form-item>-->
        <el-form-item label="审批备注" prop="approvalRemark">
          <el-input v-model="form.approvalRemark" type="textarea" placeholder="请输入内容" />
        </el-form-item>
<!--        <el-form-item label="审批状态" prop="aprrovalState">-->
<!--          <el-input v-model="form.aprrovalState" placeholder="请输入审批状态" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="未通过原因" prop="reasonFailure">-->
<!--          <el-input v-model="form.reasonFailure" type="textarea" placeholder="请输入内容" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="通过时间" prop="passTime">-->
<!--          <el-date-picker clearable size="small"-->
<!--            v-model="form.passTime"-->
<!--            type="date"-->
<!--            value-format="yyyy-MM-dd"-->
<!--            placeholder="选择通过时间">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="创建时间" prop="creatTime">-->
<!--          <el-date-picker clearable size="small"-->
<!--            v-model="form.creatTime"-->
<!--            type="date"-->
<!--            value-format="yyyy-MM-dd"-->
<!--            placeholder="选择创建时间">-->
<!--          </el-date-picker>-->
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
import { listApprovalProcess, getApprovalProcess, delApprovalProcess, addApprovalProcess, updateApprovalProcess, exportApprovalProcess } from "@/api/employee/approvalProcess";

export default {
  name: "ApprovalProcess",
  data() {
    return {
      aprrovalStateOptions: [{
        "label": "通过",
        "value": 1
      }, {
        "label": "未通过",
        "value": 0
      }, {
        "label": "进行中",
        "value": 2
      }],
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
      // 审批管理表格数据
      approvalProcessList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      viewApprovalProcessOpen: false,
      // 创建时间时间范围
      daterangeDeptApprovalTime: [],
      // 创建时间时间范围
      daterangeCeoApprovalTime: [],
      // 创建时间时间范围
      daterangePassTime: [],
      // 创建时间时间范围
      daterangeCreatTime: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        id: null,
        approvalTypeId: null,
        deptApprovalState: null,
        deptApprovalTime: null,
        ceoApprovalState: null,
        ceoApprovalTime: null,
        deptManager: null,
        ceo: null,
        approvalRemark: null,
        aprrovalState: null,
        reasonFailure: null,
        passTime: null,
        creatTime: null
      },
      // 表单参数
      form: {},
      approvalTypeIdOptions: [{
        "label": "经费报销",
        "value": 1
      }, {
        "label": "部门调动",
        "value": 2
      }],
      // 表单校验
      rules: {
        approvalTypeId: [
          { required: true, message: "审批类型不能为空", trigger: "blur" }
        ],
        deptApprovalState: [
          { required: true, message: "部门审批状态不能为空", trigger: "blur" }
        ],
        deptApprovalTime: [
          { required: true, message: "部门审批时间不能为空", trigger: "blur" }
        ],
        ceoApprovalState: [
          { required: true, message: "总经理审批状态不能为空", trigger: "blur" }
        ],
        ceoApprovalTime: [
          { required: true, message: "总经理审批时间不能为空", trigger: "blur" }
        ],
        deptManager: [
          { required: true, message: "部门经理(员工信息id)不能为空", trigger: "blur" }
        ],
        ceo: [
          { required: true, message: "总经理(员工信息id)不能为空", trigger: "blur" }
        ],
        approvalRemark: [
          { required: true, message: "审批备注不能为空", trigger: "blur" }
        ],
        aprrovalState: [
          { required: true, message: "审批状态不能为空", trigger: "blur" }
        ],
        reasonFailure: [
          { required: true, message: "未通过原因不能为空", trigger: "blur" }
        ],
        passTime: [
          { required: true, message: "通过时间不能为空", trigger: "blur" }
        ],
        creatTime: [
          { required: true, message: "创建时间不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询审批管理列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangeDeptApprovalTime && '' != this.daterangeDeptApprovalTime) {
        this.queryParams.params["beginDeptApprovalTime"] = this.daterangeDeptApprovalTime[0];
        this.queryParams.params["endDeptApprovalTime"] = this.daterangeDeptApprovalTime[1];
      }
      if (null != this.daterangeCeoApprovalTime && '' != this.daterangeCeoApprovalTime) {
        this.queryParams.params["beginCeoApprovalTime"] = this.daterangeCeoApprovalTime[0];
        this.queryParams.params["endCeoApprovalTime"] = this.daterangeCeoApprovalTime[1];
      }
      if (null != this.daterangePassTime && '' != this.daterangePassTime) {
        this.queryParams.params["beginPassTime"] = this.daterangePassTime[0];
        this.queryParams.params["endPassTime"] = this.daterangePassTime[1];
      }
      if (null != this.daterangeCreatTime && '' != this.daterangeCreatTime) {
        this.queryParams.params["beginCreatTime"] = this.daterangeCreatTime[0];
        this.queryParams.params["endCreatTime"] = this.daterangeCreatTime[1];
      }
      listApprovalProcess(this.queryParams).then(response => {
        this.approvalProcessList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 更多操作触发
    handleCommand(command, row) {
      switch (command) {
        case "handleDelete":
          this.handleDelete(row);
          break;
        case "handleUpdate":
          this.handleUpdate(row);
          break;
        case "handleJobLog":
          this.handleJobLog(row);
          break;
        default:
          break;
      }
    },
    // 表单重置
    reset() {
      this.form = {
        id: null,
        approvalTypeId: null,
        deptApprovalState: null,
        deptApprovalTime: null,
        ceoApprovalState: null,
        ceoApprovalTime: null,
        deptManager: null,
        ceo: null,
        approvalRemark: null,
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
      this.daterangeDeptApprovalTime = [];
      this.daterangeCeoApprovalTime = [];
      this.daterangePassTime = [];
      this.daterangeCreatTime = [];
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
      this.title = "添加审批管理";
    },

    viewApprovalProcess() {

      this.viewApprovalProcessOpen = true;
    },

    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getApprovalProcess(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改审批管理";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateApprovalProcess(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addApprovalProcess(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除审批管理编号为"' + ids + '"的数据项？').then(function() {
        return delApprovalProcess(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$modal.confirm('是否确认导出所有审批管理数据项？').then(() => {
        this.exportLoading = true;
        return exportApprovalProcess(queryParams);
      }).then(response => {
        this.$download.name(response.msg);
        this.exportLoading = false;
      }).catch(() => {});
    }
  }
};
</script>
