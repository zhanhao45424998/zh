<template>
   <div>
    <div @click="openMask">打开弹窗</div>
    <h-dialog :sendVal.sync='valueState' title="新增医院">
       <div>
       <el-form :model="form">
              <el-form-item label="医院名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="医院代码" :label-width="formLabelWidth">
                  <el-input v-model="form.name" auto-complete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="医院性质" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="主院" value="shanghai"></el-option>
                      <el-option label="分院" value="beijing"></el-option>
                  </el-select>
                  </el-form-item>
              </el-form>
                </div>
       <template v-slot:foot>
           <el-button type="primary">确认</el-button>
           <el-button type="danger">取消</el-button>
       </template>
    </h-dialog>
    <Popup :updowna = "formlist" v-on:cldown= "downcl">
       <div style="height:300px">
          <p>asdasdasd</p>
       </div>
       <div style="height:300px">
          <p>asdasdasd</p>
       </div>
       <div style="height:300px">
          <p>asdasdasd</p>
       </div>
       <div style="height:30px">
          <p>asdasdasd</p>
       </div>
       <div style="height:30px">
          <p>asdasdasd</p>
       </div>
       <div style="height:30px">
          <p>asdasdasd</p>
       </div>
    </Popup>  
    <div>
        <el-button @click="updown">自制弹出框</el-button>
    </div>
      
    <div>
       <div class="item-price">{{this.productList | formatMoney |ast}}</div>  
    </div> 

    <div>
       <p @click="addd(obj)">{{obj.d}}</p>
       <p @click="adde(obj)">{{obj.e}}</p>
       <p @click="adds(obj)">{{obj.s}}</p>
    </div>
    
    <el-select v-model="value" filterable placeholder="请选择" :filter-method="PinyinMatch">
      <el-option
        v-for="item in commonAddr"
        :key="item.CodeValue"
        :label="item.CodeName"
        :value="item.CodeValue">
      </el-option>
    </el-select>
 

   <div>
        <div style="margin-top:20px;">
            <el-steps direction="vertical" :active="100">
                <el-step title="起始" class="clearfix" style="font-size:18px;">
                  <template slot="description" >
                       <div class="fsize" style="font-size:16px;">         
                          <span>起始角色：</span>
                          <el-select v-model="listform.start" :disabled="listform.abc">
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>  
                       </div>
                       <div style="text-align:right">
                         <el-button type="primary" size="small" @click="additem">添加步骤</el-button> 
                         <el-button type="success" size="small" @click="addfirst">编辑步骤</el-button>
                       </div>
                   </template>
                </el-step>
                <el-step :title="items.name"   description="这是一段很长很长很长的描述性文字" v-for="(items,index) in listform.list" :key="index">
                     <template slot="description" >
                       <div class="fsize" style="font-size:16px;">         
                          <span>执行角色：</span>
                          <el-select v-model="items.zrole" :disabled="items.aab" >
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                       </div>
                       <div>
                          <span>回退角色：</span><span>会计</span> 
                       </div>
                       <div>
                          <span>回退步骤：</span>
                          <el-select v-model="items.zrole" :disabled="items.aab" >
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>  
                       </div>
                       <div style="text-align:right">
                         <el-button type="primary" size="small" @click="additemlist(index)">添加步骤</el-button> 
                         <el-button type="success" size="small"  @click="addlist(index,$event)">编辑步骤</el-button>
                         <el-button type="danger" size="small" @click="deletelist(index)">删除步骤</el-button> 
                       </div>
                   </template>
                </el-step>
                 <el-step title="终止"  description="这是一段很长很长很长的描述性文字">
                  <template slot="description" >
                       <div class="fsize" style="font-size:16px;">         
                          <span>终止角色：</span>
                          <el-select v-model="listform.end" :disabled="listform.aac" >
                            <el-option
                              v-for="item in options"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                       </div>
                       <div style="text-align:right;padding-right:10.5%">
                         <el-button type="success" size="small" @click="endlist($event)">编辑步骤</el-button>
                       </div>
                   </template>
                </el-step>
            </el-steps>

            <div></div>
        </div>
   </div>
   </div>
</template>

