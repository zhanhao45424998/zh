<template>
   <div>
   <el-select v-model="value" filterable placeholder="请选择" :filter-method="PinyinMatch">
    <el-option
      v-for="item in commonAddr"
      :key="item.CodeValue"
      :label="item.CodeName"
      :value="item.CodeValue">
    </el-option>
  </el-select>
   </div>
</template>

<script>
export default {
  name: '',
  props:{
      list:{
           type:Array,
           default:
            [{
            CodeValue: '选项1',
            CodeName: '黄金糕'
            }, {
            CodeValue: '选项2',
            CodeName: '双皮奶'
            }, {
            CodeValue: '选项3',
            CodeName: '蚵仔煎'
            }, {
            CodeValue: '选项4',
            CodeName: '龙须面'
            }, {
            CodeValue: '选项5',
            CodeName: '北京烤鸭'
            }], 
      },
  },
  data() {
      return {      
        value: '',
        copycommonAddr:[],
        commonAddr:[],
      }
    },
    mounted(){
        this.commonAddr = this.list
        this.copycommonAddr = this.commonAddr;
    },
    methods:{
       PinyinMatch(val){        
           const PinyinMatch = require('pinyin-match');
           if(val){
               var result = [];
               this.copycommonAddr.forEach(i=>{
                   var m = PinyinMatch.match(i.CodeName,val)
                   if(m){
                       result.push(i);
                   }
               })
               this.commonAddr = result;
           }else{
               this.commonAddr = this.copycommonAddr;
           }
       },

             
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
