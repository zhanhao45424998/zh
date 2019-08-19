<template>
  <div class="index">
    <transition name="slide-fade" mode="out-in">
      <UMEN v-show="message"></UMEN> 
    </transition>  
   
      <div class="right" :class="{right2:message}">           
          <Head v-bind:msg="meta" v-on:showUmen="showUmen"></Head>
          <el-main class="main">
            <el-scrollbar style="height:100%">
              <div style="padding-right:12px;">
               <transition name="router" mode="out-in"> 
                 <router-view></router-view>
               </transition>     
              </div>
            </el-scrollbar>
          </el-main>
      </div>
     
  </div>
</template>

<script>
import UMEN from "@/components/umen.vue"
import Head from "@/components/headers"

export default {
  name: 'login',
  components:{ UMEN, Head},
  data(){
     return{
       meta:'',
       message:true,
     }
  },
  mounted(){
       this.meta = this.$route.meta.msg;
  },
  methods:{
       showUmen(data){       
          this.message = data;
       }

  },
  watch:{
      $route(to,from){
        this.meta = this.$route.meta.msg
        
      }
    },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.index{
  height: 100%;
  display: flex;
}
.right{
  width:100%;
}
.right2{
  width:calc( 100% - 240px );
}
.main{
  margin:10px;
  background: #ffffff;
  
  height: calc( 100% - 150px );
}

.el-scrollbar{
  /deep/ .el-scrollbar__wrap {
           overflow-x: hidden;
  }
}
.slide-fade-enter-active {
  transition: all .2s ease;
}
.slide-fade-leave-active {
  // transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
   transition: all .2s ease;

}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.router-enter {
    transform: translateX(20px);
    opacity: 0;
}

.router-enter-active, .router-leave-active {
    transition: all .3s ease;
}

.router-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}
</style>
