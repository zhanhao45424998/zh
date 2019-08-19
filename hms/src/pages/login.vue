<template>
  <div class="login" :style="back">
     <div class="bc" >
         <div class="login-title">
            <p>南通市第二人民医院物资管理系统</p>
         </div> 
         <div class="admin">
     
           <div class="admin-right">
               <div class="admin-right-title" style="">
                   <span style="position:absolute;top:14px;left:0px;border:1px solid rgba(0, 88, 173, 0.2);width:100px"></span>
                   <span style="font-size:24px;color:#0058AD">用户登录</span>
                   <span style="position:absolute;top:14px;right:0px;border:1px solid rgba(0, 88, 173, 0.2);width:100px"></span>
               </div>
               <div class="admin-button">
                 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0" class="demo-ruleForm">
                     
                            <el-input
                              placeholder="请输入账号"
                              prefix-icon="el-icon-search"
                              v-model="ruleForm.userName">
                            </el-input>
                      
                            <el-input
                                placeholder="请输入密码"
                                type="password"
                                prefix-icon="el-icon-goods"
                                v-model="ruleForm.password">
                            </el-input>
                      
                      <button @click.prevent="login" style="letter-spacing:20px;">登录</button>
                  </el-form>
               </div>
           </div>
         </div>
         <div class="login-bottom">
            Copyright 南京新空间信息科技有限公司 © 2014-2020
         </div>
     </div>
  </div>
</template>

<script>
import API from '@/api/login'
import {setLocalStorage,getToken} from '@/utils/auth'
import Layout from '@/pages/index'
export default {
  name: 'login',
  data(){
     return{
         back:{
           backgroundImage:"url(" + require("../assets/login/logos.png")+")",
           backgroundRepeat:"no-repeat",
           backgroundSize:"100% 100%",
           height:"100%" ,
           position:'relative',
         },
         ruleForm:{
           userName:'',
           password:''
         },
         rules: {
            username: [
                {required: true, message: '请输入用户', trigger: 'blur'},
            ],
            password: [
                {required: true, message: '请输入密码', trigger: 'blur'}
            ],
         
        },
     }
  },
  created(){
    this.$store.commit('SET_USER_UMEN','')
  },
  methods:{
      login(){
         let _this = this;
         let accountnumber = this.ruleForm.userName;
         let password = this.ruleForm.password;
         this.$refs['ruleForm'].validate((valid) => {
           if(valid){
             this.$store.dispatch('Login', this.ruleForm).then(res => {                       
                        if (res && res.data.message.token) {
                            this.$message.success( "登录成功！");          
                            let token = res.data.message.token;
                            let message = {usertoken:token,servicecode:'XKJCS'}
                            this.$store.dispatch('router_umen', message)
                            this.$router.push("base/index");                                 
                        }
                        }).catch(err => {
                            this.$message.error("登录失败！！");
                        })
            } else{
                  this.$message.error("登录失败！");
                  return false;
            }
      });
        //  this.$router.push("404");         
    },

    getViews(path) {
      return resolve => {
        require.ensure([], (require) => {
          resolve(require('@/pages/' + path + '.vue'))
        })
      }
    }

}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login-title>p{
   font-size: 30px;
   color: #ffffff;
   letter-spacing:10px;
   text-shadow: 2px 2px 5px #dddddd
}
.admin{
  position:absolute;
  width: 400px;
  top:50%;
  display: flex;
  left:62%;
  transform:translate(-50%,-50%);
  -webkit-transform:translate(-50%,-50%);
  -moz-transform:translate(-50%,-50%);
  -ms-transform:translate(-50%,-50%);
  letter-spacing: 2px;
}
.login-title{
  position: absolute;
  top:0;
  left:0;
  /* height: 70px; */

  padding-left:60px;
  padding: 15px 60px;
}
.admin-left{
   display: inline-block;
   width: 300px;
   height:380px;
   background-color:rgba(47, 130, 210, 0.7);
   padding:60px 40px;
}
.admin-left-title{
   padding-bottom: 30px;
   border-bottom:1px solid #ffffff
}
.admin-left-title img{
   display: block;
   margin: 0 auto;
}

.admin-left-bottom{
   padding:30px 0;
   text-align: center;
}
.admin-left-bottom>p{
  font-size:22px;
  color:#ffffff;
}
.admin-left-bottom>ul>li{
  padding: 26px 30px 0px 56px;
  text-align: left;
  font-size:18px;
  color:#ffffff;
}
.admin-left-bottom>ul>li span{
  vertical-align: super;
}
.admin-left-bottom>ul>li>img{
  vertical-align: bottom;
  margin-right: 20px;
}
.admin-right{ 
   display: inline-block;
   border-radius: 10px;
  //  width: 340px;
  //  position: absolute;
  //  transform: translate(20%,-60%);
  //  top:50%;
  //  left:60%;
   background-color:rgba(255, 255, 255, 0.7);
}
.admin-right{
  padding:40px 50px;
}
.admin-right-title{
  text-align: center;
  position: relative
}
.admin-button{
  font-size: 22px;

}
.admin-button div{
  height:50px;
  margin:40px 0px 0px 0px;
}
.admin-button div input{
    border: none;
    outline: none;
    background: none;
    font-size: 22px;
}
/deep/.el-input--prefix{
  height: 60px;
  line-height: 60px;
  border-radius: 10px;
}
/deep/.el-input__inner{
  height: 60px;
  line-height: 60px;
  border-radius: 10px;
  font-size: 16px;
  padding-left: 40px;
}
/deep/.el-input__prefix{
    color:#9fd9f2;
    font-size: 20px;
    padding-left: 4px;
}
.admin-button>form>button{
  width: 100%;
  height:60px;
  line-height: 60px;
  margin: 0;
  padding: 0;
  border: 1px solid transparent;  
  outline: none;  
  background: linear-gradient(to bottom, rgba(64, 109, 233, 1) 0%, rgba(50, 146, 210, 1) 100%);
  font-size: 20px;
  color:#ffffff;
  border-radius:4px;
  margin-top: 40px;
  cursor: pointer;
}
.login-bottom{
  position: absolute;
  bottom: 10px;
  left: 40%;
  color:#ffffff;
}
</style>
