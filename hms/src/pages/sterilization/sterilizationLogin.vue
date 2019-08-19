<template>
  <div>
    <el-steps :active="active" finish-status="success" simple>
      <el-step title="核对灭菌物品信息"></el-step>
      <el-step title="登记物品灭菌信息"></el-step>
    </el-steps>
    <!-- <el-tabs type="border-card"> -->
    <div v-if="active==0">
      <!-- <span slot="label"><i class="el-icon-date"></i> 核对灭菌物品信息</span> -->
      <div class="showLeft">
        <el-form ref="form" :model="form" label-width="280px">
          <el-form-item label="请扫描验货流水号:">
            <el-input v-model="form.name" placeholder="请扫描验货流水号"></el-input>
          </el-form-item>
          <el-form-item label="搜索:">
            <div class="showSearch">
              <el-input
                v-model="input"
                placeholder="请输入查询内容"
                @change="change"
                class="showDatailInput"
              ></el-input>
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
          </el-form-item>
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
              <el-table-column label="耗材名称" width="120">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{scope.row.num}}</span>
                </template>
              </el-table-column>
              <el-table-column label="耗材规格" width="230" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="耗材型号" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="送货数量" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="验货通过数量" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="单位" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="生产批号" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="失效效期" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="生产日期" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="address" width="220" label="注册证号" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="address" width="220" label="注册证效期" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="address" width="220" label="配送企业" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
               <el-table-column prop="address" width="220" label="生产厂家" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
               <el-table-column prop="address" width="220" label="是否需要灭菌" show-overflow-tooltip>
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
    <div v-if="active==1" class="right">
      <div class="formTitleLine" ref="print" id="printMe">
        <el-form
          :inline="true"
          :model="data"
          :rules="rules"
          class="demo-form-inline"
          :label-position="positionright"
          label-width="280px"
        >
          <el-form-item label="验货流水号:" prop="name">
            <div v-if="!show">{{data.name}}</div>
            <el-input v-model="data.name" placeholder="验货流水号" v-if="show" :value="data.name"></el-input>
          </el-form-item>
          <el-form-item label="配送企业:">
            <div v-if="!show">{{data.name}}</div>
            <el-input v-model="data.name" placeholder="配送企业" v-if="show" :value="data.name"></el-input>
          </el-form-item>
          <el-form-item label="灭菌人:" prop="name">
            <div v-if="!show">{{data.name}}</div>
            <el-input v-model="data.name" placeholder="灭菌人" v-if="show" :value="data.name"></el-input>
          </el-form-item>
          <el-form-item label="审核人:" prop="name">
            <div v-if="!show">{{data.name}}</div>
            <el-input v-model="data.name" placeholder="审核人" v-if="show" :value="data.name"></el-input>
          </el-form-item>
          <el-form-item label="灭菌开始时间:" prop="name">
            <el-date-picker
              v-model="value2"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="灭菌截止时间:" prop="name">
            <el-date-picker
              v-model="value3"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="灭菌审核时间:" prop="name">
            <el-date-picker
              v-model="value4"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="灭菌锅次:">
            <div v-if="!show">{{data.name}}</div>
            <el-input v-model="data.name" placeholder="灭菌锅次" v-if="show" :value="data.name"></el-input>
          </el-form-item>
          <el-form-item label="灭菌设备:" prop="name">
            <div v-if="!show">{{data.name}}</div>
            <el-input v-model="data.name" placeholder="灭菌设备" v-if="show" :value="data.name"></el-input>
          </el-form-item>
          <el-form-item label="灭菌程序:" prop="name">
            <div v-if="!show">{{data.name}}</div>
            <el-input v-model="data.name" placeholder="灭菌程序" v-if="show" :value="data.name"></el-input>
          </el-form-item>

          <el-form-item label="生物监测结果:" prop="name">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="打包数量:">
            <div v-if="!show">{{data.name}}</div>
            <el-input v-model="data.name" placeholder="打包数量" v-if="show" :value="data.name"></el-input>
          </el-form-item>
          <el-form-item label="灭菌结果:" prop="name">
            <el-select v-model="value1" placeholder="请选择">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="totalButton">
      <div class="showButton" @click="changeWay" v-if="active==0">下一步</div>
      <div class="showButton" @click="changeWay" v-if="active==1">上一步</div>
      <div class="showButton" @click="successFormt" v-if="active==1">确认灭菌</div>
    </div>
    <!-- <el-tab-pane label="登记物品灭菌信息">
    登记物品灭菌信息</el-tab-pane>-->

    <!-- </el-tabs> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        name: ""
      },
      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
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
      options: [
        {
          value: "1",
          label: "合格"
        },
        {
          value: "2",
          label: "不合格"
        },
        {
          value: "3",
          label: "无生物监测"
        }
      ],
      options1: [
        {
          value: "1",
          label: "合格"
        },
        {
          value: "2",
          label: "不合格"
        }
      ],
      show: true,
      positionright: "right",
      data: {
        name: "yyyggggg"
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" }
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change"
          }
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change"
          }
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change"
          }
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" }
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }]
      },
      currentPage4: 1,
      active: 0,
      input: "",
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
    //checkbox选中
    handleSelectionChange(val) {
      this.multipleSelection = val;
      console.log(val);
    },
    //行选中checkbox改变
    handleRowClick(row, column, event) {
      this.$refs.multipleTable.toggleRowSelection(row);
      //  console.log("this.selecTestContent", this.selectTestContent);
    },
    //搜索匹配
    change() {
      console.log(this.input);
    },
    changeWay() {
      if (this.active == 0) {
        this.active = 1;
      } else {
        this.active = 0;
      }
    },
    successFormt() {
       this.active = 2;
            alert("提交成功");
       setTimeout(() => {
        this.$router.go(0)
       }, 2000);
    
     let that=this;
      // this.$nextTick(function(){
      //   that.$router.go(0)
      // })
      
    },
    handleSizeChange(val) {
      console.log(`每页条` + val);
    },
    handleCurrentChange(val) {
      console.log("当前页:" + val);
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
<style lang='scss' scoped>
/deep/.el-tabs__item {
  width: 100%;
  height: 60px;
  font-size: 24px;
  padding: 0;
  text-align: center;
  line-height: 60px;
  font-weight: 700;
}
/deep/.el-form-item__label {
  font-weight: 700;
  font-size: 20px;
}
.showLeft {
  font-weight: 700;
  font-size: 20px;
}
.showSearch {
  display: flex;
}
.showDatailInput {
  margin-right: 40px;
}
.showButton {
  width: 100px;
  height: 40px;
  text-align: center;
  border-radius: 4px;
  line-height: 40px;
  background: #409eff;
  margin: 0 auto;
  margin-top: 20px;
  color: whitesmoke;
  font-weight: 500;
  font-size: 20px;
}
.totalButton {
  display: flex;
  padding-left: 100px;
  padding-right: 200px;
  justify-content: center;
}
.right {
  margin-top: 20px;
  /deep/.el-form-item {
    width: 48%;
    /deep/.el-input__inner {
      //  width:200%!important;
      width: 400px !important;
    }
  }
}

/deep/table {
  font-size: 20px;
}

/deep/.el-checkbox__inner {
  width: 24px !important;
  height: 24px !important;
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
/deep/.el-form-item {
  width: 100%;
}
</style>


