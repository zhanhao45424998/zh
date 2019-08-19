<template>
  <div class="total">
    <div class="first">
      <div class="firstHead">
        <i class="el-icon-search"></i> 搜索条件
      </div>
      <div class="firstInput">
        <el-form ref="form" :model="form" label-width="280px" :rules="rules" :inline='true'>
          <el-form-item label="退库科室:" prop='name'>
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
          <el-form-item label="查验库房:" prop='name'>
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
          <el-form-item label="查验人员:" prop='name'>
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
          <el-form-item label="配送企业:">
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
          <el-form-item label="生产厂家:">
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
          <el-form-item label="耗材名称:">
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
          <el-form-item label="耗材规格:">
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
          <el-form-item label="耗材型号:">
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
          <el-form-item label="数量:">
            <el-input v-model="form.name" placeholder="请输入数量"></el-input>
          </el-form-item>
           <el-form-item label="供货价格:">
            <el-input v-model="form.name" placeholder="请输入供货价格"></el-input>
          </el-form-item>
           <el-form-item label="短效产品:">
            <el-input v-model="form.name" placeholder="请输入短效产品"></el-input>
          </el-form-item>
           <el-form-item label="注册证号:">
            <el-input v-model="form.name" placeholder="请输入注册证号"></el-input>
          </el-form-item>
           <el-form-item label="生产日期:">
            <el-input v-model="form.name" placeholder="请输入生产日期"></el-input>
          </el-form-item>
           <el-form-item label="生产批号:">
            <el-input v-model="form.name" placeholder="请输入生产批号"></el-input>
          </el-form-item>
           <el-form-item label="失效日期:">
            <el-input v-model="form.name" placeholder="请输入失效日期"></el-input>
          </el-form-item>
           <el-form-item label="灭菌批号:">
            <el-input v-model="form.name" placeholder="请输入灭菌批号"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="firstButton">
        <i class="el-icon-search"></i> 查询
      </div>
    </div>
    <div class="second">
      <div class="secondTitle">
        <el-row>
          <el-col :span="3">验货材料明细</el-col>
          <el-col :span="2">总价</el-col>
          <el-col :span="2">总数</el-col>
          <el-col :span="11">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[10, 25, 50, 100,1000]"
              :page-size="10"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            ></el-pagination>
          </el-col>
          <el-col :span="3">
            <el-button type="primary" icon="el-icon-s-order">保存数据</el-button>
          </el-col>
          <el-col :span="2.5">
            <el-button type="primary" icon="el-icon-close">移除数据</el-button>
          </el-col>
        </el-row>
      </div>
      <div>
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          height="380"
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
          <el-table-column label="是否寄售" width="120">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="耗材名称" width="230" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  label="耗材规格" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  label="耗材型号" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column label="待配送数量" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  label="送货数量" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  label="验货通过数量" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  label="单位" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  label="单价" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  width="220" label="金额" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column width="220" label="交易码" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  width="220" label="失效效期" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column width="220" label="生产日期" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column width="220" label="灭菌批号" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  width="220" label="产品唯一码" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  width="220" label="注册证号" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column width="220" label="注册证效期" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column width="220" label="配送企业" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column  width="220" label="生产厂家" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import API from "@/api/login";
export default {
  data() {
    return {
      currentPage4: 4,
      form: {
        name: ""
      },
      rules: {
        name: [{ required: true, message: "必选", trigger: "blur" }],
        region: [{ required: true, message: "当前库房", trigger: "change" }]
      },
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
      value: "",
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
  methods: {
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
    editData(index, data) {
      this.$router.push({
        path: "jumpDetail",
        query: {
          detail: JSON.stringify(data)
        }
      });
    },
    handleSizeChange(val) {
      console.log(`每页条` + val);
    },
    handleCurrentChange(val) {
      console.log("当前页:" + val);
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
      console.log(val);
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
.total {
  // width:98%;
}
.sendRequst {
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
  display: flex;
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

.firstInput {
  /deep/.el-input__inner {
    border: 1px solid #6d6969 !important;
    /* color: #0885ec; */
    font-weight: 600;
    width: 400px;
  }
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
  padding-top: 6px;
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
</style>




