<template>
   <div class="storageBin">
        <Head title="库位列表">
                <div>
                   <el-button type="primary" @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增库位</el-button>
                   <el-button  @click="exportExcel"><i class="iconfont icondaochu"> </i>导出模板</el-button>
                   <el-select v-model="value2" placeholder="更多选择" style="width:104px;margin-left:10px">
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

        <div class="storageBin-center">
               <el-table
                border
                stripe
                id="outTable"  
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"              
                style="width: 100%"
                @selection-change="handleSelectionChange"
                :header-cell-style="{background:'#F3F6FB',color:'#606266'}"
               >
                <el-table-column
                type="selection" 
                align="center" 
                fixed=""        
                width="55">
                </el-table-column>
              <el-table-column
                  prop="date"
                  :show-overflow-tooltip="true"
                  label="单位代码">
              </el-table-column>
              <el-table-column
                  prop="name"
                  :show-overflow-tooltip="true"
                  label="库位名称">
              </el-table-column>
              <el-table-column
                  prop="address"
                   :show-overflow-tooltip="true"
                  label="库位地点">
              </el-table-column>
              <el-table-column
                  prop="address"
                   :show-overflow-tooltip="true"
                  label="库位说明">
              </el-table-column>
              <el-table-column
                  prop="status"
                   :show-overflow-tooltip="true"
                   align="center"
                   width="100"
                  label="库位状态">
                  <template slot-scope="scope">
                  <span v-if="scope.row.status=='正常'" style="color:#409EFF">{{ scope.row.status }}</span>
                  <span v-else style="color:#F56C6C">{{ scope.row.status }}</span>
	              </template>
              </el-table-column>
              <el-table-column label="操作" align='center' width="120" fixed="right">
              <template slot-scope="scope">
                  <el-button
                  type="success"
                  size="mini"
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
            <h-dialog :sendVal.sync='valueState' title="新增库位">
                <div style="margin-left:10px;margin-bottom:20px;">请填写库房信息</div>    
                <el-form :model="form">
                    <el-form-item label="库房代码" :label-width="'100px'">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="库位名称" :label-width="'100px'">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="库位地点" :label-width="'100px'">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="库位说明" :label-width="'100px'">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false" >取 消</el-button>
                    <el-button type="primary" @click="valueState = false" style="margin-left:40px;">确 定</el-button>
                </div>
                </h-dialog>
        </div>

        <div>
            <h-dialog :sendVal.sync='valueState2' title="修改库位">
                <div style="margin-left:10px;margin-bottom:20px;">请填写库房信息</div>    
                <el-form :model="form2">
                    <el-form-item label="库房代码" :label-width="'100px'">
                        <el-input v-model="form2.date"></el-input>
                    </el-form-item>
                    <el-form-item label="库位名称" :label-width="'100px'">
                        <el-input v-model="form2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="库位地点" :label-width="'100px'">
                        <el-input v-model="form2.name"></el-input>
                    </el-form-item>
                    <el-form-item label="库位说明" :label-width="'100px'">
                        <el-input v-model="form2.name"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false" >取 消</el-button>
                    <el-button type="primary" @click="valueState = false" style="margin-left:40px;">确 定</el-button>
                </div>
                </h-dialog>
        </div>
   </div>
</template>

<script>
import Head from '@/components/Basic/head'
import Seach from '@/components/input/search'
import FileSaver from 'file-saver'
import XLSX from "xlsx"
export default {
  name: 'storageBin',
  components:{ Head,Seach },
  data(){
    return{
        valueState:false,
        valueState2:false,
        tableData3: [{
            date: '泰州市中医院',
            name: '2010303',
            status:'正常',
            province: '上海',
            city: '普陀区',
            address: '南京普陀区金沙江路 1518 弄南京普陀区金沙江路 1518 弄南京普陀区金沙江路 1518 弄南京普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '泰州市中医院分院',
            name: '2010305',
            status:'正常',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1513 弄',
            zip: 200333
          }, {
            date: '泰州市中医院',
            name: '2010305',
            status:'正常',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1522 弄',
            zip: 200333
          }, {
            date: '泰州市中医院分院',
            name: '2010305',
            status:'正常',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1522 弄',
            zip: 200333
          }, {
            date: '泰州市中医院分院',
            name: '2010305',
            status:'正常',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 133 弄',
            zip: 200333
          }, {
            date: '泰州市中医院',
            name: '2010305',
            status:'正常',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '泰州市中医院分院',
            name: '2010305',
            status:'正常',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
        }],
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value2:'',
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
    }
  },
  methods:{
      handleEdit(index,row){
        console.log(index,row)
        this.valueState2 = true; 
        this.form2 = row
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
