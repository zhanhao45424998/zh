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
          <el-form-item label="起始时间：">
            <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="截止时间：">
            <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间"></el-date-picker>
          </el-form-item>
          <el-form-item label="工单状态：">
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
          <el-form-item label="所属医院:">
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
          <el-form-item label="科室名称:">
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
          <el-form-item label="查询方式：">
            <el-radio-group v-model="form.resource">
              <el-radio label="按物品查询"></el-radio>
              <el-radio label="按科室查询"></el-radio>
              <el-radio label="物品状态查询"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <div @click="search" class="search">查询</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="showTable">
      <el-table
        :header-cell-style="tableHeaderStyle"
        id="outtable"
        ref="multipleTable"
        :data="tableData"
        border
        tooltip-effect="dark"
        style="width: 100%;text-align:center"
        height="380"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
         :cell-style="cellStyle"
          @header-dragend="colChange"
      >
        <el-table-column label="序号" style="text-align:center" width="50" type="index"></el-table-column>
        <template>
          <el-table-column
            v-for="(col) in titleDetail"
            :key="col.label"
            :show-overflow-tooltip="true"
            :label="col.label"
            :property="col.property"
            style="text-align:center"
           :width="col.width"
          >
            <template slot-scope="scope">
              <div  style="text-align:center">{{scope.row[scope.column.property]}}</div>
            </template>
          </el-table-column>
        </template>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableHeaderStyle: {
        background: "skyblue",
        color: "#ffff",
        'text-align':'center'
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
          label: "操作",
          property: "address1"
        },
        {
          label: "审核状态",
          property: "address3"
        },
        {
          label: "耗材名称",
          property: "address1"
        },
        {
          label: "耗材规格",
          property: "address3"
        },
        {
          label: "耗材型号",
          property: "address1"
        },
        {
          label: "单价",
          property: "address3"
        },
        {
          label: "待审核数",
          property: "address1"
        },
        {
          label: "待采购数",
          property: "address3"
        },
        {
          label: "采购通过数",
          property: "address1"
        },
        {
          label: "审核未通过数",
          property: "address3"
        },
        {
          label: "单位",
          property: "address3"
        },
         {
          label: "月使用平均数",
          property: "address3"
        },
         {
          label: "上年度月使用平均数",
          property: "address3"
        },
         {
          label: "生产厂家",
          property: "address3"
        },
          {
          label: "是否加急",
          property: "address3"
        },
      ],
      labelPosition: "right",
      tableData: [
        {
          date: "2016-2",
          name: 777,
          address: "上沙江路 1518 弄1",
          address1: "上海市江路 1518 弄2",
          address2: "上1518 弄3",
          address3: "上沙江路 1518 弄4",
          address4: "上海市江路 1518 弄5",
          address5: "上1518 弄6",
          address6: "上沙江路 1518 弄7",
          address7: "上海市江路 1518 弄8",
          address8: "上1518 弄9",
          address9: "上沙江路 1518 弄10",
          address10: "上海市江路 1518 弄11",
          address11: "上1518 弄12"
        },
        {
          date: "",

          name: 766677,
          address: "上沙江路 1518 弄",
          address1: "上海市江路 1518 弄",
          address2: "上1518 弄",
          address3: "上沙江路 1518 弄",
          address4: "上海市江路 1518 弄",
          address5: "上1518 弄",
          address6: "上沙江路 1518 弄",
          address7: "上海市江路 1518 弄",
          address8: "上1518 弄",
          address9: "上沙江路 1518 弄",
          address10: "上海市江路 1518 弄",
          address11: "上1518 弄"
        },
        {
          date: "2016-2",
          name: 777,
          address: "上沙江路 1518 弄",
          address1: "上海市江路 1518 弄",
          address2: "上1518 弄",
          address3: "上沙江路 1518 弄",
          address4: "上海市江路 1518 弄",
          address5: "上1518 弄",
          address6: "上沙江路 1518 弄",
          address7: "上海市江路 1518 弄",
          address8: "上1518 弄",
          address9: "上沙江路 1518 弄",
          address10: "上海市江路 1518 弄",
          address11: "上1518 弄"
        }
      ],
      tableWidth: ""
    };
  },
  mounted() {
    this.tableWidth =
      (window.innerWidth) / this.titleDetail.length > 240
        ? (window.innerWidth) / this.titleDetail.length
        : 240;
         for (let i = 0; i < this.titleDetail; i++) {
      this.titleDetail.width = this.tableWidth;
    }
     this.getTableColWidth();
  },
  methods: {
    //改变表格颜色
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "warning-row";
      } else if (rowIndex % 2 != 0) {
        return "success-row";
      }
      return "";
    },
        /**
     * 获取浏览器缓存的列宽
     */
    getTableColWidth() {
      let tableWidth = localStorage.getItem("applyTableColWidths4");
      if (tableWidth) {
        for (let i = 0; i < this.titleDetail.length; i++) {
          this.titleDetail[i].width = JSON.parse(tableWidth)[i + 1];
        }
      }
    },
    /**
     * 拖动表头改变列宽
     */
    colChange(newWidth, oldWidth, column, event) {
      setTimeout(() => {
        let applyTableColWidths = [];
        let applyTable = document.getElementById("outtable");
        let applyTableColgroup = applyTable.getElementsByTagName("colgroup")[0];
        let applyTableCol = applyTableColgroup.getElementsByTagName("col");
        for (let i = 0; i < applyTableCol.length; i++) {
          applyTableColWidths.push(applyTableCol[i].width);
        }
        localStorage.setItem(
          "applyTableColWidths4",
          JSON.stringify(applyTableColWidths)
        );
      }, 100);
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (column.label === "采购时间") {
        return {
          // background: "yellow"
          'font-weight':700
        };
      } else {
        return {};
      }
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
  margin-top: 20px;
}
</style>


