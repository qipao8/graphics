<template>
  <div class="login-container">
    <el-form
      label-width="80px"
      :model="formLabelAlign"
    >
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script src="./index.js"></script>
<style lang="scss" scoped src="index.scss"></style>