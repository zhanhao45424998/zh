<template>
  <div class="total">
    <div class="first">
      <div class="firstHead">
        <i class="el-icon-search"></i> 搜索条件
      </div>
      <div class="firstInput">
        <el-row>
          <el-col :span="8">
            <el-col :span="8">
              <div class="title">选择库房:</div>
            </el-col>

            <el-col :span="16">
              <el-select
                v-model="value"
                filterable
                multiple
                :filter-method="choose"
                placeholder="请输入"
                clearable
                @focus="tap"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="8">
              <div class="title">一级库房:</div>
            </el-col>

            <el-col :span="16">
              <el-select
                v-model="value1"
                filterable
                :filter-method="choose"
                placeholder="请输入"
                clearable
                @focus="tap"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-col :span="8">
              <div class="title">起始时间:</div>
            </el-col>

            <el-col :span="16">
             <el-date-picker
            v-model="value2"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
            </el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="8">
              <div class="title">截止时间:</div>
            </el-col>

            <el-col :span="16">
               <el-date-picker
              v-model="value3"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
            </el-col>
          </el-col>
        </el-row>
      </div>
      <div class="firstButton">
        <i class="el-icon-search"></i> 查询
      </div>
    </div>
    <div class="second">
      <div class="secondTitle">
        <el-row >
          <el-col :span="3">产品列表</el-col>
          <el-col :span="13">
              <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[10, 25, 50, 100,1000]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
            </el-pagination>
            <!-- <el-col :span="9">每页显示</el-col>
            <el-col :span="10">
              <el-select v-model="num" placeholder="请选择">
                <el-option
                  v-for="item in numPrompt"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="5">条</el-col> -->
          </el-col>
          <el-col :span=3>
            <el-button type="primary" icon="el-icon-plus">手动新增产品</el-button>
          </el-col>
          <el-col :span="5">
            <el-dropdown split-button type="primary" @command="handleCommand">
              更多操作
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">视频教程</el-dropdown-item>
                <el-dropdown-item command="2">导入平台数据</el-dropdown-item>
                <el-dropdown-item command="3">导入Excel模板数据</el-dropdown-item>
                <el-dropdown-item command="4">批量停用</el-dropdown-item>
                <el-dropdown-item command="5">批量启用</el-dropdown-item>
                <el-dropdown-item command="6">删除材料</el-dropdown-item>
                <el-dropdown-item command="7">编辑规格</el-dropdown-item>
                <el-dropdown-item command="8">更新售价</el-dropdown-item>
                <el-dropdown-item command="9">自动创建唯一码</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </div>
      <div  ref="print" id="form1" style="height:100%">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%;text-align:center"
          height="380"
          :row-class-name="tableRowClassName"
          @selection-change="handleSelectionChange"
           @row-click="handleRowClick"
        >
          <!-- <el-table-column type="selection" width="55"  fixed></el-table-column> -->
          <el-table-column label="项目" width="120" fixed>
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="卫材办库房" width="240">
           <el-table-column label="进价金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="零售金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          </el-table-column>
      
     <el-table-column label="消毒供应室库房" width="240">
           <el-table-column label="进价金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="零售金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.address}}</span>
            </template>
          </el-table-column>
          </el-table-column>
            <el-table-column label="手术室（东院）库房" width="240">
           <el-table-column label="进价金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="零售金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          </el-table-column>
            <el-table-column label="卫材办库房" width="240">
           <el-table-column label="进价金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="零售金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          </el-table-column>
            <el-table-column label="卫材办库房" width="240">
           <el-table-column label="进价金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="零售金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          </el-table-column>
            <el-table-column label="卫材办库房" width="240">
           <el-table-column label="进价金额" width="120">
            
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="零售金额" width="120">
            
            <template slot-scope="scope">
            
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          </el-table-column>
            <el-table-column label="合计" width="240">
           <el-table-column label="进价金额" width="120">
            
            <template slot-scope="scope">
           
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="零售金额" width="120">
            
            <template slot-scope="scope">
             
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          </el-table-column>
        </el-table>
      </div>
       <div  class="printdetail no-print" @click="choosePrint"> 打印</div>
          <div  class="printdetail no-print" @click="choosePrintout"> 导出</div>
    </div>
  </div>