<script>
import animate from 'animate.css'
import Popup from '@/components/popup/popup'
export default {
  components:{ Popup },
  name: '',
  watch:{
    updowns:function(newval,old){
        console.log(newval) 
    }
  },
  filters:{
    formatMoney:function(value){
      return "￥"+ value.toFixed(2);
    },
    ast:function(value){
      return value+'元'
    }
  },
  data() {
      return { 
         form: {
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: ''
          },
        formLabelWidth: '120px',  
        valueState: false,
        show: true,
        isCollapse: true,
        formlist:{
           updowns:false,
           title:'自定义表头'
        },
       
        totalMoney:0,
        productList:30,
        obj:{},
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        listform:{
            start:"",
            abc:true,
            aac:true,
            end:'',
            list:[    
            {name:'步骤1',zrole:'财务',aab:true},
            {name:'步骤2',zrole:'财务',aab:true},      
            ],
        },
        value3: '',
       
       
      
        commonAddr: [{
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
        value: '',
        copycommonAddr:[{
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
      }
    },

    mounted(){
      this.obj = {d:0};
      this.$set(this.obj,'s',0)
      this.obj.e = 0;
      console.log('first',this.obj)
    },

    methods:{
      openMask(){
         this.valueState = !this.valueState;
      },


       handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
       downcl(val){
          console.log('123',val)
          this.formlist.updowns = val;
       },
       updown(){
          this.formlist.updowns =  !this.formlist.updowns;
       },
       addd(item) {
            item.d = item.d + 1;
            console.log('item-',item.d);
       },
        adde(item) {
            item.e = item.e + 1;
            console.log('item--',item.e);
       },   
       
       adds(item){
            item.s = item.s+1;
            console.log('item---',item.s)
       },
       deletelist(index){
          let arrs = this.list;
          arrs.splice(index,1)
          arrs.forEach((v,k)=>{
            console.log(v,k)
            v.name = `步骤${k+1}`
          })
          this.list = arrs
       },
       endlist(e){
         this.listform.aac = !this.listform.aac
         if(this.listform.aac == false){
           e.target.innerHTML = '保存'
         }else{
           e.target.innerHTML = '编辑步骤'
         }
       },
       addfirst(e){
          this.listform.abc = !this.listform.abc
          if(this.listform.abc == false){
           e.target.innerHTML = '保存'
         }else{
           e.target.innerHTML = '编辑步骤'
         }
       },
       addlist(index,e){
          this.listform.list[index].aab = !this.listform.list[index].aab;
          if(this.listform.list[index].aab == false){
           e.target.innerHTML = '保存'
         }else{
           e.target.innerHTML = '编辑步骤'
         }
       },
       additemlist(index){
          let arrs = this.listform.list
          arrs.splice(index+1,0,{name:'',zrole:'',aab:true})
          console.log(arrs)
          arrs.forEach((v,k)=>{
            console.log(v,k)
            v.name = `步骤${k+1}`
          })
          this.list = arrs
       },
       additem(){
          let arrs = this.listform.list
          arrs.unshift({name:'',zrole:'',aab:true})
          arrs.forEach((v,k)=>{
            console.log(v,k)
            v.name = `步骤${k+1}`
          })
          this.list = arrs
       }, 
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
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headsearch{
    .headsearch-title{
            padding-left: 20px;
            height: 60px;
            background: #005390;
            color: #f2f2f2;
            font-weight: 700;
            line-height: 60px;
            border-radius: 4px 4px 0 0;
            font-size: 20px;
    }
    .headsearch-content{
            padding-top: 20px;
            border: 1px solid #005390;
            border-top:none;
            .headsearch-bottom{
                  margin: 20px auto 0px auto;
                  text-align: center;
                  padding: 20px 0px;
                  background: #dfdfdf;
            }
    }
}
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }
/deep/.el-step__main{
      background: #dfdfdf;
       border-radius:8px;
       padding: 10px;
       margin-bottom: 20px;
       margin-left: 10px;
   /deep/.el-step__title{
     font-size:18px;
     
   }
   /deep/.el-step__description{
       color:#2c3e50;
     }
}
</style>
