<template>
  <div class="total">
    <div class="first">
      <div class="firstHead">
        <i class="el-icon-search"></i> 搜索条件
      </div>
      <div class="firstInput">
        <el-form ref="form" :model="form" label-width="180px">
          <el-form-item label="请输入条码号">
            <el-input v-model="form.name"></el-input>
             </el-form-item>
            <el-form-item label="查询方式">
              <el-radio-group v-model="form.resource">
                <el-radio label="按条码追溯"></el-radio>
                <el-radio label="按住院号追溯"></el-radio>
                   <el-radio label=" 按门诊号追溯"></el-radio>
               
              </el-radio-group>
           
          </el-form-item>
          <el-form-item >
              
           <div @click="search" class="search">查询</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        form:{
            name:'666',
            resource:'6666'
        }
    };
  },
  methods:{
      search(){
          console.log(this.form)
      }
  }
};
</script>
<style lang="scss" scoped>
.first {
  border: 1px solid #66b1ff;
  border-radius: 4px 4px 0 0;
}
.firstInput {
  padding-left: 20px;
  padding-right: 20px;
}
.firstHead {
  padding-left: 20px;
  height: 50px;
  background: #66b1ff;
  color: #f2f2f2;
  font-weight: 700;
  line-height: 50px;
  border-radius: 4px 4px 0 0;
  font-size: 20px;
  margin-bottom: 20px;
}
.search{
    cursor: pointer;
    width:100px;
    background:#66b1ff;
    height:60px;
    line-height:60px;
    margin:0 auto;
    font-size:18px;
    font-weight:700;
    text-align:center;
    border-radius:4px;
    

}
.search:linked{
    color:rgb(173, 155, 155)
}
.search:visited{
color:yellowgreen
}
.search:hover{
    color:whitesmoke
}
.search:active{
    color:rgb(238, 130, 130)
}
</style>


