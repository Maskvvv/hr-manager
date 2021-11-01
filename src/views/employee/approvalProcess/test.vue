<template>
  <div>
    <el-form ref="queryParams" :model="queryParams" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="审批状态" prop="aprrovalState">
        <el-select v-model="queryParams.aprrovalState" placeholder="请选择选择审批状态" clearable>
          <el-option v-for="(item, index) in aprrovalStateOptions" :key="index" :label="item.label"
                     :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    components: {},
    props: [],
    data() {
      return {
        queryParams: {
          aprrovalState: undefined,
        },
        rules: {
          aprrovalState: [],
        },
        aprrovalStateOptions: [{
          "label": "通过",
          "value": 1
        }, {
          "label": "未通过",
          "value": 0
        }],
      }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
      submitForm() {
        this.$refs['queryParams'].validate(valid => {
          if (!valid) return
          // TODO 提交表单
        })
      },
      resetForm() {
        this.$refs['queryParams'].resetFields()
      },
    }
  }

</script>
<style>
</style>
