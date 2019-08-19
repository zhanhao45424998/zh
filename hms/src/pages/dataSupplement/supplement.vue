<template>
  <div>
    <el-steps :active="active" finish-status="success" simple>
      <el-step title="请填写基本信息"></el-step>
      <el-step title="请填写批号信息"></el-step>
    </el-steps>
    <div v-if="active==0">
      <div class="showLeft">
        <el-form ref="form" :model="form" label-width="280px">
          <el-form-item label="请选择配送企业:">
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
          <el-form-item label="请输入住院(门诊)号:">
            <el-input v-model="form.name" placeholder="请输入住院(门诊)号"></el-input>
          </el-form-item>
        </el-form>
      </div>
       </div>
      <div v-if="active==1" class="showLeft second">
        <el-form ref="form" :model="form" label-width="280px">
          <el-form-item label="搜索:">
            <div class="showSearch">
              <el-input
                v-model="input"
                placeholder="请输入查询内容"
                @change="change"
                class="showDatailInput"
              ></el-input>
              <div class="showDetail">          
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
              <el-table-column label="耗材条码" width="120" fixed>
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
              <el-table-column label="规格/型号" width="230" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
            
              <el-table-column prop="name" label="数量" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
              <el-table-column prop="name" label="批号" width="220" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
            
              <el-table-column prop="name" label="失效日期" width="220" show-overflow-tooltip>
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
         
         
              <el-table-column prop="address" width="220" label="灭菌批号" show-overflow-tooltip>
                <template slot-scope="scope">
                  <div>{{ scope.row.date }}</div>
                  <div>{{ scope.row.date }}</div>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-form>
      </div>

      <div class="totalButton">
        <div class="showButton" @click="changeWay" v-if="active==0">下一步</div>
        <div class="showButton" @click="changeWay" v-if="active==1">上一步</div>
        <div class="showButton" @click="successFormt" v-if="active==1">确认提交</div>
      </div>
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
      show: true,
      positionright: "right",
      data: {
        name: "yyyggggg"
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
      ],data:[
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
      alert("提交成功");
      this.active = 2;
       setTimeout(() => {
        this.$router.go(0)
       }, 2000);
    
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
/deep/.el-select {
    display:block;
//  width: 500px;
}
/deep/.el-form-item__label {
  font-weight: 700;
  font-size: 20px;
}
.showLeft {
  font-weight: 700;
  font-size: 20px;
  margin-top:20px;
}

.showSearch {
  display: flex;
  
}
.showDetail{
/deep/.el-input__inner{
      width:100px!important;
  }
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
.second {
  margin-top: 20px;
  /deep/.el-form-item {
    
    /deep/.el-input__inner {
      //  width:200%!important;
      width: 200px !important;
    }
    /deep/.el-input{
          width: 200px !important;
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


