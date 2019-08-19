<template>
   <div>
        <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input21">
        </el-input>
   </div>
</template>

<script>
export default {
  name: '',
  data(){
    return{
      input21: '',
    }
  },
  computed:{
    
  },
  watch:{
　   input21(newVal,oldVal){//监控单个变量
        // console.log(newVal)
        if(newVal){
            this.$emit('getval',newVal);
        }   
   }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
