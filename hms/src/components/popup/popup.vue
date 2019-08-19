<template>
   <div class="popup">
       <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeInRightBig"
            leave-active-class="animated fadeOutRight"
            >
            <div class="popups" v-if="updowna.updowns" id="mydia">
                <div class="popup-title">
                   <p>{{titles}}</p>
                   <div @click="closedowns" style="width:40px;cursor: pointer;">X</div>
                </div>
                <div class="popup-content">
                    <el-scrollbar style="height:100%">     
                       <slot></slot>
                    </el-scrollbar>
                </div>
                   
            </div> 
       </transition>   
   </div>
</template>

<script>
export default {
  name: '',
  props:{
    updowna:{
         
    },
  },
  data(){
    return{
        listform:this.updowna.updowns,
        titles:this.updowna.title,
    }
  },
  mounted(){
            let _this = this;
            document.addEventListener('click', function (e) {
            let flag = e.target.contains(document.getElementById('mydia'))
            if(flag == true){
               _this.closedowns();
            }else{
           
            }   
            })
  },
  computed:{

  },
  watch:{

  },
  methods:{
      closedowns(){
          this.listform = false;
          this.$emit('cldown',this.listform)
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.popup{
  

   .slide-fade-enter-active {
       
    transition: all .5s cubic-bezier(0.5, 0.5, 0.8, 0.3);
    }
    .slide-fade-leave-active {
     transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
    
    }
    .popups{      
        z-index: 9999;
        position: absolute;
        width: 90%;
        height: calc( 100% - 20px);
      
        right:0;
        top:10px;
     
        .popup-title{
            display: flex;
            flex-wrap: wrap;
            background:#005390;
            border-radius: 10px 10px 0px 0px;
            color:#fff;
            height: 60px;
            line-height:60px;
            padding: 0px 20px;
            justify-content: space-between;
            span{
                cursor: pointer;
            }
        }
        .popup-content{
            background:#fff;
            padding: 20px;
            border:1px solid #005390;
            height:calc( 100% - 100px);
            border-radius:0px 0px 10px 10px;
        }
    }
}

</style>
