<template>
  <div class="HospitalAdmin">
        <Head title="医院列表">      
                <div class="">
                    <div class="table-list">
                      <Seach @getval="getval"></Seach>
                      <el-button type="primary"  @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增医院</el-button>
                      <el-button type=""  @click="exportExcel"><i class="iconfont icondaochu"> </i>导出模板</el-button>
                      <el-button type=""  @click="printContent()"><i class="iconfont icondayin"> </i>打印</el-button>
                    </div>
                </div>
        </Head>

        <div class="HospitalAdmin-content">   
          <el-table
                border
                stripe
                id="outTable"  
                ref="multipleTable"             
                tooltip-effect="dark"
                :data="tableData3.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                style="width: 100%"
                :header-cell-style="{background:'#F3F6FB',color:'#606266'}"
                @selection-change="handleSelectionChange">
                <el-table-column
                label="序号"
                align='center'
                type="index"
                width="70">
              </el-table-column>
              <el-table-column
                  prop="hospitalname"
                  :show-overflow-tooltip="true"
                  label="医院名称">
              </el-table-column>
              <el-table-column
                  prop="hospitalcode"
                  :show-overflow-tooltip="true"
                  label="医院代码">
              </el-table-column>
              <el-table-column
                  prop="hospitalnamepysx"
                   :show-overflow-tooltip="true"
                  label="拼音缩写">
              </el-table-column>
              <el-table-column
                  prop="hospitalnature"
                  align="center"
                   :show-overflow-tooltip="true"
                  label="医院性质">
                  <template slot-scope="scope">
                  <span v-if="scope.row.hospitalnature == 1">主院</span>
                  <span v-else>分院</span>
	                </template>
              </el-table-column>
              <el-table-column label="操作" align='center' width="250"  fixed="right">
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

        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
            background
            :page-size="pageSize" 
            @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"   
            layout="prev, pager, next"
            :total= tableData3.length>
            </el-pagination>
        </div>

        <!-- 新增医院 -->
        <div>
            <h-dialog :sendVal.sync='valueState' title="新增医院">
            <div style="margin-left:10px;margin-bottom:20px;">请填写医院信息</div>    
            <el-form :model="form">
                <el-form-item label="医院名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="医院代码" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="医院性质" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="主院" value="1"></el-option>
                    <el-option label="分院" value="2"></el-option>
                </el-select>
                </el-form-item>
                <el-form-item label="对应主院" :label-width="formLabelWidth" v-if="form.region== 2">
                <el-select v-model="form.desc" placeholder="请选择活动区域">
                    <el-option label="主院" value="zhuyuan"></el-option>
                    <el-option label="分院" value="fenyuan"></el-option>
                </el-select>
                </el-form-item>
              
            </el-form>
            <div slot="foot" class="dialog-footer">
                <el-button @click="valueState = false" >取 消</el-button>
                <el-button type="primary" @click="valueState = false" style="margin-left:40px;">确 定</el-button>
            </div>
            </h-dialog>
        </div>

        <!-- 修改医院信息 -->
        <div>
             <h-dialog title="修改医院信息" :sendVal.sync="valueState2">
              <div style="margin-left:10px;margin-bottom:20px;">请填写医院信息</div>    
              <el-form :model="form2">
                  <el-form-item label="医院名称" :label-width="formLabelWidth">
                  <el-input v-model="form2.hospitalname" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="医院代码" :label-width="formLabelWidth">
                  <el-input v-model="form2.hospitalcode" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="医院性质" :label-width="formLabelWidth">
                  <el-select v-model="form.hospitalnature" placeholder="请选择医院性质">
                      <el-option label="主院" value="1"></el-option>
                      <el-option label="分院" value="0"></el-option>
                  </el-select>
                  </el-form-item>
                  <el-form-item label="对应主院" :label-width="formLabelWidth" v-if="form.hospitalnature== 0">
                  <el-select v-model="form.hospitalnature" placeholder="请选择活动区域">
                      <el-option label="主院" value="zhuyuan"></el-option>
                      <el-option label="分院" value="fenyuan"></el-option>
                  </el-select>
                  </el-form-item>
              </el-form>
              <div slot="foot" class="dialog-footer">
                  <el-button @click="valueState2 = false">取 消</el-button>
                  <el-button type="primary" @click="valueState2 = false" style="margin-left:40px;">确 定</el-button>
              </div>
              </h-dialog>
        </div>
  </div>
</template>

<script>
import Seach from '@/components/input/search'
import exportExcelButton from '@/components/exportExcel/exportExcelButton'
import FileSaver from 'file-saver'
import XLSX from "xlsx"
import Head from '@/components/Basic/head'
import codes from '@/utils/code'
import API from "@/api/base"
import list2 from '@/assets/jiashuju'

export default {
  name: 'HospitalAdmin',
  components:{ Head,Seach },
  props: {
    msg: String
  },
  data(){
      return{
        currentPage: 1, // 当前页码
        total: 20, // 总条数
        pageSize: 4, // 每页的数据条数  
        valueState:false,
        valueState2:false,
          tableData: [{
             date: '泰州市中医院',
            name: '1232128446907113X3',
            address: 'TZSJYZYY'
          }, {
            date: '泰州市姜堰中医院',
            name: '1232128446907113X3',
            address: 'TZSJYZYY'
          }],
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
          form2: {},
          formLabelWidth: '120px',
          tableData3: [ {
            date: '泰州市中医院分院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1513 弄',
            zip: 200333
          }, {
            date: '泰州市中医院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1522 弄',
            zip: 200333
          }, {
            date: '泰州市中医院分院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1522 弄',
            zip: 200333
          }, {
            date: '泰州市中医院分院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 133 弄',
            zip: 200333
          }, {
            date: '泰州市中医院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
        
           {
            date: '泰州市中医院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
           {
            date: '泰州市中医院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
           {
            date: '泰州市中医院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '泰州市中医院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '泰州市中医院分院',
            name: '2010305',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }]
      }
  },

  mounted(){
      console.log('code',codes.base01)
      this.getMsg()
  }, 

  methods:{
      getMsg(){
        let servicecode = codes.base01;
        let usertoken = localStorage.getItem('TokenKey')
        API.getMsg({servicecode,usertoken}).then(res=>{
            console.log('res',res)
            this.tableData3 = res.data.message
        })
      },
      
      //分頁
      handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
      },
      handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
      },

      getval(data){
          let list = this.tableData3;
          list.forEach(v => {
            //  console.log(v.address)
             if(data.indexOf(v.address)){
               console.log(v.address)
             }
          });
      },
      //修改
      handleEdit(index, row) {
        console.log(index, row);
        this.valueState2 = true;
        console.log('aa',this.valueState2)
        this.form2 = row;
      },
      //删除
      handleDelete(index,row){
         this.$confirm('此操作将永久删除该医院, 是否继续?', '提示', {
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
      //
      handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
      }, 


      //导出excel
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

        printContent(){
            let wpt = document.getElementById('outTable');
            let newContent = wpt.innerHTML;
            let oldContent = document.body.innerHTML;
            
            document.body.innerHTML = newContent;
            window.print(); //打印方法
            window.localtion.reload();
            document.body.innerHTML = oldContent;
        },
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table-list{
  display: flex;
  div{
    margin-right: 20px;
  }
}
.block{
    margin-top:20px;
    text-align: right;
}
// .el-table{
//     font-size: 16px;
// }
.HospitalAdmin{
  .HospitalAdmin-title{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dfdfdf;
    p {
        font-size: 20px;

      } 
    }
  .HospitalAdmin-content{
    width: 100% 
  }
}
</style>
