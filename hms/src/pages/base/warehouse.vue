<template>
   <div class="warehouse">
        <div>
            <Head title="库房列表">
                    <div>
                        <el-button type="primary" @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增库房</el-button>          
                        <el-button type="" @click="exportExcel"><i class="iconfont icondaochu"> </i>导出模板</el-button>
                        <el-button type="success" @click="printContent()">打印模板</el-button>
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
                id="outTable"  
                :data="tableData3"
                border
                fit
                stripe
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
                label="库房名称"
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
                label="库房性质"
                :show-overflow-tooltip="true"
                >
                </el-table-column>
                 <el-table-column
                prop="address"
                label="医院代码"
                align="center"
                :show-overflow-tooltip="true"
                >
                </el-table-column>
                 <el-table-column
                prop="status"
                label="科室状态"
                align="center"
                width="100"
                >
                <template slot-scope="scope">
                  <span v-if="scope.row.status=='正常'" style="color:#409EFF">{{ scope.row.status }}</span>
                  <span v-else style="color:#F56C6C">{{ scope.row.status }}</span>
	            </template>
                </el-table-column>
                <el-table-column label="操作" align='center' fixed='right'  width="350">
                    <template slot-scope="scope">
                        <el-button
                        type="success"
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"><i class="iconfont iconxiugai"></i>编辑</el-button> 
                        <el-button
                        type="primary"
                        size="mini"
                        @click="handleRel(scope.$index, scope.row)"><i class="iconfont iconguanlian"></i>关联</el-button> 
                        <el-button
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
            <h-dialog title="新增库房" :sendVal.sync="valueState">
                <div>        
                    <el-form ref="form" :model="formds" label-width="140px">
                        <el-form-item label="所属医院" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属科室" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="库房名称" prop="name">
                            <el-input v-model="formds.name"></el-input>
                        </el-form-item>
                        <el-form-item label="库房性质" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="采购库房" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="服务库房" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="高值耗材库房" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="库房地址" prop="name">
                            <el-input v-model="formds.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="联系人" prop="name">
                            <el-input v-model="formds.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="联系方式" prop="name">
                            <el-input v-model="formds.name" ></el-input>
                        </el-form-item>
                        
                    </el-form> 
                </div>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false">取 消</el-button>
                    <el-button type="primary" @click="updata">确 定</el-button>
                </div>
            </h-dialog>

            <h-dialog title="编辑库房" :sendVal.sync="valueState2">
                 <el-form ref="form" :model="formds" label-width="140px">
                        <el-form-item label="所属医院" prop="region" >
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%" disabled="disabled">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="所属科室" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%" disabled="disabled">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="库房名称" prop="name">
                            <el-input v-model="formds.name"></el-input>
                        </el-form-item>
                        <el-form-item label="库房性质" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="采购库房" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="服务库房" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="高值耗材库房" prop="region">
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="库房地址" prop="name">
                            <el-input v-model="formds.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="联系人" prop="name">
                            <el-input v-model="formds.name" ></el-input>
                        </el-form-item>
                        <el-form-item label="联系方式" prop="name">
                            <el-input v-model="formds.name" ></el-input>
                        </el-form-item>
                        <div slot="foot" class="dialog-footer">
                            <el-button @click="valueState2 = false">取 消</el-button>
                            <el-button type="primary" >确 定</el-button>
                        </div>
                    </el-form> 
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
              address: '02824378',
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '02824378'
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '02824378'
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '02824378'
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

        printContent(){
            let wpt = document.getElementById('outTable');
            let newContent = wpt.innerHTML;
            let oldContent = document.body.innerHTML;
            
            document.body.innerHTML = newContent;
            window.print(); //打印方法
            window.localtion.reload();
            document.body.innerHTML = oldContent;
        },

        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
        },
        handleEdit(index,row){
            this.valueState2 = true;
        },
        handleRel(index,row){

        },
        handleDelete(index,row){

        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
