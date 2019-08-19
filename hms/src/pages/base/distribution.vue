<template>
  <div class="distribution">
        <div class="distribution-content">
            <Head title="配送企业商列表">
                <div>
                   <el-button type="primary" @click="handleAdd"><i class="iconfont iconxinzeng"> </i>新增配送企业</el-button>
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
            
            <!-- <Table></Table> -->

          <el-table
                id="outTable"  
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                border
                stripe
                style="width: 100%"
                :header-cell-style="{background:'#F3F6FB',color:'#606266'}"
                @selection-change="handleSelectionChange">
                <el-table-column
                  type="selection"
                  align='center'
                  width="55">
                </el-table-column>
                <el-table-column
                label="配送企业名称"
                 :show-overflow-tooltip="true"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="address"
                :show-overflow-tooltip="true"
                label="地址"
                >
                </el-table-column>
                <el-table-column
                prop="name"
                label="联系电话"
               >
                </el-table-column>
               
                <el-table-column
                prop="status"
                label="状态"
                width="100"
                align='center'
                >
                <template slot-scope="scope">
                  <span v-if="scope.row.status=='正常'" style="color:#94D475">{{ scope.row.status }}</span>
                  <span v-else style="color:#F56C6C">{{ scope.row.status }}</span>
	              </template>
                </el-table-column>
                <el-table-column label="操作" 
                 align='center'
                 width="250" fixed="right"
                >
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)"><i class="iconfont iconxiugai"></i>编辑</el-button>
                    <el-button
                    size="mini"
                    type="warning"
                    @click="handleDelete(scope.$index, scope.row)"><i class="iconfont iconbiangeng"></i>变更</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div> 

        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
        
        <!-- 变更 -->
        <div>
            <el-dialog title="配送企业信息变更" :visible.sync="dialogFormVisible" width="60%">
              <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="企业变更" name="first">
                     <div>
                         <el-form :model="form"  ref="form" label-width="140px" class="demo-ruleForm">
                           <div style="display:flex">
                               <el-form-item label="企业名称：">
                                  <el-input v-model="form.name"></el-input>
                               </el-form-item>
                               <el-form-item label="是否转移材料：" style="color:red;margin-left:10px;">
                                  <el-radio-group v-model="form.region">
                                    <el-radio label="转移所有材料"></el-radio>
                                    <el-radio label="只增加公司，禁用原公司"></el-radio>
                                  </el-radio-group>
                               </el-form-item>
                           </div>
                           <div style="display:flex">
                              <el-form-item label="联系人：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                              <el-form-item label="联系电话：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                              <el-form-item label="固话：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                            </div>
                            <div style="display:flex">
                              <el-form-item label="生产企业负责人：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                              <el-form-item label="生产企业电话：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                              <el-form-item label="生产企业固话：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                            </div>
                            <div style="display:flex">
                              <el-form-item label="邮箱：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                              <el-form-item label="邮编：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                              <el-form-item label="统一信用社代码：">
                                  <el-input v-model="form.name"></el-input>
                              </el-form-item>
                            </div>
                            <div style="display:flex">
                                <el-form-item label="企业地址 : ">
                                    <el-cascader :options="options" placeholder="请选择" class="item-css"></el-cascader>
                                </el-form-item>  
                            </div>     
                         </el-form>
                         <div style="text-align: center;">
                             <el-button type="success">保存</el-button>  
                         </div>
                         
                     </div>
                </el-tab-pane>
                <el-tab-pane label="部分耗材变更" name="second">
                  <el-form ref="form" :model="form" label-width="80px" style="display:flex">
                    <el-form-item label="目标企业">
                      <Select :list ="list"></Select>  
                    </el-form-item>
                    <el-form-item>
                       <el-radio-group v-model="form.resource">
                        <el-radio label="转移材料"></el-radio>
                        <el-radio label="复制材料"></el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-form>
                  <el-table
                    border
                    ref="multipleTable"
                    :data="tableData3"
                    tooltip-effect="dark"
                    style="width: 100%"
                    @selection-change="handleSelectionChange">
                    <el-table-column
                      type="selection"
                      width="55">
                    </el-table-column>
                    <el-table-column
                      label="日期"
                      width="120">
                      <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="姓名"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="地址"
                      show-overflow-tooltip>
                    </el-table-column>
                   </el-table> 
                   <el-pagination
                      layout="prev, pager, next"
                      :total="1000"
                      style="text-align:right;margin-top:20px;"
                      >
                    </el-pagination>
                    <div style="text-align:center"> 
                       <el-button type="success">保存</el-button>
                    </div>  
                </el-tab-pane>
              </el-tabs>
          </el-dialog>
        </div>
        
        <!-- 新增配送企业 -->    


  </div>
</template>

<script>
import Table from '@/components/table/table'
import Head from '@/components/Basic/head'
import FileSaver from 'file-saver'
import XLSX from "xlsx"
import Select from '@/components/select/select1'
export default {
  name: 'distribution',
  components:{Head,Table,Select},
  props: {
    msg: String
  },
  data() {
      return {
        options: [{
            value: 'jiangsusheng',
            label: '江苏省',
            children: [{
                value: 'nanjingshi',
                label: '南京市',
                children:[
                    {
                        value:'yuhuaqu',
                        label:'雨花区',

                    }
                ]
            },{
                value: 'xuzhoushi',
                label: '徐州市',
            }]
        },{
            value: 'anhuisheng',
            label: '安徽省',
            children: [{
                value: 'hefeishi',
                label: '合肥市',
            },{
                value: 'suzhoushi',
                label: '宿州市',
            }]
        }],  
        activeName: 'first',
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
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
        formLabelWidth: '120px',
        tableData3: [
            {
                date: '苏州好博医疗器械有限公司	',
                status:'正常',
                name: '0512-53205591',
                address: '江苏省苏州市太仓市',
            }, 
            {
                date: '上海涵象医疗设备有限公司',
                status:'正常',
                name: '15905108266',
                address: '北京市北京市市辖区东城区'
            }, 
             {
                date: '苏州好博医疗器械有限公司	',
                status:'异常',
                name: '0512-53205591',
                address: '江苏省苏州市太仓市',
            }, 
            {
                date: '上海涵象医疗设备有限公司',
                status:'正常',
                name: '15905108266',
                address: '北京市北京市市辖区东城区'
            },  {
                date: '苏州好博医疗器械有限公司	',
                status:'正常',
                name: '0512-53205591',
                address: '江苏省苏州市太仓市',
            }, 
            {
                date: '上海涵象医疗设备有限公司',
                status:'正常',
                name: '15905108266',
                address: '北京市北京市市辖区东城区'
            }, 
        ],  
        multipleSelection: [],
        list: [{
            CodeValue: '选项1',
            CodeName: '黄金糕2'
            }, {
            CodeValue: '选项2',
            CodeName: '双皮奶2'
            }, {
            CodeValue: '选项3',
            CodeName: '蚵仔煎2'
            }, {
            CodeValue: '选项4',
            CodeName: '龙须面2'
            }, {
            CodeValue: '选项5',
            CodeName: '北京烤鸭2'
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
        value2: ''
      }
  },
  methods:{
      handleAdd(){
        this.$router.push({ 
            path:'adddistribution',
            
        })
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val)
      },
      handleEdit(index, row) {
        this.$router.push({
            path:'editdistribution',
            query:{
              msg:JSON.stringify(row),
            }
        })  
        console.log(index, row);
      },
      handleDelete(index, row) {
        this.dialogFormVisible = true;
        console.log(index, row);
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
.block{
    margin-top: 20px;
    text-align: right;
}



</style>
