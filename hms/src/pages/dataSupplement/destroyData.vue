<template>
<div>
  <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
  <div>
       <el-form ref="form" :model="form" label-width="280px">
          
         <el-form-item label="请输入病人住院号:">
            <el-input v-model="form.name" placeholder="请输入病人住院号"></el-input>
          </el-form-item>
          <el-form-item label="请扫描验货流水号:">
            <el-input v-model="form.name" placeholder="请扫描验货流水号"></el-input>
          </el-form-item>
        </el-form>
  </div>
  </el-tab-pane>
 
  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        value:'',
        form:{
            name:""
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
