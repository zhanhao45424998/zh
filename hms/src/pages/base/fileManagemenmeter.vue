<template>
   <div class="parameter">
       <div>
            <Head title="专有文书列表">
                    <div>
                        <el-button type="primary"  @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增文书</el-button>
                        <el-button type="" @click="exportExcel"><i class="iconfont icondaochu"> </i>导出模板</el-button>
                    </div> 
            </Head>
        </div>
        
        <div>
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
                label="序号"
                align='center'
                type="index"
                fixed=""
                width="70">
               </el-table-column>
                <el-table-column
                label="文书名称"
                 :show-overflow-tooltip="true"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="文件名称"
               >
                </el-table-column>
                <el-table-column
                prop="address"
                label="所属库房"
                 :show-overflow-tooltip="true"
                >
                </el-table-column>
                  <el-table-column
                prop="address"
                label="所属医院"
                 :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip align="center"  width="250" fixed="right">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)"><i class="iconfont iconxiugai"></i>编辑</el-button>
                     <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"><i class="iconfont iconshanchu"> </i>删除</el-button>
                </template>
                </el-table-column>
                
            </el-table>
        </div>

        <div>
            <h-dialog title="新增参数" :sendVal.sync="valueState">
            <div style="margin-left:10px;margin-bottom:20px;">请填写医院文书信息</div>    
            <el-form :model="form"  label-width="120px">
                 <el-form-item label="库房选择" >
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="主院" value="1"></el-option>
                        <el-option label="分院" value="2"></el-option>
                    </el-select>
                 </el-form-item>
                 <el-form-item label="文书名称" >
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                 </el-form-item>
                 <el-form-item label="文书上传" >
                    <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
                    </el-upload>
                 </el-form-item>
            </el-form>
            <div slot="foot" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            </h-dialog>

            <h-dialog title="修改参数" :sendVal.sync="valueState2">
                <div style="margin-left:10px;margin-bottom:20px;">请填写参数信息</div>    
                <el-form :model="form"  label-width="120px">
                    <el-form-item label="参数名称" >
                        <el-input v-model="form.name" auto-complete="off" disabled=""></el-input>
                    </el-form-item>
                    <el-form-item label="参数值" >
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="参数说明" >
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>       
            <div slot="foot" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            </h-dialog>
        </div>

        <div class="block" style="text-align:right;margin-top:20px;">
            <span class="demonstration"></span>
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div> 
   </div>
</template>

<script>
import Head from '@/components/Basic/head'
import FileSaver from 'file-saver'
import XLSX from "xlsx"
export default {
  components:{ Head },   
  name: '',
  data(){
    return{
        form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
        },
       valueState:false,
       valueState2:false,
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

</style>
