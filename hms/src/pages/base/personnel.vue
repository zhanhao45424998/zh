<template>
   <div class="personnel">
        <div class="personnel-search">
            <Head title="人员搜索"></Head> 
             <HeadSearch>       
                    <template v-slot:mains>
                        <div class="firstInput" style="padding:0px 15%">
                            <el-row :span="24">
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                    <el-col :span="12">
                                        <el-form-item label="人员姓名:">
                                            <el-input v-model="formInline.user" placeholder="人员姓名"></el-input>
                                        </el-form-item>
                                    </el-col>
                                    <el-col :span="12">
                                        <el-form-item label="人员工号:">
                                            <el-input v-model="formInline.region" placeholder="人员工号"></el-input>         
                                        </el-form-item>
                                    </el-col>
                                </el-form>
                            </el-row>
                        </div>                
                    </template> 
                    <template v-slot:anniu>
                        <el-button type="primary"  round><i class="el-icon-search"></i><span>查询</span></el-button>        
                    </template>                
            </HeadSearch>   
        </div>

        <div>
            <div>
                <Head title="人员列表">
                        <div>
                            <el-button type="primary" @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增人员</el-button>
                            <el-button type="" @click="exportExcel"><i class="iconfont icondaochu"> </i>导出模板</el-button>
                        </div> 
                </Head>
            </div>
            <el-table
                border
                stripe
                id="outTable"  
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                align='center'
                fixed
                width="55">
                </el-table-column>
                <el-table-column
                label="人员姓名"
                 :show-overflow-tooltip="true"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="人员工号"
               >
                </el-table-column>
                <el-table-column
                prop="address"
                label="工作科室"
                 :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column
                prop="address"
                label="工作库房"
                 :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip align="center" width="250" fixed="right">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)"><i class="iconfont iconxiugai"></i>编辑</el-button>
                     <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"><i class="iconfont iconxianshi_jinggao"></i>禁用</el-button>
                </template>
                </el-table-column>
                
            </el-table>
        </div>

        <div class="block" style="text-align:right;margin-top:20px;">
            <span class="demonstration"></span>
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>

        <div>
            <h-dialog :sendVal.sync='valueState' title="新增人员">
                <div>
                    <el-steps :active="active" simple finish-status="success">
                        <el-step :title="item.name" :icon="item.icon"  v-for="(item,i) in nameAll" :key=i></el-step>
                    </el-steps>
                    
                    <el-tabs type="border-card" v-model="activeName">
                        <el-tab-pane >
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                                <el-form-item label="所属医院" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择医院" style="width:80%">
                                    <el-option label="泰州市中医院" value="shanghai"></el-option>
                                    <el-option label="泰州市中医院分院" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="输入工号" prop="name">
                                    <el-input v-model="ruleForm.name" style="width:80%"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane >
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                                <el-form-item label="选择库房" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择库房" style="width:80%">
                                    <el-option label="针灸科门诊库房|ZJKMZKF" value="shanghai"></el-option>
                                    <el-option label="二病区（东院）库房|EBQDYKF" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="选择工作科室" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择科室" style="width:80%">
                                    <el-option label="产房住院(西院)|CFZYX" value="shanghai"></el-option>
                                    <el-option label="儿科住院（东院）|EKZYX" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane >
                            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="140px" class="demo-ruleForm">
                                <el-form-item label="授予角色" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择角色" style="width:80%">
                                    <el-option label="二级库管理员|EJKGLY" value="shanghai"></el-option>
                                    <el-option label="二病区（东院）库房|EBQDYKF" value="beijing"></el-option>
                                    <el-option label="会计|HJ" value="beijing2"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="工作小组" prop="region">
                                    <el-select v-model="ruleForm.region" placeholder="请选择小组" style="width:80%">
                                    <el-option label="设备科验收员|SBKYSY" value="shanghai"></el-option>
                                    <el-option label="儿科住院（东院）|EKZYX" value="beijing"></el-option>
                                    <el-option label="会计|HJ" value="beijing2"></el-option>
                                    </el-select>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                   
                </div>
                <div slot="foot" class="dialog-footer">
                    <el-button style="margin-top: 12px;" @click="nexts">上一步</el-button>
                    <el-button style="margin-top: 12px;" @click="next('ruleForm')">下一步</el-button>
                    <el-button type="success" @click="valueState2 = false" style="margin-left:40px;">保 存</el-button>
                    <el-button @click="valueState2 = false">取 消</el-button>

                </div>
            </h-dialog>
        </div> 
   </div>
</template>

<script>
import Heads from '@/components/Basic/head2'
import HeadSearch from '@/components/Basic/headsearch'
import Head from '@/components/Basic/head'
import FileSaver from 'file-saver'
import XLSX from "xlsx"
// import { Promise, reject } from 'q';
// import { resolve } from 'dns';
export default {
  components:{ Head,Heads,HeadSearch },  
  name: '',
  data(){
     
    return{ 
        ruleForm: {
          name: '',
          region: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入工号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
        },
        activeName: '0',
        active:0,
        nameAll:[
            {name:'1 工号验证',leng:'1',icon:'el-icon-edit'},
            {name:'2 选择库房',leng:'2',icon:'el-icon-upload'},
            {name:'3 授予角色',leng:'3',icon:'el-icon-picture'},
        ],       
        valueState:false,
        formInline: {
          user: '',
          region: ''
        },
        tableData3:[
          {
              date: '苏州好博医疗器械有限公司	',
              status:'正常',
              name: '0512-53205591',
              address: '江苏省苏州市太仓市',
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          },],
           
    }
  },
  methods:{
       nexts(){
            if(this.active-- <= 0 )this.active = 0;
            this.activeName = String(this.active)
       },
       next(formName) {
            let p = new Promise((resolve,reject)=>{
                  this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('submit!');
                        return resolve('成功')
                    } else {
                        console.log('error submit!!');

                        return reject('失败');
                    }
                    });
            })
            p.then(res=>{
                console.log('res',res)
                  if (this.active++ >=2) this.active = 2;
                  this.activeName = String(this.active)
            }).catch(err=>{
                this.$message.error('请填写必选项');
                console.log('err',err)  
            })
          
       },
       handleEdit(index,row){
            console.log(index, row);
            this.dialogFormVisible2 = true;
       },
       handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
       },
       handleDelete(index,row){

       },
      exportExcel() {
        var xlsxParam = { raw: true };//转换成excel时，使用原始的格式
        var wb = XLSX.utils.table_to_book(document.querySelector("#outTable"),xlsxParam);
        var wbout = XLSX.write(wb, {
            bookType: "xlsx",
            bookSST: true,
            type: "array"
        });
        try {
            FileSaver.saveAs(
            new Blob([wbout], { type: "application/octet-stream;charset=utf-8" }),
            "sheetjs.xlsx"
            );
        } catch (e) {
            if (typeof console !== "undefined") console.log(e, wbout);
        }
        return wbout;
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.personnel-search{
    margin-bottom: 20px;
}
.el-form--inline .el-form-item{
    width: 100%;
}
/deep/.el-form--inline .el-form-item__content{
    width: 70%;
}
/deep/.el-step.is-simple .el-step__icon{
    vertical-align: middle;
}
/deep/.el-tabs__nav-scroll{
    display: none;
}
</style>
