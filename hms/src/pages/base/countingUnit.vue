<template>
   <div class="countingUnit">
        <div>
            <Head title="计数单位列表">
                    <div>
                        <el-button type="primary" @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增计数单位</el-button>
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
                width="70">
                </el-table-column>
                <el-table-column
                label="计数单位"
                :show-overflow-tooltip="true"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="单位名称"
                :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作" align="center" width="250" fixed="right">
                        <template slot-scope="scope">
                             <el-button
                                type="success"
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)"><i class="iconfont iconxiugai"></i>编辑</el-button> 
                             <el-button
                                style="margin-left:20px;"
                                type="danger"
                                size="mini"
                                @click="handleDelete(scope.$index, scope.row)"><i class="iconfont iconshanchu"> </i>删除</el-button>                   
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
             <h-dialog title="新增计数单位" :sendVal.sync="valueState">
                <div>        
                    <el-form ref="form" :model="formds" label-width="140px">
                        <el-form-item label="计数单位" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>                   
                    </el-form> 
                </div>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false">取 消</el-button>
                    <el-button type="primary" >确 定</el-button>
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
        valueState:false,    
        formds: {
          region: '',

        },
        tableData3: [
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
         options2: [{
          value: '选项1',
          label: '同步下载科室'
        }, {
          value: '选项2',
          label: '同步下载科室',
        }, {
          value: '选项3',
          label: '同步上传科室'
        }, {
          value: '选项4',
          label: '启用科室'
        }, {
          value: '选项5',
          label: '停用科室'
        }],
        value2: '',
    }
  },
  methods:{
        //修改
        handleEdit(index, row) {
            console.log(index, row);
            this.valueState2 = true;
            console.log('aa',this.valueState2)
            this.form2 = row;
        },
        //删除
        handleDelete(index,row){
            this.$confirm('此操作将永久删除该计数单位, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            console.log(index,row)
            this.tableData3.splice(index,1)
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
           
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

        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
