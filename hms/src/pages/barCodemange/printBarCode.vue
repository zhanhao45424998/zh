<template>
<div>
  <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
    <el-tab-pane label="请填写打印数量" name="first">
  <div>
       <el-form ref="form" :model="form" label-width="500px">
          
         <el-form-item label="请输入打印数量:">
              <el-input-number v-model="num" @change="handleChange" :min="1"  label="请输入打印数量"></el-input-number>
          </el-form-item>
         
        </el-form>
        <div class="print" >确认打印</div>
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
        num:100,
        value:'',
        form:{
            name:"",
            
        }
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
         handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
<style lang='scss' scoped>
/deep/.el-input__inner{
width:600px;
}
/deep/.el-input-number{
width:600px;
}
.print{
    width:100px;
    height:40px;
    border-radius:4px;
    background-color: #66b1ff;
    line-height:40px;
    text-align:center;
    margin:0 auto;
    margin-top:20px;
    color:whitesmoke;
    font-weight:700;
    font-size:20px;
}
</style>

