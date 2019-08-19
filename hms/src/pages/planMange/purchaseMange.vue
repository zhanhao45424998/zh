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
          <el-form-item label="订单状态：">
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
          <el-form-item>
            <div @click="search" class="search" >查询</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="showTable" id="form1">
      <el-table
        :header-cell-style="tableHeaderStyle"
        id="outtable"
        ref="multipleTable"
        :data="tableData"
        :cell-style="cellStyle"
        @header-dragend="colChange"
        border
        tooltip-effect="dark"
        style="width: 100%;text-align:center"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
        @row-click="handleRowClick"
      >
        <el-table-column label="全选" style="text-align:center" width="50" type="selection"></el-table-column>
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
              <div style="text-align:center">{{scope.row[scope.column.property]}}</div>
            </template>
          </el-table-column>
        </template>
      </el-table>
      <div id="footer"></div>
    </div>
  </div>
</template>
<script>
import { getLodop } from "../../utils/lodop";
export default {
  data() {
    return {
      tableHeaderStyle: {
        background: "skyblue",
        color: "#ffff",
        "text-align": "center"
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
          label: "采购单号1",
          property: "name"
        },
         {
          label: "采购单号2",
          property: "name"
        },
         {
          label: "采购单号3",
          property: "name"
        },
         {
          label: "采购单号4",
          property: "name"
        },
         {
          label: "采购单号6",
          property: "name"
        },
         {
          label: "采购单号5",
          property: "name"
        },
         {
          label: "采购单号7",
          property: "name"
        }, {
          label: "采购单号8",
          property: "name"
        },
         {
          label: "采购单号9",
          property: "name"
        },
         {
          label: "采购单号10",
          property: "name"
        },
        {
          label: "采购时间",
          property: "address"
        },
        {
          label: "创建人",
          property: "address1"
        },
        {
          label: "是否加急",
          property: "address1"
        },
        {
          label: "总价",
          property: "address2"
        },
        {
          label: "状态",
          property: "address2"
        },
        {
          label: "操作",
          property: "address3"
        }
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
        }
      ],
      tableWidth: ""
    };
  },
  mounted() {
    this.tableWidth =
      window.innerWidth / this.titleDetail.length > 240
        ? window.innerWidth / this.titleDetail.length
        : 240;

    for (let i = 0; i < this.titleDetail; i++) {
      this.titleDetail.width = this.tableWidth;
    }
    this.getTableColWidth();
    for (let i = 0; i < 100; i++) {
      this.tableData.push({
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
      });
    }
  },
  methods: {
    /**
     * 获取浏览器缓存的列宽
     */
    getTableColWidth() {
      let tableWidth = localStorage.getItem("applyTableColWidths1");
      if (tableWidth) {
        for (let i = 0; i < this.titleDetail.length; i++) {
          this.titleDetail[i].width = JSON.parse(tableWidth)[i + 2];
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
          "applyTableColWidths1",
          JSON.stringify(applyTableColWidths)
        );
      }, 100);
    },
    cellStyle({ row, column, rowIndex, columnIndex }) {
      if (column.label === "采购时间") {
        return {
          // background: "yellow"
          "font-weight": 700
        };
      } else {
        return {};
      }
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
      let LODOP = getLodop();
      LODOP.PRINT_INIT("");
      LODOP.SET_PRINT_MODE("FULL_WIDTH_FOR_OVERFLOW", true);
      LODOP.SET_PRINT_PAGESIZE(2, 0, 0,"A3");
      let hei = document.getElementById("form1").getBoundingClientRect().height;
      if(hei){
        hei=hei*2
      }
      console.log(hei);
      LODOP.ADD_PRINT_HTM(
        10,
        20,
        700,
        "100%",
        document.getElementById("form1").innerHTML
      );
      
      // LODOP.NEWPAGEA ();
      LODOP.ADD_PRINT_TEXT((hei / 100) * 41, "20%", 200, 100, "打印人：");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 18);
      // LODOP.SET_PRINT_STYLEA(0, "TableHeightScope", 3);
      //  LODOP.SET_PRINT_STYLEA(0,"PageUnIndex","Last");
      
		// LODOP.SET_PRINT_STYLEA(0,"ItemType",1);
      LODOP.ADD_PRINT_TEXT((hei / 100) * 41, "80%", 200, 100, "审批人：");
      LODOP.SET_PRINT_STYLEA(0, "FontSize", 18);
    //   LODOP.SET_PRINT_STYLEA(0, "TableHeightScope", 3);
    //   LODOP.SET_PRINT_STYLEA(0,"PageUnIndex","Last");
      
		// LODOP.SET_PRINT_STYLEA(0,"ItemType",1);
      // LODOP.SET_PRINT_STYLEA(0,"FontColor",'red');
      LODOP.PREVIEW();
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
/deep/.el-form-item{
width:48%;
}
</style>


