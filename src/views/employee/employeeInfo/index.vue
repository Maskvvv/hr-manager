<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="68px">
      <el-form-item label="员工姓名" prop="name">
        <el-input
          v-model="queryParams.name"
          placeholder="请输入员工姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="queryParams.gender" placeholder="请选择性别" clearable size="small">
          <el-option
            v-for="dict in dict.type.sys_user_sex"
            :key="dict.value"
            :label="dict.label"
            :value="dict.value"
          />
        </el-select>
      </el-form-item>
<!--      <el-form-item label="出生日期">-->
<!--        <el-date-picker-->
<!--          v-model="daterangeBirthday"-->
<!--          size="small"-->
<!--          style="width: 240px"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          type="daterange"-->
<!--          range-separator="-"-->
<!--          start-placeholder="开始日期"-->
<!--          end-placeholder="结束日期"-->
<!--        ></el-date-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="身份证号" prop="idcard">-->
<!--        <el-input-->
<!--          v-model="queryParams.idcard"-->
<!--          placeholder="请输入身份证号"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="婚姻状况" prop="wedlock">-->
<!--        <el-select v-model="queryParams.wedlock" placeholder="请选择婚姻状况" clearable size="small">-->
<!--          <el-option label="请选择字典生成" value="" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="民族" prop="nationid">-->
<!--        <el-input-->
<!--          v-model="queryParams.nationid"-->
<!--          placeholder="请输入民族"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="籍贯" prop="nativeplace">-->
<!--        <el-input-->
<!--          v-model="queryParams.nativeplace"-->
<!--          placeholder="请输入籍贯"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="政治面貌" prop="politicid">-->
<!--        <el-input-->
<!--          v-model="queryParams.politicid"-->
<!--          placeholder="请输入政治面貌"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="邮箱" prop="email">-->
<!--        <el-input-->
<!--          v-model="queryParams.email"-->
<!--          placeholder="请输入邮箱"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="电话号码" prop="phone">-->
<!--        <el-input-->
<!--          v-model="queryParams.phone"-->
<!--          placeholder="请输入电话号码"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="联系地址" prop="address">-->
<!--        <el-input-->
<!--          v-model="queryParams.address"-->
<!--          placeholder="请输入联系地址"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="所属部门" prop="departmentid">-->
<!--        <el-select v-model="queryParams.departmentid" placeholder="请选择所属部门" clearable size="small">-->
<!--          <el-option label="请选择字典生成" value="" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="职称ID" prop="joblevelid">-->
<!--        <el-select v-model="queryParams.joblevelid" placeholder="请选择职称ID" clearable size="small">-->
<!--          <el-option label="请选择字典生成" value="" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="职位ID" prop="posid">-->
<!--        <el-select v-model="queryParams.posid" placeholder="请选择职位ID" clearable size="small">-->
<!--          <el-option label="请选择字典生成" value="" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="聘用形式" prop="engageform">-->
<!--        <el-select v-model="queryParams.engageform" placeholder="请选择聘用形式" clearable size="small">-->
<!--          <el-option label="请选择字典生成" value="" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="最高学历" prop="tiptopdegree">-->
<!--        <el-select v-model="queryParams.tiptopdegree" placeholder="请选择最高学历" clearable size="small">-->
<!--          <el-option label="请选择字典生成" value="" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="所属专业" prop="specialty">-->
<!--        <el-input-->
<!--          v-model="queryParams.specialty"-->
<!--          placeholder="请输入所属专业"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="毕业院校" prop="school">-->
<!--        <el-input-->
<!--          v-model="queryParams.school"-->
<!--          placeholder="请输入毕业院校"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="入职日期" prop="begindate">-->
<!--        <el-date-picker clearable size="small"-->
<!--          v-model="queryParams.begindate"-->
<!--          type="date"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          placeholder="选择入职日期">-->
<!--        </el-date-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="在职状态" prop="workstate">-->
<!--        <el-select v-model="queryParams.workstate" placeholder="请选择在职状态" clearable size="small">-->
<!--          <el-option label="请选择字典生成" value="" />-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="工号" prop="workid">-->
<!--        <el-input-->
<!--          v-model="queryParams.workid"-->
<!--          placeholder="请输入工号"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="合同期限" prop="contractterm">-->
<!--        <el-input-->
<!--          v-model="queryParams.contractterm"-->
<!--          placeholder="请输入合同期限"-->
<!--          clearable-->
<!--          size="small"-->
<!--          @keyup.enter.native="handleQuery"-->
<!--        />-->
<!--      </el-form-item>-->
<!--      <el-form-item label="转正日期" prop="conversiontime">-->
<!--        <el-date-picker clearable size="small"-->
<!--          v-model="queryParams.conversiontime"-->
<!--          type="date"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          placeholder="选择转正日期">-->
<!--        </el-date-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="离职日期">-->
<!--        <el-date-picker-->
<!--          v-model="daterangeNotworkdate"-->
<!--          size="small"-->
<!--          style="width: 240px"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          type="daterange"-->
<!--          range-separator="-"-->
<!--          start-placeholder="开始日期"-->
<!--          end-placeholder="结束日期"-->
<!--        ></el-date-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="合同起始日期" prop="begincontract">-->
<!--        <el-date-picker clearable size="small"-->
<!--          v-model="queryParams.begincontract"-->
<!--          type="date"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          placeholder="选择合同起始日期">-->
<!--        </el-date-picker>-->
<!--      </el-form-item>-->
<!--      <el-form-item label="合同终止日期">-->
<!--        <el-date-picker clearable size="small"-->
<!--          v-model="queryParams.endcontract"-->
<!--          type="date"-->
<!--          value-format="yyyy-MM-dd"-->
<!--          placeholder="选择合同终止日期">-->
<!--        </el-date-picker>-->
<!--      </el-form-item>-->
<!--&lt;!&ndash;      <el-form-item label="工龄" prop="workage">&ndash;&gt;-->
<!--&lt;!&ndash;        <el-input&ndash;&gt;-->
<!--&lt;!&ndash;          v-model="queryParams.workage"&ndash;&gt;-->
<!--&lt;!&ndash;          placeholder="请输入工龄"&ndash;&gt;-->
<!--&lt;!&ndash;          clearable&ndash;&gt;-->
<!--&lt;!&ndash;          size="small"&ndash;&gt;-->
<!--&lt;!&ndash;          @keyup.enter.native="handleQuery"&ndash;&gt;-->
<!--&lt;!&ndash;        />&ndash;&gt;-->
<!--&lt;!&ndash;      </el-form-item>&ndash;&gt;-->
<!--      <el-form-item>-->
<!--        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>-->
<!--        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>-->
<!--      </el-form-item>-->
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
          plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['employee:employeeInfo:add']"
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
          v-hasPermi="['employee:employeeInfo:edit']"
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
          v-hasPermi="['employee:employeeInfo:remove']"
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
          v-hasPermi="['employee:employeeInfo:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="employeeInfoList" @selection-change="handleSelectionChange">


      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="身份证号">
              <span>{{ props.row.idcard }}</span>
            </el-form-item>
            <el-form-item label="婚姻状况">
              <span>{{ props.row.wedlock }}</span>
            </el-form-item>
            <el-form-item label="民族">
              <span>{{ props.row.nationName }}</span>
            </el-form-item>
            <el-form-item label="籍贯">
              <span>{{ props.row.nativeplace }}</span>
            </el-form-item>
            <el-form-item label="政治面貌">
              <span>{{ props.row.politicName }}</span>
            </el-form-item>
            <el-form-item label="邮箱">
              <span>{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="电话号码">
              <span>{{ props.row.phone }}</span>
            </el-form-item>
            <el-form-item label="联系地址">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="所属部门">
              <span>{{ props.row.departmentName }}</span>
            </el-form-item>
            <el-form-item label="职称">
<!--              <span>{{ props.row.joblevelid }}</span>-->
              <span>{{ props.row.joblevelName }}</span>
            </el-form-item>
            <el-form-item label="聘用形式">
              <span>{{ props.row.engageform }}</span>
            </el-form-item>
            <el-form-item label="最高学历">
              <span>{{ props.row.tiptopdegree }}</span>
            </el-form-item>
            <el-form-item label="所属专业">
              <span>{{ props.row.specialty }}</span>
            </el-form-item>
            <el-form-item label="毕业院校">
              <span>{{ props.row.tiptopdegree }}</span>
            </el-form-item>
            <el-form-item label="最高学历">
              <span>{{ props.row.school }}</span>
            </el-form-item>
            <el-form-item label="入职日期">
              <span>{{ props.row.begindate }}</span>
            </el-form-item>
            <el-form-item label="在职状态">
              <span>{{ props.row.workstate }}</span>
            </el-form-item>
            <el-form-item label="工号">
              <span>{{ props.row.workid }}</span>
            </el-form-item>
            <el-form-item label="合同期限">
              <span>{{ props.row.contractterm }}</span>
            </el-form-item>
            <el-form-item label="转正日期">
              <span>{{ props.row.conversiontime }}</span>
            </el-form-item>
            <el-form-item label="在职状态">
              <span>{{ props.row.workstate }}</span>
            </el-form-item>
            <el-form-item label="工号">
              <span>{{ props.row.workid }}</span>
            </el-form-item>
            <el-form-item label="合同期限">
              <span>{{ props.row.contractterm }}</span>
            </el-form-item>
            <el-form-item label="转正日期">
              <span>{{ props.row.conversiontime }}</span>
            </el-form-item>
            <el-form-item label="离职日期">
              <span>{{ props.row.notworkdate }}</span>
            </el-form-item>
            <el-form-item label="合同起始日期">
              <span>{{ props.row.begincontract }}</span>
            </el-form-item>
            <el-form-item label="合同终止日期">
              <span>{{ props.row.endcontract }}</span>
            </el-form-item>
            <el-form-item label="工龄">
              <span>{{ props.row.endcontract }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>


      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="员工编号" align="center" prop="id" />
      <el-table-column label="员工姓名" align="center" prop="name" />
      <el-table-column label="性别" align="center" prop="gender"/>
      <el-table-column label="出生日期" align="center" prop="birthday" width="180">
        <template slot-scope="scope">
          <span>{{ parseTime(scope.row.birthday, '{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="婚姻状况" align="center" prop="wedlock" />
      <el-table-column label="民族" align="center" prop="nationName" />
      <el-table-column label="籍贯" align="center" prop="nativeplace" />
      <el-table-column label="政治面貌" align="center" prop="politicName" />
      <el-table-column label="职位" align="center" prop="posName" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['employee:employeeInfo:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['employee:employeeInfo:remove']"
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

    <!-- 添加或修改员工信息管理对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="80%" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="员工姓名" prop="name">
          <el-input v-model="form.name" placeholder="请输入员工姓名" value="张三"/>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.gender">
            <el-radio
              v-for="dict in dict.type.sys_user_sex"
              :key="dict.value"
              :label="dict.value"
            >{{dict.label}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="出生日期" prop="birthday">
          <el-date-picker clearable size="small"
            v-model="form.birthday"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择出生日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="身份证号" prop="idcard">
          <el-input v-model="form.idcard" placeholder="请输入身份证号" value="371322198011100016"/>
        </el-form-item>
        <el-form-item label="婚姻状况" prop="wedlock">
          <el-select v-model="form.wedlock" placeholder="请选择婚姻状况">
            <el-option label="已婚" value="已婚" />
            <el-option label="未婚" value="未婚" />
          </el-select>
        </el-form-item>
        <el-form-item label="民族" prop="nationid">
          <el-select v-model="form.nationid" placeholder="请输入民族">
            <el-option
              v-for="item in nationList"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="籍贯" prop="nativeplace">
          <el-input v-model="form.nativeplace" placeholder="请输入籍贯" value="山东青岛" />
        </el-form-item>
        <el-form-item label="政治面貌" prop="politicid">
          <el-select v-model="form.politicid" placeholder="请输入政治面貌">
            <el-option
              v-for="item in politicList"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱" value="2668989410@qq.com"/>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入电话号码" value="17662222222"/>
        </el-form-item>
        <el-form-item label="联系地址" prop="address">
          <el-input v-model="form.address" placeholder="请输入联系地址" value="山东"/>
        </el-form-item>
        <el-form-item label="所属部门" prop="departmentid">
          <el-select v-model="form.departmentid" placeholder="请选择所属部门">
            <el-option
              v-for="item in departmentList"
              :label="item.deptName"
              :value="item.deptId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职称" prop="joblevelid">
          <el-select v-model="form.joblevelid" placeholder="请选择职称">
            <el-option
              v-for="item in jobleveList"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="职位" prop="posid">
          <el-select v-model="form.posid" placeholder="请选择职位">
            <el-option
              v-for="item in postList"
              :label="item.postName"
              :value="item.postId">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="聘用形式" prop="engageform">
          <el-select v-model="form.engageform" placeholder="请选择聘用形式">
            <el-option label="劳动合同" value="劳动合同" />
            <el-option label="劳务合同" value="劳务合同" />
          </el-select>
        </el-form-item>
        <el-form-item label="最高学历" prop="tiptopdegree">
          <el-select v-model="form.tiptopdegree" placeholder="请选择最高学历">
            <el-option label="初中" value="初中" />
            <el-option label="高中" value="高中" />
            <el-option label="本科" value="本科" />
            <el-option label="硕士" value="硕士" />
            <el-option label="博士" value="博士" />
            <el-option label="博士后" value="博士后" />
          </el-select>
        </el-form-item>
        <el-form-item label="所属专业" prop="specialty">
          <el-input v-model="form.specialty" placeholder="请输入所属专业" />
        </el-form-item>
        <el-form-item label="毕业院校" prop="school">
          <el-input v-model="form.school" placeholder="请输入毕业院校" value="山东大学"/>
        </el-form-item>
        <el-form-item label="入职日期" prop="begindate">
          <el-date-picker clearable size="small"
            v-model="form.begindate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择入职日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="在职状态" prop="workstate">
          <el-select v-model="form.workstate" placeholder="请选择在职状态">
            <el-option label="在职" value="在职" />
            <el-option label="离职" value="离职" />
          </el-select>
        </el-form-item>
<!--        <el-form-item label="工号" prop="workid">-->
<!--          <el-input v-model="form.workid" placeholder="请输入工号" />-->
<!--        </el-form-item>-->
<!--        <el-form-item label="合同期限" prop="contractterm">-->
<!--          <el-input v-model="form.contractterm" placeholder="请输入合同期限" />-->
<!--        </el-form-item>-->
        <el-form-item label="转正日期" prop="conversiontime">
          <el-date-picker clearable size="small"
            v-model="form.conversiontime"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择转正日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="离职日期">
          <el-date-picker clearable size="small"
            v-model="form.notworkdate"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="选择离职日期">
          </el-date-picker>
        </el-form-item>
<!--        <el-form-item label="合同起始日期" prop="begincontract">-->
<!--          <el-date-picker clearable size="small"-->
<!--            v-model="form.begincontract"-->
<!--            type="date"-->
<!--            value-format="yyyy-MM-dd"-->
<!--            placeholder="选择合同起始日期">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="合同终止日期" prop="endcontract">-->
<!--          <el-date-picker clearable size="small"-->
<!--            v-model="form.endcontract"-->
<!--            type="date"-->
<!--            value-format="yyyy-MM-dd"-->
<!--            placeholder="选择合同终止日期">-->
<!--          </el-date-picker>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="工龄" prop="workage">-->
<!--          <el-input v-model="form.workage" placeholder="请输入工龄" />-->
<!--        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listEmployeeInfo, getEmployeeInfo, delEmployeeInfo, addEmployeeInfo, updateEmployeeInfo, exportEmployeeInfo } from "@/api/employee/employeeInfo";
import request from '@/utils/request'
export default {
  name: "EmployeeInfo",
  dicts: ['sys_user_sex'],
  data() {
    return {
      // 民族列表
      nationList: [],
      // 政治面貌列表
      politicList: [],
      // 部门列表
      departmentList: [],
      // 职称列表
      jobleveList: [],
      // 职位列表
      postList: [],
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
      // 员工信息管理表格数据
      employeeInfoList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 工龄时间范围
      daterangeBirthday: [],
      // 工龄时间范围
      daterangeNotworkdate: [],
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        name: null,
        gender: null,
        birthday: null,
        idcard: null,
        wedlock: null,
        nationid: null,
        nativeplace: null,
        politicid: null,
        email: null,
        phone: null,
        address: null,
        departmentid: null,
        joblevelid: null,
        posid: null,
        engageform: null,
        tiptopdegree: null,
        specialty: null,
        school: null,
        begindate: null,
        workstate: null,
        workid: null,
        contractterm: null,
        conversiontime: null,
        notworkdate: null,
        begincontract: null,
        endcontract: null,
        workage: null
      },
      // 表单参数
      form: {"searchValue":null,"createBy":null,"createTime":null,"updateBy":null,"updateTime":null,"remark":null,"params":{},"name":"张三","gender":"0","birthday":"1989-02-01","idcard":"421288198902011234","wedlock":"已婚","nationid":1,"nationName":"汉族","nativeplace":"海南","politicid":1,"politicName":"中共党员","email":"2668989410@qq.com","phone":"18795556693","address":"海南省海口市美兰区","departmentid":103,"departmentName":"研发部门","joblevelid":12,"joblevelName":"助教","posid":4,"posName":"普通员工","engageform":"劳动合同","tiptopdegree":"高中","specialty":"市场营销","school":"武汉大学","begindate":"2015-06-09","workstate":"在职","workid":"00000002","contractterm":3,"conversiontime":"2015-09-10","notworkdate":"2022-12-31","begincontract":"2015-06-09","endcontract":"2018-06-08","workage":null},
      // 表单校验
      rules: {
        name: [
          { required: true, message: "员工姓名不能为空", trigger: "blur" }
        ],
        gender: [
          { required: true, message: "性别不能为空", trigger: "blur" }
        ],
        birthday: [
          { required: true, message: "出生日期不能为空", trigger: "blur" }
        ],
        idcard: [
          { required: true, message: "身份证号不能为空", trigger: "blur" }
        ],
        wedlock: [
          { required: true, message: "婚姻状况不能为空", trigger: "change" }
        ],
        nationid: [
          { required: true, message: "民族不能为空", trigger: "blur" }
        ],
        nativeplace: [
          { required: true, message: "籍贯不能为空", trigger: "blur" }
        ],
        politicid: [
          { required: true, message: "政治面貌不能为空", trigger: "blur" }
        ],
        email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" }
        ],
        phone: [
          { required: true, message: "电话号码不能为空", trigger: "blur" }
        ],
        address: [
          { required: true, message: "联系地址不能为空", trigger: "blur" }
        ],
        departmentid: [
          { required: true, message: "所属部门不能为空", trigger: "change" }
        ],
        joblevelid: [
          { required: true, message: "职称ID不能为空", trigger: "change" }
        ],
        posid: [
          { required: true, message: "职位ID不能为空", trigger: "change" }
        ],
        engageform: [
          { required: true, message: "聘用形式不能为空", trigger: "change" }
        ],
        tiptopdegree: [
          { required: true, message: "最高学历不能为空", trigger: "change" }
        ],
        specialty: [
          { required: true, message: "所属专业不能为空", trigger: "blur" }
        ],
        school: [
          { required: true, message: "毕业院校不能为空", trigger: "blur" }
        ],
        begindate: [
          { required: true, message: "入职日期不能为空", trigger: "blur" }
        ],
        workstate: [
          { required: true, message: "在职状态不能为空", trigger: "change" }
        ],
        workid: [
          { required: true, message: "工号不能为空", trigger: "blur" }
        ],
        contractterm: [
          { required: true, message: "合同期限不能为空", trigger: "blur" }
        ],
        conversiontime: [
          { required: true, message: "转正日期不能为空", trigger: "blur" }
        ],
        notworkdate: [
          { required: true, message: "离职日期不能为空", trigger: "blur" }
        ],
        begincontract: [
          { required: true, message: "合同起始日期不能为空", trigger: "blur" }
        ],
        endcontract: [
          { required: true, message: "合同终止日期不能为空", trigger: "blur" }
        ],
        workage: [
          { required: true, message: "工龄不能为空", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.getList();


    /*// 民族列表
      nationList: [],
      // 政治面貌列表
      politicList: [],
      // 部门列表
      departmentList: [],
      // 职称列表
      jobleveList: [],
      // 职位列表
      postList: [],
      // 遮罩层*/

    request({
      url: '/employee/nation/list',
      method: 'get',
    }).then(response => {
      console.log(response)
      this.nationList = response
    });

    request({
      url: '/employee/politicsStatus/list',
      method: 'get',
    }).then(response => {
      this.politicList = response
    });

    request({
      url: '/system/dept/listAll',
      method: 'get',
    }).then(response => {
      this.departmentList = response
    });

    request({
      url: '/employee/jobLevel/list',
      method: 'get',
    }).then(response => {
      this.jobleveList = response
    });

    request({
      url: '/system/post/listAll',
      method: 'get',
    }).then(response => {
      this.postList = response
    });


  },
  methods: {
    /** 查询员工信息管理列表 */
    getList() {
      this.loading = true;
      this.queryParams.params = {};
      if (null != this.daterangeBirthday && '' != this.daterangeBirthday) {
        this.queryParams.params["beginBirthday"] = this.daterangeBirthday[0];
        this.queryParams.params["endBirthday"] = this.daterangeBirthday[1];
      }
      if (null != this.daterangeNotworkdate && '' != this.daterangeNotworkdate) {
        this.queryParams.params["beginNotworkdate"] = this.daterangeNotworkdate[0];
        this.queryParams.params["endNotworkdate"] = this.daterangeNotworkdate[1];
      }
      listEmployeeInfo(this.queryParams).then(response => {
        this.employeeInfoList = response.rows;
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
        name: null,
        gender: "0",
        birthday: null,
        idcard: null,
        wedlock: null,
        nationid: null,
        nativeplace: null,
        politicid: null,
        email: null,
        phone: null,
        address: null,
        departmentid: null,
        joblevelid: null,
        posid: null,
        engageform: null,
        tiptopdegree: null,
        specialty: null,
        school: null,
        begindate: null,
        workstate: null,
        workid: null,
        contractterm: null,
        conversiontime: null,
        notworkdate: null,
        begincontract: null,
        endcontract: null,
        workage: null
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
      this.daterangeBirthday = [];
      this.daterangeNotworkdate = [];
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
      // this.reset();
      this.open = true;
      this.title = "添加员工信息管理";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const id = row.id || this.ids
      getEmployeeInfo(id).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改员工信息管理";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.id != null) {
            updateEmployeeInfo(this.form).then(response => {
              this.$modal.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addEmployeeInfo(this.form).then(response => {
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
      this.$modal.confirm('是否确认删除员工信息管理编号为"' + ids + '"的数据项？').then(function() {
        return delEmployeeInfo(ids);
      }).then(() => {
        this.getList();
        this.$modal.msgSuccess("删除成功");
      }).catch(() => {});
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$modal.confirm('是否确认导出所有员工信息管理数据项？').then(() => {
        this.exportLoading = true;
        return exportEmployeeInfo(queryParams);
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