</template>
<script>
import { getLodop } from '../../utils/lodop'
// import CesiumPrint from "cesium-print";
import API from "@/api/login";
export default {
  data() {
    return {
         currentPage4: 4,
         value:[
           "WZJ","SPN"
         ],
      numPrompt: [
        {
          value: 10,
          label: "10"
        },
        {
          value: 25,
          label: "25"
        },
        {
          value: "50",
          label: "50"
        },
        {
          value: "100",
          label: "100"
        },
        {
          value: "1000",
          label: "1000"
        }
      ],
      options: [
        {
          value: "HJG",
          label: "黄金糕"
        },
        {
          value: "SPN",
          label: "双皮奶"
        },
        {
          value: "WZJ",
          label: "蚵仔煎"
        },
        {
          value: "LXM",
          label: "龙须面"
        },
        {
          value: "BJKY",
          label: "北京烤鸭"
        }
      ],
      data: [
        {
          value: "HJG",
          label: "黄金糕"
        },
        {
          value: "SPN",
          label: "双皮奶"
        },
        {
          value: "WZJ",
          label: "蚵仔煎"
        },
        {
          value: "LXM",
          label: "龙须面"
        },
        {
          value: "BJKY",
          label: "北京烤鸭"
        }
      ],
      value1: "",
       value2: "",
        value3: "",
      num: "",
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          num: 1,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          num: 2,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          num: 3,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          num: 4,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          num: 5,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          num: 6,
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          num: 7,
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: []
    };
  },
  mounted(){
    setTimeout(() => {
      for(let i=0;i<100;i++){
         this.tableData.push({
            date: "2016-05-07",
          name: "王小虎",
          num: 7,
          address: "上海市普陀区金沙江路 1518 弄"
         })
      }
    }, 200);
  },
  methods: {
    //打印
    choosePrint(){
    
           
            var LODOP=getLodop();   
        LODOP.PRINT_INIT("333");  
         LODOP.SET_PRINT_MODE('FULL_WIDTH_FOR_OVERFLOW',true);
        LODOP.ADD_PRINT_HTM(100,20,500,"100%",document.getElementById("form1").innerHTML); 
        //LODOP.SET_PRINT_STYLEA(0,"HtmWaitMilSecs",1000); //如果内容包含复杂的运行脚本或第三方插件，延迟1000毫秒
        LODOP.PREVIEW();	
    },
     choosePrintout(){
    
           
          var LODOP=getLodop();   
        LODOP.PRINT_INIT("");  
        LODOP.ADD_PRINT_TABLE(100,20,500,"100%",document.getElementById("form1").innerHTML);  
        LODOP.SAVE_TO_FILE("新文件名.xls");  
        },
     toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
    //编辑数据，跳转详情页
    editData(index,data){
        this.$router.push({
          path:'jumpDetail',
          query: {
           detail:JSON.stringify(data)
          }
        })
    },
      handleSizeChange(val) {
        console.log(`每页条`+val );
      },
      handleCurrentChange(val) {
        console.log("当前页:"+val);
      },
    tap() {
      console.log(111);
      this.value = "";
      this.options = this.data;
    },
    sendRequst() {
      API.test()
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    //checkbox选中
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val)
    },
     //行选中checkbox改变
    handleRowClick(row, column, event) {
      this.$refs.multipleTable.toggleRowSelection(row);
        //  console.log("this.selecTestContent", this.selectTestContent);
    },
    handleCommand(e) {
      console.log(e);
    },
    //改变表格颜色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else if (rowIndex % 2 != 0) {
        return "success-row";
      }
      return "";
    },
    //模糊查询
    choose(e) {
      console.log(e);

      let data = [
        {
          value: "HJG",
          label: "黄金糕"
        },
        {
          value: "SPN",
          label: "双皮奶"
        },
        {
          value: "WZJ",
          label: "蚵仔煎"
        },
        {
          value: "LXM",
          label: "龙须面"
        },
        {
          value: "BJKY",
          label: "北京烤鸭"
        }
      ];
      this.options = [];
      if (!e) {
        this.options = data;
      }
      for (let i = 0; i < data.length; i++) {
        if (e) {
          let pattern = /^([\u4E00-\u9FA5]|[\uFE30-\uFFA0])*$/gi;
          if (pattern.test(e)) {
            if (data[i].label.indexOf(e) > -1) {
              this.options.push(data[i]);
            }
          } else if (/^[a-zA-Z]+$/.test(e)) {
            let promptValue = e.toUpperCase();
            if (data[i].value.indexOf(promptValue) > -1) {
              this.options.push(data[i]);
            }
          }
        }
      }
      console.log(this.options);
    }
  }
};
</script>

