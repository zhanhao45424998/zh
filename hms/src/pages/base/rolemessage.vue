<template>
   <div>
        <div class="title">
             <el-collapse accordion>
                <el-collapse-item>
                    <template slot="title">
                        <div style="font-size:20px;">
                             <i class="iconfont iconshuju"></i>基础数据管理
                        </div>
                    </template>
                    <div class="titlt-style">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" >全选</el-checkbox>    
                    </div>
                    <div style="margin: 15px 0;"></div>
                    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                    </el-checkbox-group>
                </el-collapse-item>
            </el-collapse>
           
        </div>
     
       <div class="title">
            <div class="titlt-style">
               <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange" >基础数据管理</el-checkbox>    
            </div>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>
        <div class="title">
            <div class="titlt-style">
               <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">耗材字典管理</el-checkbox>
            </div>    
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
                <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
            <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">科室申请管理</el-checkbox> 
             </div>   
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
            <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">计划管理</el-checkbox>  
             </div>   
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div>  
        <div class="title">
            <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">库房管理</el-checkbox> 
             </div>   
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
             <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">二级库房管理</el-checkbox> 
            </div>    
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
            <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">灭菌管理</el-checkbox>  
            </div>     
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
             <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">条码管理</el-checkbox>
             </div>      
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
            <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">发票管理</el-checkbox>   
            </div>  
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
            <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">数据补录管理</el-checkbox> 
            </div>    
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
             <div class="titlt-style">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">异常处理</el-checkbox>  
            </div>    
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
             <div class="titlt-style">
               <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">报表统计管理</el-checkbox>
            </div>       
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
        <div class="title">
             <div class="titlt-style">
               <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2">二级库房报表</el-checkbox> 
            </div>      
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
                <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
        </div> 
   </div>
   
</template>

<script>
const cityOptions = ['企业配送管理', '生产产家管理', '科室管理', '库房管理','管理类别'];
const cityOptions2 = ['耗材管理', '耗材查询', '耗材调价管理', '平台耗材映射','材料价码映射','材料价码对照确认'];
export default {
  name: '',
  data(){
    return{
        checkAll: false,
        checkedCities: ['企业配送管理', '生产产家管理'],
        cities: cityOptions,
        isIndeterminate: true,
        checkAll2: false,
        checkedCities2: ['耗材查询', '耗材调价管理'],
        cities2: cityOptions2,
        isIndeterminate2: true
    }
  },
  watch:{
     checkedCities2: function(newval,oldval){
        console.log(newval)
     }
  },
   methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      handleCheckAllChange2(val) {
        this.checkedCities2 = val ? cityOptions2 : [];
        this.isIndeterminate2 = false;
      },
      handleCheckedCitiesChange2(value) {
        let checkedCount = value.length;
        this.checkAll2 = checkedCount === this.cities2.length;
        this.isIndeterminate2 = checkedCount > 0 && checkedCount < this.cities2.length;
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.title{
    margin-bottom: 30px;
    .titlt-style{
    /deep/ .el-checkbox__inner{
        width: 16px;
        height: 16px;
    }  
    /deep/ .el-checkbox__label{
        font-size:16px;
          font-weight: bold
    }  
    }
}
</style>
