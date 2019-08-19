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
          <el-form-item label="是否寄存:">
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
          <el-form-item label="是否财务数据：">
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
          <el-form-item label="选择库房：">
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
          <el-form-item label="一级类别:">
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
            <div @click="search" class="search">查询</div>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="showTable">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="一级类别" fixed width="180"></el-table-column>
        <el-table-column prop="name" fixed label="二级类别" width="180"></el-table-column>
        <el-table-column prop="address" fixed label="三级类别"></el-table-column>
        <el-table-column prop="address" fixed label="四级类别"></el-table-column>
        <el-table-column prop="address" label="期初"></el-table-column>
        <el-table-column prop="address" label="三级类别"></el-table-column>
        <el-table-column prop="address" label="采购入库"></el-table-column>
        <el-table-column prop="address" label="分院移入"></el-table-column>
        <el-table-column prop="address" label="科研项目"></el-table-column>

        <el-table-column prop="address" label="财政补助"></el-table-column>
        <el-table-column prop="address" label="暂估入库"></el-table-column>
        <el-table-column prop="address" label="冲上月暂估入库"></el-table-column>
        <el-table-column prop="address" label="捐赠"></el-table-column>
        <el-table-column prop="address" label="盘盈"></el-table-column>
        <el-table-column prop="address" label="出库"></el-table-column>
        <el-table-column prop="address" label="分院出库"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
      labelPosition: "right",
      tableData: [
        {
          date: "2016-2",
          name: "一级类别",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "",
          name: "二级类别",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "三级类别",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
       tableWidth:''
    };
  },
   mounted(){
       this.tableWidth =
      (window.innerWidth - 410) / this.titleDetail.length > 240
        ? (window.innerWidth - 410) / this.titleDetail.length
        : 240;
  },
  methods: {
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