<style lang='scss' scoped>

.printdetail{
  width:100px;
  background:#66b1ff;
  height:40px;
  margin:0 auto;
  font-size:24px;
  line-height:40px;
  text-align:center;
  border-radius:4px;
}
.total{
    // width:98%;
}

.firstInput{
  /deep/.el-input__inner{
width:350px;
}}
/deep/ .el-table--border .cell {
  text-align:center!important;
}
.el-ta.sendRequst {
  width: 60px;
  height: 30px;
  text-align: center;
  margin: 0 auto;
  line-height: 30px;
  background: red;
}
.first {
  border: 1px solid #66b1ff;
}
.firstInput {
  padding-left: 20px;
  padding-right: 20px;
}
.firstHead {
  padding-left: 20px;
  height: 60px;
  background: #66b1ff;
  color: #f2f2f2;
  font-weight: 700;
  line-height: 60px;
  border-radius: 4px 4px 0 0;
  font-size: 26px;
  margin-bottom: 20px;
}
.title,
.secondTitle {
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  font-size: 20px;
}
.secondTitle {
  text-align: left;
  padding-top: 20px;
  // padding-bottom:10px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 10px solid #ffffff;
}
.el-row {
  margin-bottom: 20px;
}

.firstButton {
  height: 50px;
  border-radius: 25px;
  border: 1px solid #ffffff;
  width: 100px;
  background: #66b1ff;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
  font-weight: 700;
  margin: 20px auto;
  color: #f2f2f2;
}
.second {
  margin-top: 20px;
  background: #e9e6e6;
}
.chooseInputnum {
  width: 100px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
}
.editButton {
  width: 80px;
  height: 30px;
  line-height: 30px;
  background: #66b1ff;
  border-radius: 4px;
  color: whitesmoke;
}

/deep/.el-input__inner {
  border: 1px solid #6d6969 !important;
  /* color: #0885ec; */
  font-weight: 600;
}
/deep/.el-select {
  display: block !important;
}
/deep/.el-button {
  font-weight: 700;
  font-size: 20px;
}
/deep/.el-table .warning-row {
  background: oldlace;
}

/deep/.el-table .success-row {
  background: #f0f9eb;
}
/deep/.el-pagination {
    padding-top:6px;
}
/deep/table{
  font-size:20px;
}
/deep/.el-checkbox__inner{
  width:24px!important;
  height:24px!important;;
}
/deep/.el-checkbox__input .el-checkbox__inner::after {
  
    border: 2px solid #fff;
    box-sizing: content-box;
    content: "";
    border-left: 0;
    border-top: 0;
    height: 12px;
    left: 6px;
    position: absolute;
    top: 1px;
    width: 6px;
    transform: rotate(45deg) scaleY(1);
  }
</style>