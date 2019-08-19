<template>
  <div class="total">
    <div class="first">
         <Head title="耗材查询"></Head>  
            <HeadSearch>       
                    <template v-slot:mains>
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
                                  <div class="title">选择子库房:</div>
                                </el-col>

                                <el-col :span="16">
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
                                </el-col>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="8">
                                <el-col :span="8">
                                  <div class="title">耗材名称:</div>
                                </el-col>

                                <el-col :span="16">
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
                                </el-col>
                              </el-col>
                              <el-col :span="8">
                                <el-col :span="8">
                                  <div class="title">配送企业:</div>
                                </el-col>

                                <el-col :span="16">
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
                                </el-col>
                              </el-col>
                              <el-col :span="8">
                                <el-col :span="8">
                                  <div class="title">生产企业:</div>
                                </el-col>

                                <el-col :span="16">
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
                                </el-col>
                              </el-col>
                            </el-row>
                        </div>                
                    </template> 
                    <template v-slot:anniu>
                        <el-button type="primary"  round><i class="el-icon-search"></i><span>查询</span></el-button>        
                    </template>                
            </HeadSearch>
      <!-- <div class="firstHead">
        <i class="el-icon-search"></i><span>  搜索条件</span>  
      </div>
      <div class="first-content">
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
                <div class="title">选择子库房:</div>
              </el-col>

              <el-col :span="16">
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
              </el-col>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-col :span="8">
                <div class="title">耗材名称:</div>
              </el-col>

              <el-col :span="16">
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
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8">
                <div class="title">配送企业:</div>
              </el-col>

              <el-col :span="16">
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
              </el-col>
            </el-col>
            <el-col :span="8">
              <el-col :span="8">
                <div class="title">生产企业:</div>
              </el-col>

              <el-col :span="16">
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
              </el-col>
            </el-col>
          </el-row>
        </div>
        <div class="firstButton">
           <el-button type="primary" style="background:#005390;border:1px solid #005390" round><i class="el-icon-search"></i><span>查询</span></el-button>        
        </div>   
      </div> -->
    </div>
    <div class="second">
       <Heads title="医院列表">      
                <div class="">
                    <div> 
                      <el-button type="primary"  @click="addlist"><i class="el-icon-plus"></i> 新增产品</el-button>
                      <el-button type="success"  @click="exportExcel">导出模板</el-button>

                    </div>
                </div>
        </Heads>
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
          <el-table-column type="selection" width="55"  fixed></el-table-column>
          <el-table-column label="序号" width="120" fixed>
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="状态" width="120">
            <template slot-scope="scope">
              <i class="el-icon-time"></i>
              <span style="margin-left: 10px">{{scope.row.num}}</span>
            </template>
          </el-table-column>
          <el-table-column label="产品名称/注册证" width="230" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="name" label="产品名称/注册证" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
           <el-table-column prop="name" label="厂家/上级代理" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
           <el-table-column prop="name" label="规格数量" width="120" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
           <el-table-column prop="name" label="授权信息" width="120" show-overflow-tooltip>
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
           <el-table-column prop="name" label="厂家/上级代理" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
           <el-table-column prop="name" label="厂家/上级代理" width="220" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="address" width="220" label="规格数量" show-overflow-tooltip>
            <template slot-scope="scope">
              <div>{{ scope.row.date }}</div>
              <div>{{ scope.row.date }}</div>
            </template>
          </el-table-column>
          <el-table-column prop="address" width="220" label="授权信息" show-overflow-tooltip>
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
          <el-table-column
            prop="address"
            fixed="right"
            label="操作"
            width="120"
            show-overflow-tooltip
            center
          >
          <template slot-scope="scope" >
            <el-button type="primary" size="mini" @click="editData(scope.$index, scope.row)">编辑</el-button>
         </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script>
import API from "@/api/login";
import Heads from '@/components/Basic/head2'
import HeadSearch from '@/components/Basic/headsearch'
export default {
  components:{HeadSearch,Heads},
  data() {
    return {
      currentPage4: 4,
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
    editData(index,data){
        this.$router.push({
          path:'jumpDetail',
          query: {
           detail:JSON.stringify(data)
          }
        })
    },

    tap() {
      console.log(111);
      this.value = "";
      this.options = this.data;
    },
    addlist(){

    },
    exportExcel() {
        var xlsxParam = { raw: true };//转换成excel时，使用原始的格式
        var wb = XLSX.utils.table_to_book(document.querySelector("#outTable"),xlsxParam);
        var wbout = XLSX.write(wb, {
            bookType: "xlsx",
            bookSST: true,
            type: "array"
        });
        try {
            FileSaver.saveAs(
            new Blob([wbout], { type: "application/octet-stream;charset=utf-8" }),
            "sheetjs.xlsx"
            );
        } catch (e) {
            if (typeof console !== "undefined") console.log(e, wbout);
        }
        return wbout;
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
.first-content{
  padding-top: 20px;
  border:1px solid  #005390;
}
.total{
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
  // border: 1px solid #66b1ff;
}
.firstInput {
  padding-left: 20px;
  padding-right: 20px;
}
.firstHead {
  padding-left: 20px;
  height: 60px;
  // background: #005390;
  color: #f2f2f2;
  font-weight: 700;
  line-height: 60px;
  border-radius: 4px 4px 0 0;
  font-size: 20px;

}
.title,
.secondTitle {
  text-align: right;
  line-height: 40px;
  padding-right: 10%;
  font-weight: 600;
  font-size: 16px;
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
    margin: 20px auto 0px auto;
    text-align: center;
    padding: 20px 0px;
    background:#dfdfdf;
}
.second {
  margin-top: 30px;
  // background: #e9e6e6;
}
.chooseInputnum {
  width: 100px;
  height: 30px;
  border-radius: 4px;
  text-align: center;
}
// .editButton {
//   width: 80px;
//   height: 30px;
//   line-height: 30px;
//   background: #66b1ff;
//   border-radius: 4px;
//   color: whitesmoke;
// }

/deep/.el-input__inner {
  // border: 1px solid #6d6969 !important;
  /* color: #0885ec; */
  // font-weight: 600;
}
/deep/.el-select {
  display: block !important;
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