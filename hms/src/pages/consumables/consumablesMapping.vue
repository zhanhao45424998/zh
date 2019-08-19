<template>
  <div class="total">
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
      tableData2: [],
      tableWidth: "",
      currentRow:""
    };
  },
  mounted() {
    this.tableWidth = (window.innerWidth) /(2* this.titleDetail.length )> 240
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

    //计算总价
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

  }
};
</script>
<style lang="scss" scoped>

.showTable {
 width:49%;
 box-sizing: border-box;
}
.showtableDetail{
    display:flex;
    margin-top: 20px;
    width:100%;
    justify-content: space-between;
    box-sizing: border-box;
    flex-wrap: wrap;
}
</style>


