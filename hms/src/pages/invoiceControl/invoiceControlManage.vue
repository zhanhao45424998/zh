<template>
  <div class="total">
    <div class="first">
      <div class="firstHead">
        <i class="el-icon-search"></i> 搜索条件
      </div>
      <div class="firstInput">
        
        <div class="formTitleLine" ref="print" id="printMe">
          <el-form
            :inline="true"
            class="demo-form-inline"
            :label-position="positionright"
            label-width="300px"
          >
            <el-form-item label="入库医院:" prop="name">
               <el-select
                v-model="value"
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
            </el-form-item>
            <el-form-item label="选择库房:" prop="name">
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
            </el-form-item>
            <el-form-item label="发票号:" prop="name">
             <el-input v-model='value2'>

             </el-input>
            </el-form-item>
            <el-form-item label="登记时间:" prop="name">
              <!-- <el-date-picker
                v-model="value3"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              ></el-date-picker> -->
              <el-col :span="24">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
  
  
            </el-form-item>
            <el-form-item label="登记时间:" prop="name">
              <!-- <el-date-picker
                v-model="value4"
                align="right"
                type="date"
                placeholder="选择日期"
                :picker-options="pickerOptions"
              ></el-date-picker> -->
               <el-col :span="24">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            </el-form-item>
            <el-form-item label="配送企业:" prop="name">
              <el-select
                v-model="value5"
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
            </el-form-item>
            <el-form-item label="状态:" prop="name">
              <el-select
                v-model="value6"
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
            </el-form-item>
            <el-form-item label="入库方式:" prop="name">
              <el-select
                v-model="value7"
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
            </el-form-item>
            <el-form-item label="查询方式:" prop="name">
            <el-col :span="24">
                <el-radio-group v-model="form.resource">
                <el-radio label="按登记日期查询"></el-radio>
                <el-radio label="按审核日期查询"></el-radio>
                </el-radio-group>
            </el-col>
            </el-form-item>
           

            
          </el-form>
        </div>
      </div>

      <div class="firstButton">
        <i class="el-icon-search"></i> 查询
      </div>
      </div>
      <div class="searchDetail">
       <div class="second">
        <el-form ref="form" :model="form">
          <el-form-item label="搜索:" label-width="100px">
            <div class="showSearch">
              <el-input
                v-model="input"
                placeholder="请输入查询内容"
                @change="change"
                class="showDatailInput"
              ></el-input>
              <div class="third">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[10, 25, 50, 100,1000]"
                :page-size="10"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400"
              ></el-pagination>
            </div>
            
            <el-button type="primary" icon="el-icon-plus" class="showbutton">审核发票</el-button>
            <div class="showRightObgect">
            <el-dropdown split-button type="primary" @command="handleCommand">
              更多操作
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">补打入库单</el-dropdown-item>
                <el-dropdown-item command="2">详细信息</el-dropdown-item>
                <el-dropdown-item command="3">视频教程</el-dropdown-item>
                <el-dropdown-item command="4">修改发票</el-dropdown-item>
                <el-dropdown-item command="5">作废发票</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
         </div>
            </div>
          </el-form-item>
        </el-form> 
</div>

  <el-form ref="form" :model="form">
          <el-form-item label-width="20px">
            <el-table
              ref="multipleTable"
              :data="tableData"
              tooltip-effect="dark"
              style="width: 100%"
              height="460"
              :row-class-name="tableRowClassName"
              @selection-change="handleSelectionChange"
              @row-click="handleRowClick"
            >
              <el-table-column type="selection" width="55" fixed></el-table-column>
              <el-table-column label="序号" width="120" fixed>
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{scope.row.num}}</span>
                </template>
              </el-table-column>
              <el-table-column label="发票号" width="120">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{scope.row.num}}</span>
                </template>
              </el-table-column>
              <el-table-column label="开票金额" width="230" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="实付金额" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="已付金额" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="录入人" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="录入时间" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="审核时间" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="配送企业" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="状态" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-form>
      </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      positionright: "right",
      value:'',
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
       value7: "",
      input: "",
      currentPage4: 1,
      form: {
        name: "3",
        resource:""
      },
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
      handleCommand(e) {
      console.log(e);
    },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
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
      ]
    };
  },
  methods: {
    //搜索匹配
    change() {
      console.log(this.input);
    },
     tap() {
      console.log(111);
      this.value = "";
      this.options = this.data;
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
    },
    handleSizeChange(val) {
      console.log(`每页条` + val);
    },
    //checkbox选中
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    },
    handleCurrentChange(val) {
      console.log("当前页:" + val);
    },
    //行选中checkbox改变
    handleRowClick(row, column, event) {
      this.$refs.multipleTable.toggleRowSelection(row);
      //  console.log("this.selecTestContent", this.selectTestContent);
    },
    //改变表格颜色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else if (rowIndex % 2 != 0) {
        return "success-row";
      }
      return "";
    }
  }
};
</script>
<style lang="scss" scoped>
.first {
  border: 1px solid #66b1ff;
}
.third{
  margin-top:6px;
}
.second {
  margin-top: 20px;
  background: #e9e6e6;
   text-align: center;
  line-height: 40px;
  font-weight: 600;
  font-size: 20px;
  text-align: left;
  
   padding-top:10px;
  padding-left: 20px;
  padding-right: 20px;
  // padding-bottom:1px;
  box-sizing: border-box;
  height:60px;
    border-bottom: 1px solid #ffffff;
}
.title,
.secondTitle {
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  font-size: 20px;
   background: #e9e6e6;
}
.secondTitle {
  text-align: left;
  padding-top: 20px;
  // padding-bottom:10px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 10px solid #ffffff;
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
/deep/.el-input__inner {
  width: 280px !important;
}
/deep/.el-form-item__label {
  font-weight: 700;
  font-size: 20px;
}
.showSearch {
  display: flex;
}
.searchDetail {
  /deep/.el-input__inner {
    width: 100px !important;
  }
}
.searchDetail {
  /deep/ .el-input {
    width: 20% !important;
  }
}
/deep/.el-table .warning-row {
  background: oldlace;
}

/deep/.el-table .success-row {
  background: #f0f9eb;
}
.showRightObgect{
    margin-left:40px;
    margin-top:0px;
}
.showbutton{
    //  margin-bottom:-50px;
     height:40px;
     width:100px;
     padding:0!important;
    padding-left:20px;
    padding-right:20px;
     line-height:40px;
     box-sizing: border-box;
}

</style>

