<template>
   <div>
       <div>
           <Head title="组别列表">
                <div>
                    <el-button type="primary"  @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增分组</el-button>
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
                type="selection"
                align='center'
                fixed=""
                width="55">
                </el-table-column>
                <el-table-column
                label="分组名称"
                 :show-overflow-tooltip="true"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                 :show-overflow-tooltip="true"
                label="拼音缩写"
               >
                </el-table-column>
                <el-table-column
                prop="address"
                label="所属科室"
                 :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column
                prop="status"
                 :show-overflow-tooltip="true"
                label="分组状态"
                align="center"
                width="100"
                >
                 <template slot-scope="scope">
                  <span v-if="scope.row.status=='正常'" style="color:#409EFF">{{ scope.row.status }}</span>
                  <span v-else style="color:#F56C6C">{{ scope.row.status }}</span>
	            </template>
                </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip align="center" width="120" fixed="right">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)"><i class="iconfont iconxiugai"></i>编辑</el-button>
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
            <h-dialog title="新增科室分组" :sendVal.sync="valueState">
               <el-form ref="form" :model="form" label-width="80px">
                   <el-form-item label="分组科室" >
                        <el-select v-model="form.region" placeholder="请选择活动区域"  style="width:100%">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                   </el-form-item>
                   <el-form-item label="分组名称" >
                        <el-input v-model="form.name"></el-input>
                   </el-form-item>  
               </el-form>
               <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false">取 消</el-button>
                    <el-button type="primary" @click="valueState = false">确 定</el-button>
               </div>    
            </h-dialog>   
        </div>

        <div>
            <h-dialog title="修改科室分组" :sendVal.sync="valueState2">
               <el-form ref="form" :model="form" label-width="120px">
                   <el-form-item label="分组科室">
                      <el-input disabled="" v-model="form.name"></el-input>
                   </el-form-item>
                   <el-form-item label="分组名称" >
                        <el-input v-model="form.name"></el-input>
                   </el-form-item>
                   <el-form-item label="拼音缩写" >
                        <el-input v-model="form.name"></el-input>
                   </el-form-item>    
               </el-form>
               <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState2 = false">取 消</el-button>
                    <el-button type="primary" @click="valueState2 = false">确 定</el-button>
               </div>    
            </h-dialog>   
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
          }, 
         ],   
    }
  },
  methods:{
       handleEdit(index,row){
            console.log(index, row);
            this.valueState2 = true;
       },
       handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
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
