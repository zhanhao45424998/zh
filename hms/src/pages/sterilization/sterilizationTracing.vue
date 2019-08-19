<template>
  <div class="total">
    <div class="first">
        <div class="firstHead">
          <i class="el-icon-search"></i> 搜索条件
        </div>
        <div class="firstHead-title" >
            <div class="firstInput">
              
              <div class="formTitleLine" ref="print" id="printMe">
                <el-form
                  :inline="true"
                  class="demo-form-inline"
                  :label-position="positionright"
                  label-width="250px"
                >
                  <el-form-item label="灭菌开始时间:" prop="name">
                    <el-date-picker
                      v-model="value1"
                      align="right"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions"
                    ></el-date-picker>
                  </el-form-item>
                  <el-form-item label="灭菌截止时间:" prop="name">
                    <el-date-picker
                      v-model="value2"
                      align="right"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions"
                    ></el-date-picker>
                  </el-form-item>
                  <el-form-item label="灭菌审核时间:" prop="name">
                    <el-date-picker
                      v-model="value3"
                      align="right"
                      type="date"
                      placeholder="选择日期"
                      :picker-options="pickerOptions"
                    ></el-date-picker>
                  </el-form-item>
                </el-form>
              </div>
            </div>

            <div class="firstButton">
              <i class="el-icon-search"></i> 查询
            </div>
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
            </div>
          </el-form-item>
        </el-form> 
</div>

  <el-form ref="form" :model="form">
          <el-form-item >
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
              <el-table-column label="配送企业" width="120">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{scope.row.num}}</span>
                </template>
              </el-table-column>
              <el-table-column label="验货单号" width="230" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="灭菌数量" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="灭菌开始时间" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="灭菌截止时间" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="灭菌设备" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="灭菌设备" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="灭菌程序" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="生物监测结果" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="address" width="220" label="灭菌锅次" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="address" width="220" label="灭菌结果" show-overflow-tooltip>
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
      value1: "",
      value2: "",
      value3: "",
      input: "",
      currentPage4: 1,
      form: {
        name: "3"
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
  
}
.firstHead-title{
  padding-top:20px;border: 1px solid #66b1ff;
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
  font-size: 18px;
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
  font-size: 18px;
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
  font-size: 22px;
}
.el-row {
  margin-bottom: 20px;
}

.firstButton {
   height: 46px;
    border-radius: 8px;
    border: 1px solid #ffffff;
    width: 118px;
    background: #66b1ff;
    text-align: center;
    line-height: 46px;
    font-size: 18px;
    font-weight: 700;
    margin: 20px auto;
    color: #f2f2f2;
    cursor: pointer;
}
/deep/.el-input__inner {
  width: 280px !important;
}
/deep/.el-form-item__label {
  font-weight: 700;
  font-size: 18px;
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
</style>

