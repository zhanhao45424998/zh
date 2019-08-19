<template>
  <div class="hello">
        <div class="logo"> 
            <div class="title">
                <img :src="src" alt="">
                   <el-dropdown trigger="click">
                      <span class="el-dropdown-link ">
                        <span>David Williams</span> <br>系统管理员<i class="el-icon-caret-bottom el-icon--right"></i>
                      </span>
                      <el-dropdown-menu slot="dropdown" style="width:200px">
                        <el-dropdown-item @click.native="quer">切换库房</el-dropdown-item>
                        <el-dropdown-item @click.native="pass">密码设置</el-dropdown-item>
                        <el-dropdown-item @click.native="btn">安全退出</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
            </div>
         </div>
   <div class="menu">
    <el-scrollbar style="height:100%">
    <el-container>
        <el-row class="tac">   
            <el-col :span="12" width="240px">
                <el-menu
                default-active="this.$route.path"
                class="el-menu-vertical-demo"   
                router
                >
                <div  v-for="(item,i) in list" :key="i" class="item-list">
                   <div v-if="item.children">
                      <el-submenu :index="i+''">
                            <template slot="title">
                            <i class=iconfont :class="item.icon" :style="{color:item.color}" style="margin-right:20px"></i>
                            <span >{{item.meta.msg}}</span>
                            </template>
                            <div v-for="(ites,i) in item.children" :key="i">
                               <div v-if="!ites.hidden">
                                   <el-menu-item :index="item.path+'/'+ites.path"  style="padding-left:60px;">{{ites.meta.msg}}</el-menu-item>
                               </div>
                            </div>                   
                        </el-submenu>
                    </div>  
                    <div v-else>
                        <el-menu-item :index="item.path">
                            <i class=iconfont :class="item.icon" :style="{color:item.color}" style="margin-right:20px"></i>
                            <span slot="title" style="color:#323232;">{{item.meta.msg}}</span>
                        </el-menu-item>
                     </div> 
                  </div>
                </el-menu>
            </el-col>
            </el-row>
    </el-container>
    </el-scrollbar>
    </div>
    <el-dialog title="切换库房" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="请选择库房" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item> 
              <el-form-item label="是否为默认库房" :label-width="formLabelWidth">
                  <el-radio v-model="form.radio" label="1">是</el-radio>
                  <el-radio v-model="form.radio" label="2">否</el-radio>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
     </el-dialog>

      <el-dialog title="修改密码" :visible.sync="dialogFormVisible2" :center = true width="40%">
            <el-form :model="form">
              <el-form-item label="请输入新密码" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off" type="password"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
              <el-button @click="dialogFormVisible = false">取 消</el-button>

            </div>
     </el-dialog>
  </div>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
      return{
         lists:this.$router.options.routes,
         list:[],
         src: require("../assets/login/toux.jpg"),
         dialogFormVisible:false,
         dialogFormVisible2:false,
         form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          radio:''
        },
        formLabelWidth: '120px'
      }
  },
  mounted(){
         let _this = this
         let m = this.$router.options.routes;
         m.forEach(x => {
           if(!x.hidden){
             _this.list.push(x)
           }
         });
  },
  methods: {
    //  handleCommand(command) {
    //    console.log(command)
    //     this.command = true;
    //  },
     quer(){
        this.dialogFormVisible = true;
     },
     pass(){
        this.dialogFormVisible2 = true;
     },
     btn(){
        console.log(111)
     },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello{
      background: #fafeff;
}
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
/deep/  .el-scrollbar__wrap{
   overflow-x:hidden; 
   margin-right: -22px !important; 
}
.logo{
    padding-left: 40px;
    height: 150px;
    background: #fafeff;
}  
.el-menu-item{
  font-size: 16px;
}
/deep/.el-submenu__title{
      height: 50px;
    line-height: 50px;
    font-size: 18px;
    color:#666;
}
/deep/.el-submenu .el-menu-item{
    height: 40px;
    line-height: 40px;
    color:#999;
}
.el-submenu__title{
  font-size:16px !important;
}
.item-list{
  font-size: 16px;
}
.el-menu-item.is-active {
   background-color: #F2F2F2 !important;
   color: rgba(153, 204, 255, 1);
}

.el-row{
    min-width: 240px;
    height: 100%;
}
.el-submenu__title{
  margin-left:34px !important;
}
.el-menu{
    height: 100%;
    background-color:#fafeff;
    border:none;
}
.hello{
    height: 100%;
}
.el-col-12{
    min-width: 240px;
        height: 100%;

}
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .el-container{
      // height: calc( 100% - 150px);
      height: 100%;
  }
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

/deep/.el-scrollbar__view{
  height:100%;
}
/deep/.el-scrollbar__wrap.default-scrollbar__wrap {
  overflow-x: auto;
}
.menu{
    height: calc( 100% - 150px);
}


.title>img{
  width: 60px;
  height: 60px;
  border-radius:50%
}
.title-umen{
    width: 174px;
    height: 174px;
    background: #ffffff;
    position: absolute;
    top:52px;
    z-index: 99;
    left:-94px;
    border:1px solid #ddd;
    border-radius: 5px;
    box-shadow:-4px 4px 10px  #ddd;
}
.umen-list>li{
    margin-top:24px;
    padding: 0 34px;
}
.title{
 
    width: 60px;
    padding-top:26px;
    border-radius: 50%;
}
.title-buttom{
   position:absolute;
   top: -18px;
   left: 20px;
}
.el-dropdown{
    top: 4px;
    left: 0px;
    width: 100px;
    
}
.el-dropdown-menu{
    .el-dropdown-menu__item {
          padding-left:40px;
      }
}
</style>
