<template>
  <div class="total">
    <div class="first">
      <div class="firstHead">
        <i class="el-icon-search"></i> 搜索条件
      </div>
      <div class="firstInput">
        <el-form
          ref="form"
          :model="form"
          :inline="true"
          :label-position="labelPosition"
          label-width="160px"
        >
          <el-form-item label="选择医院:">
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
          <el-form-item label="起始时间：">
            <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="截止时间：">
            <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="是否暂估:">
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
          <el-form-item label="是否财务数据:">
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
          <el-form-item label="入库方式:">
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
          <el-form-item label="查询方式">
            <el-radio-group v-model="form.resource">
              <el-radio label="按配送商查询"></el-radio>
              <el-radio label="按物品查询"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <div @click="search" class="search">查询</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="showtableDetail">
    <div class="showTable">
      <el-table
        :header-cell-style="tableHeaderStyle"
        id="outtable"
        ref="multipleTable"
        :data="tableData"
        highlight-current-row
        border
        show-summary
         :summary-method="getSummaries"
        tooltip-effect="dark"
        style="width: 100%;text-align:center"
       
         @current-change="handleCurrentChange"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
      >
        <el-table-column label="序号" style="text-align:center" width="50" type="index"></el-table-column>
        <template>
          <el-table-column
            v-for="(col) in titleDetail"
            :key="col.label"
            :show-overflow-tooltip="true"
            :label="col.label"
            :property="col.property"
            style="width: 100%;text-align:center"
            :width="tableWidth"
          >
            <template slot-scope="scope">
              <div>{{scope.row[scope.column.property]}}</div>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    <div class="showTable" v-if="tableData2.length>0">
      <el-table
        :header-cell-style="tableHeaderStyle"
        id="outtable"
        ref="multipleTable"
        :data="tableData2"
        border
        show-summary
         :summary-method="getSummaries"
        tooltip-effect="dark"
        style="width: 100%;text-align:center"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
      >
        <el-table-column label="序号" style="text-align:center" width="50" type="index"></el-table-column>
        <template>
          <el-table-column
            v-for="(col) in titleDetails"
            :key="col.label"
            :show-overflow-tooltip="true"
            :label="col.label"
            :property="col.property"
            style="text-align:center"
            :width="tableWidth"
          >
            <template slot-scope="scope">
              <div>{{scope.row[scope.column.property]}}</div>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableHeaderStyle: {
        background: "skyblue",
        color: "#ffff"
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
      form: {
        name: "666",
        resource: "6666"
      },
      value: "",
      value1: "",
      value2: "",
      titleDetail: [
        {
          label: "耗材名称",
          property: "address1"
        },
        {
          label: "耗材别名",
          property: "address2"
        },
        {
          label: "耗材规格",
          property: "address3"
        },
        {
          label: "耗材型号",
          property: "address4"
        },
        {
          label: "生产厂家",
          property: "address5"
        }
      ],
       titleDetails: [
        {
          label: "耗材名称1",
          property: "address1"
        },
        {
          label: "耗材别名1",
          property: "address2"
        },
        {
          label: "耗材规格1",
          property: "address3"
        },
        {
          label: "耗材型号1",
          property: "address4"
        },
        {
          label: "生产厂家1",
          property: "address5"
        }
      ],
      labelPosition: "right",
      tableData: [
        {
          date: "2016-2",
          name: 777,
          address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "",

          name: 766677,
            address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },{
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        }
      ],
      tableData2: [
       
        

      ],
      tableWidth: "",
      currentRow:""
    };
  },
  mounted() {
    this.tableWidth =
      (window.innerWidth) /(2* this.titleDetail.length )> 240
        ? (window.innerWidth) /(2* this.titleDetail.length)
        : 240;
  },
  methods: {
    //单选
    handleCurrentChange(val){
      console.log(11111)
         this.currentRow = val;
         console.log(val)
         this.tableData2=[]
         this.$nextTick(()=>{
this.tableData2=[
        {
          date: "2016-2",
          name: 777,
          address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "",

          name: 766677,
            address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },
        {
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        },{
          date: "2016-2",
          name: 777,
           address: 1,
          address1: 33,
          address2: 44,
          address3: 55,
          address4: 22,
          address5:33,
          address6: 44,
          address7: 11,
          address8: 13,
          address9: 14,
          address10: 15,
          address11: 16
        }
      ]
         })
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
     getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      },
    check(scope) {
      console.log(scope);
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
    search() {
      console.log(this.form);
    },
    tap() {
      console.log(111);
      this.value = "";
      // this.options = this.data;
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
<style lang="scss" scoped>
.first {
  border: 1px solid #66b1ff;
  border-radius: 4px 4px 0 0;
}
.firstInput {
  padding-left: 20px;
  padding-right: 20px;
}
.firstHead {
  padding-left: 20px;
  height: 50px;
  background: #66b1ff;
  color: #f2f2f2;
  font-weight: 700;
  line-height: 50px;
  border-radius: 4px 4px 0 0;
  font-size: 20px;
  margin-bottom: 20px;
}
.search {
  cursor: pointer;
  width: 100px;
  background: #66b1ff;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  border-radius: 4px;
  margin-left: 200px;
}
.search:linked {
  color: rgb(173, 155, 155);
}
.search:visited {
  color: yellowgreen;
}
.search:hover {
  color: whitesmoke;
}
.search:active {
  color: rgb(238, 130, 130);
}
.showTable {
width:50%;
height:350px;
overflow: auto;
 box-sizing: border-box;
}
.showtableDetail{
    display:flex;
    margin-top: 20px;
    width:100%;
    justify-content: flex-start;
    box-sizing: border-box;
    flex-wrap: wrap;
}
/deep/.el-form-item{
// width:35%;
}
</style>


