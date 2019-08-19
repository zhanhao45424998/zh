<template>
   <div class="producerManagement">
       <div>
           <Head title="新增生产企业">
                     <div>
                        <el-button type="primary" @click="addProducer"><i class="iconfont iconxinzeng"> </i>新增生产企业</el-button>
                        <el-button type="" @click="exportExcel"><i class="iconfont icondaochu"> </i>导出模板</el-button>
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
       </div>
       <div>
           <el-table
                id="outTable"  
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                border
                stripe
                :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection" 
                align="center"         
                width="55">
                </el-table-column>
                <el-table-column
                label="生产企业名称"
                :show-overflow-tooltip="true"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                :show-overflow-tooltip="true"
                label="地址"
               >
                </el-table-column>
                <el-table-column
                prop="address"
                label="联系电话"
                :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态"
                :show-overflow-tooltip="true"
                align="center"
                width="100"
                >
                <template slot-scope="scope">
                  <span v-if="scope.row.status=='正常'" style="color:#94D475">{{ scope.row.status }}</span>
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
   </div>
</template>

<script>
import FileSaver from 'file-saver'
import XLSX from "xlsx"
import Head from '@/components/Basic/head'
export default {
  name: 'producerManagement',
  components:{ Head },
  data(){
    return{
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
        value2: '',
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
              status:'异常',
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
      addProducer(){
        this.$router.push({
            path:'addproducerManagement',
            query:{
              
            }
        })   
      },
      handleEdit(index, row) {
        this.$router.push({
            path:'editproducerManagement',
            query:{
              msg:JSON.stringify(row),
            }
        })  
        console.log(index, row);
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
