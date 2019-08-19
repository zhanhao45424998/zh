<template>
   <div class="department">
        <div>
            <Head title="科室列表">
                    <div>
                        <el-button type="primary" @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增科室</el-button>
                        <el-button type=""><i class="iconfont icondaochu"> </i>导出模板</el-button>
                        <el-select v-model="value2" placeholder="更多操作" style="width:104px;margin-left:10px">
                                <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                                </el-option>
                         </el-select>
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
                width="55">
                </el-table-column>
                <el-table-column
                label="科室名称"
                 :show-overflow-tooltip="true"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="拼音缩写"
                :show-overflow-tooltip="true"
               >
                </el-table-column>
                <el-table-column
                prop="address"
                label="科室代码"
                 :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column
                prop="status"
                label="科室性质"
               
                >
                </el-table-column>
                 <el-table-column
                prop="status"
                label="医院代码"
               
                >
                </el-table-column>
                 <el-table-column
                prop="status"
                label="科室状态"
                align="center"
                width="120"
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
             <h-dialog title="修改科室" :sendVal.sync="valueState2">
                <div>        
                    <el-form ref="formd" :model="formd" label-width="140px">
                        <el-form-item label="科室名称" prop="name">
                            <el-input v-model="formd.name"></el-input>
                        </el-form-item>
                        <el-form-item label="拼音缩写" prop="name">
                            <el-input v-model="formd.name"></el-input>
                        </el-form-item>
                        <el-form-item label="科室代码" prop="name" >
                            <el-input v-model="formd.name" :disabled="true"></el-input>
                        </el-form-item>
                        <el-form-item label="科室性质" prop="region">
                            <el-select v-model="formd.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="是否扫码计费" prop="region">
                            <el-select v-model="formd.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属医院" prop="region">
                            <el-select v-model="formd.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form> 
                </div>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false">取 消</el-button>
                    <el-button type="primary" @click="updata">确 定</el-button>
                </div>
            </h-dialog>
        </div>

        <div>
             <h-dialog title="新增科室" :sendVal.sync="valueState">
                <div>        
                    <el-form ref="form" :model="formds" label-width="140px">
                        <el-form-item label="科室名称" prop="name">
                            <el-input v-model="formds.name"></el-input>
                        </el-form-item>
                        <el-form-item label="拼音缩写" prop="name">
                            <el-input v-model="formds.name"></el-input>
                        </el-form-item>
                        <el-form-item label="科室代码" prop="name">
                            <el-input v-model="formds.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="科室性质" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="是否扫码计费" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属医院" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-form> 
                </div>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState2 = false">取 消</el-button>
                    <el-button type="primary" @click="updata">确 定</el-button>
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
        valueState2:false,
        formd: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formds: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
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
       updata(){

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

        handleEdit(index, row) {
          this.valueState2 = true;
          console.log(index, row);
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
