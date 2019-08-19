<template>
  <div class="header">
       <div class="header-title">
          <div class="header-list">
              <div style="line-height:80px;">
                 <i class="iconfont icondaohangshouqi-" style="font-size:20px;" v-on:click="umen"></i>
              </div>
              <p style="line-height:80px;">
                  <span>工作库房：</span><span>卫材办库房</span>
              </p>
          </div>
          <div class="top">   
              <p style="line-height:80px;margin-right:20px;"><span style="color:#fff">台州市姜堰中医院物资管理系统</span></p>        
              <p class="top-email"><router-link :to="{path:'/admin/remind'}"><i class="el-icon-message"></i></router-link></p>
              <p></p>      
              <p @click.native="btn" style="color:#dfdfdf;line-height:80px;">登出</p>      
          </div>
       </div>
       <div class="header-content">
            <el-button type="primary" size="small" @click="go">上一页</el-button>   
            <p style="line-height:30px;font-size:16px;margin-left:20px">
               {{msg}}
            </p>         
       </div>
  </div>


</template>

<script>

export default {
  name: '',
  data(){
      return{
         show:false,
         pre:true,
         src: require("../assets/login/toux.jpg"),
      }
  },
  props:{
     msg:{
         type:String,
         default:''   
           }
  },
  methods:{
    handleCommand(command) {
        this.$router.push({
          path: command,
        })
    },
    btn(){   
        this.$router.push({path:'/login'})
        return removeToken();
        console.log(getToken())
     
    },
    umen(){
       this.pre = !this.pre
       this.$emit('showUmen',this.pre)
    },
    go() {
      this.$router.go(-1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.iconfont{
  margin-right:18px;
  vertical-align: middle;
}
.header{
  background: #ffffff;
}
.header-list{
  display: flex;
}
.header-title{
    height: 80px;
    line-height: 80px;
    display: flex; 
    flex-direction: row;
    justify-content: space-between; 
    font-size:18px;
    padding: 0 40px 0px 20px;
    background:rgba(153, 204, 255, 1);
    color:#ffffff;
}
.umen-list .el-icon-message{
  margin-right:14px;
}
.umen-list{
  color:#333;
}
.header-title>p{
    line-height: 60px;
}
.header-content{
    height: 32px;
    padding:8px;
    display: flex;
}
.top{
   display:flex;
}
.top-email{
    line-height: 84px;
    margin-right: 14px;
}
.top-email>a>i{
    font-size: 24px;
    color:#ffffff;
}
.title>img{
  width: 40px;
  height: 40px;
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
    position: relative;
    width: 40px;
    height: 40px;
    background: #ddd;
    margin:10px;
    border-radius: 50%;
}
.title-buttom{
   position:absolute;
   top: -18px;
   left: 20px;
}
.el-dropdown{
    top: -24px;
    left: 40px;
    
}
.el-dropdown-menu{
    .el-dropdown-menu__item {
          padding-left:40px;
      }
}
</style>
