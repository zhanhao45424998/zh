<template>
   <div  class="error-msg">
       <div :style="bg" class="error-bg">
          <div>
               <h1>您无权限访问该页面</h1>
               <p>请重新登录或联系管理员！！</p>     
               <el-button> <router-link :to='{path:"/login"}'>返回登录页</router-link></el-button>
          </div>
           
       </div>
   </div>

</template>

<script>


export default {
  name: '',
  data(){
    return{
       msg: 'app',
       bg:{
          backgroundImage:"url(" + require("../assets/login/404_bg.jpg")+")",
          backgroundRepeat:"no-repeat",
          backgroundSize:"100% 100%",
          height:"100%" ,
       }
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error-msg{
   height:100%;
}
.error-bg{
   text-align: center;
   color:#fff;
  
   // line-height:700px;
   div{
      position: absolute;
      transform: translate( -50%,-50% );
      top:40%;
      left:50%;
      p{
        font-size:30px;
        margin: 20px 0;
      }
   }

}
</style>
