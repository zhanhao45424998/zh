<template>
  <div>
    <!-- <div>{{data.name}}</div>
        <div>{{data.num}}</div>
        <div>{{data.date}}</div>
    <div>{{data.address}}</div>-->
    <div class="showHead">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title">
            <div class="firstTitle">
              <el-row>
                <el-col :span="15">
                  <i class="header-icon el-icon-info"></i>产品信息名称
                </el-col>
                <el-col :span="3">
                  <div class="buttonchoose">返回上级</div>
                </el-col>
                <el-col :span="3">
                  <div class="buttonchoose" @click="edit">开启编辑</div>
                </el-col>
                <el-col :span="3">
                  <el-dropdown split-button type="primary" @command="handleCommand">
                    更多操作
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="1">视频教程</el-dropdown-item>
                      <el-dropdown-item command="2">导入平台数据</el-dropdown-item>
                      <el-dropdown-item command="3">导入Excel模板数据</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </div>
          </template>
          <div class="formTitleLine">
            <el-form
              :inline="true"
              :model="data"
              :rules="rules"
              class="demo-form-inline"
              :label-position="positionright"
            >
              <el-form-item label="库房:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="库房" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="子库房:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="库房" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="产品类型:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产品类型" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="配送企业:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="库房" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="产品小类:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产品小类" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="68分类:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="68分类" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="产品名称:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产品名称" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="别名:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="别名" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="生产企业:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="生产企业" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="上级代理商:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="上级代理商" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="注册证号:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="注册证号" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="售后机构:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="售后机构" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="财务类别:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="财务类别" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="其他卫生材料非单独计价收费:">
                <div v-if="!show">{{data.name}}</div>
                <el-input
                  v-model="data.name"
                  placeholder="其他卫生材料非单独计价收费"
                  v-if="show"
                  :value="data.name"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="反馈 Feedback" name="2">
           <template slot="title">
            <div class="firstTitle">
              <el-row>
                <el-col :span="15">
                  <i class="header-icon el-icon-info"></i>产品扩展信息
                </el-col>
              </el-row>
            </div>
          </template>
          <div class="formTitleLine">
            <el-form
              :inline="true"
              :model="data"
              :rules="rules"
              class="demo-form-inline"
              :label-position="positionright"
            >
              <el-form-item label="产地名称:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产地名称" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="存储条件:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="存储条件" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="是否有源:" >
                <div v-if="!show">{{data.name}}</div>
                 <el-select v-model="data.name"  v-if="show" placeholder="请选择是否有源">
                    <el-option label="是" value="success"></el-option>
                    <el-option label="否" value="wrong"></el-option>
                    </el-select>
              </el-form-item>
              <el-form-item label="运输条件:" >
                <div v-if="!show">{{data.name}}</div>
               <el-select v-model="data.name" placeholder="运输条件" v-if="show">
                    <el-option label="平铺" value="plat1"></el-option>
                    <el-option label="悬挂" value="plugup"></el-option>
                     <el-option label="限重" value="hiddeweight"></el-option>
                    <el-option label="限高" value="hiddenheight"></el-option>
                     <el-option label="冷链" value="hiddenCode"></el-option>
                    <el-option label="其他" value="wrong2"></el-option>
                    </el-select>
              </el-form-item>
              <el-form-item label="产品小类:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产品小类" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="68分类:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="68分类" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="产品名称:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产品名称" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="别名:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="别名" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="生产企业:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="生产企业" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="上级代理商:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="上级代理商" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="注册证号:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="注册证号" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="售后机构:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="售后机构" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="财务类别:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="财务类别" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="其他卫生材料非单独计价收费:">
                <div v-if="!show">{{data.name}}</div>
                <el-input
                  v-model="data.name"
                  placeholder="其他卫生材料非单独计价收费"
                  v-if="show"
                  :value="data.name"
                ></el-input>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="效率 Efficiency" name="3">
          <template slot="title">
            <div class="firstTitle">
              <el-row>
                <el-col :span="15">
                  <i class="header-icon el-icon-info"></i>产品信息名称
                </el-col>
                <el-col :span="3">
                  <div class="buttonchoose">返回上级</div>
                </el-col>
                <el-col :span="3">
                  <div class="buttonchoose" @click="edit">开启编辑</div>
                </el-col>
                <el-col :span="3">
                  <el-dropdown split-button type="primary" @command="handleCommand">
                    更多操作
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="1">视频教程</el-dropdown-item>
                      <el-dropdown-item command="2">导入平台数据</el-dropdown-item>
                      <el-dropdown-item command="3">导入Excel模板数据</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </el-col>
              </el-row>
            </div>
          </template>
          <div class="formTitleLine"  ref="print" id="printMe">
            <el-form
              :inline="true"
              :model="data"
              :rules="rules"
              class="demo-form-inline"
              :label-position="positionright"
            >
              <el-form-item label="库房:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="库房" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="子库房:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="库房" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="产品类型:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产品类型" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="配送企业:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="库房" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="产品小类:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产品小类" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="68分类:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="68分类" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="产品名称:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="产品名称" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="别名:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="别名" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="生产企业:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="生产企业" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="上级代理商:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="上级代理商" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="注册证号:">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="注册证号" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="售后机构:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="售后机构" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="财务类别:" prop="name">
                <div v-if="!show">{{data.name}}</div>
                <el-input v-model="data.name" placeholder="财务类别" v-if="show" :value="data.name"></el-input>
              </el-form-item>
              <el-form-item label="其他卫生材料非单独计价收费:">
                <div v-if="!show">{{data.name}}</div>
                <el-input
                  v-model="data.name"
                  placeholder="其他卫生材料非单独计价收费"
                  v-if="show"
                  :value="data.name"
                ></el-input>
               
              </el-form-item>
              <el-form-item label="444">
                 <textarea name="EE" id="22" cols="30" rows="10" ></textarea>
              </el-form-item>
            </el-form>
          </div>
        </el-collapse-item>
        <el-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
     <div  v-print="'#printMe'" class="printdetail no-print"> 打印</div>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "",
      activeNames: ["1"],
      show: false,
      positionright: "right",
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
      }
    };
  },
  created() {
    // console.log(3333)
    // console.log(this.$route.query.detail)
    this.data = JSON.parse(this.$route.query.detail);
    console.log("666");
    console.log(this.data);
  },
  methods: {
    handleChange(val) {
      console.log(val);
    },
    handleCommand(e) {
      console.log(e);
    },
    edit() {
      this.show = true;
    },
    printdemo(){
      alert(this.$Print)
      this.$Print(this.$refs.print) // 使用
    }
  }
};
</script>
<style scoped lang="scss">
.title {
  width: 100%;
}

.firstTitle {
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 20px;
  font-weight: 700;
  // margin-bottom:10px;
  align-items: flex-start;
}
.buttonchoose {
  width: 100px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: 4px;
  background: #66b1ff;
  border-radius: 4px;
  color: whitesmoke;
}
.formTitleLine {
  border-top: 1px solid #ebeef5;
  // margin-bottom:20px;
  padding-top: 20px;
}
.printdetail{
  width:100px;
  background:#66b1ff;
  height:40px;
  margin:0 auto;
  font-size:24px;
  line-height:40px;
  text-align:center;
  border-radius:4px;
}

/deep/.el-row {
  width: 100%;
}
/deep/.el-form-item__label {
  width: 50%;
  font-size: 20px;
  font-weight: 700;
  box-sizing: border-box;
  height: 100%;
  line-height: 62px;
}
/deep/.el-form-item__content {
  width: 50%;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  height: 100%;
  line-height: 62px;
  box-sizing: border-box;
}
/deep/.el-form-item {
  width: 45%;
  margin-bottom: 0;
  box-sizing: border-box;
}
/deep/.el-form {
  /* line-height:62px; */
}
</style>
