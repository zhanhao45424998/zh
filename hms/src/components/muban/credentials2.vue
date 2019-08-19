<template>
   <div style="width:80%">
      <el-form ref="form" :model="form"  :rules="rules" label-width="180px">
          <el-form-item label="编号：">
              <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="注册号：" prop="namess">
              <el-input v-model="form.namess"></el-input>
          </el-form-item>   
          <el-form-item label="名称：">
              <el-input v-model="form.name"></el-input>
          </el-form-item>   
          <el-form-item label="类型：">
              <el-input v-model="form.name"></el-input>
          </el-form-item>   
          <el-form-item label="住所：">
              <el-input v-model="form.name"></el-input>
          </el-form-item>   
          <el-form-item label="法人代表：">
              <el-input v-model="form.name"></el-input>
          </el-form-item>                       
          <el-form-item label="注册资本：">
              <el-input v-model="form.name"> <template slot="append">万元</template></el-input>       
          </el-form-item> 
          <el-form-item label="成立日期：">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </el-form-item> 
          <el-form-item label="经营期限：" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2" >至</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-date-picker type="date" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
          </el-form-item>
          <el-form-item label="经营范围">
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item label="发证单位：">
              <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="发证时间：">
              <el-date-picker
                v-model="form.date"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
          </el-form-item>
          <el-form-item label="附件：">
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :file-list="fileList"
                list-type="picture">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip" style="color:red">图片需加盖供应商公章，如不上传图片，将无法通过认证,只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
          </el-form-item>       
       </el-form>
   </div>
</template>

<script>
export default {
  name: '',
  props:['message'],
  data(){
    return{
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        form: {
          name: '',
          namess:'',
          region: '',
          date1: '',
          date2: '',
          date:'',
          dates:'',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          messages:''
        },
        rules: {
          namess:[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],    
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],

        }
    }
  },

  watch:{  
    message:function(n,o){
      if(n){
        this.submitForm('form');
      }
    }
  },
  methods:{
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },

      submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {       
          this.$emit('myMessage')
        } else {
          alert('请查看必填项!');
          return false;
        }
      })},
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.line{
  text-align: center
}
</style>
