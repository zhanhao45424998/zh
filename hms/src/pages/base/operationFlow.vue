<template>
   <div>
       <Head title="流程列表">
                     <div>
                        <el-button type="primary"  @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增流程</el-button>
                        <el-button type="" @click="exportExcel"><i class="iconfont icondaochu"> </i>导出模板</el-button>
                    </div>  
        </Head>
        <div>
            <el-table
                border
                stripe
                id="outTable"  
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                @selection-change="handleSelectionChange">
                <el-table-column
                align='center'
                type="selection"
                fixed=""
                width="55">
                </el-table-column>
                <el-table-column
                 :show-overflow-tooltip="true"
                label="流程名称"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="起始角色"
                 :show-overflow-tooltip="true"
               >
                </el-table-column>
                <el-table-column
                prop="address"
                label="结束角色"
                 :show-overflow-tooltip="true"
                >
                </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip align="center" width="270" fixed="right">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)"><i class="iconfont iconxiugai"></i>编辑</el-button>
                     <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"><i class="iconfont iconbushufabu"></i>取消部署</el-button>
                </template>
                </el-table-column>
                
            </el-table>
        </div>

        <div>
            <h-dialog title="业务名称：临时耗材管理" :sendVal.sync="valueState">
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
            <div slot="foot" class="dialog-footer">
                <el-button @click="valueState = false">取 消</el-button>
                <el-button type="primary" @click="valueState = false">确 定</el-button>
            </div>
            </h-dialog>
        </div> 
   </div>
</template>

<script>
import Head from '@/components/Basic/head'
import FileSaver from 'file-saver'
import XLSX from "xlsx"
export default {
  components:{ Head },
  name: '',
  data(){
    return{
        value3:'',
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
            // {name:'步骤1',zrole:'财务',aab:true},
            // {name:'步骤2',zrole:'财务',aab:true},      
            ],
        },
        active: 100,
        valueState:false,
        tableData3:[
          {
              date: '苏州好博医疗器械有限公司	',
              status:'正常',
              name: '0512-53205591',
              address: '江苏省苏州市太仓市',
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, 
          {
              date: '2016-05-03',
              status:'正常',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1518 弄'
          }, 
         ],   
    }
  },
  methods:{
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



       next() {
        if (this.active++ > 2) this.active = 0;
       },
       handleEdit(index,row){
            console.log(index, row);
            this.dialogFormVisible=true;
       },
       handleDelete(index,row){
            console.log(index, row);
       },
       handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
       },
       exportExcel() {
        var xlsxParam = { raw: true };//转换成excel时，使用原始的格式
        var wb = XLSX.utils.table_to_book(document.querySelector("#outTable"),xlsxParam);
        var wbout = XLSX.write(wb, {
            bookType: "xlsx",
            bookSST: true,
            type: "array"
        });
        try {
            FileSaver.saveAs(
            new Blob([wbout], { type: "application/octet-stream;charset=utf-8" }),
            "sheetjs.xlsx"
            );
        } catch (e) {
            if (typeof console !== "undefined") console.log(e, wbout);
        }
        return wbout;
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
