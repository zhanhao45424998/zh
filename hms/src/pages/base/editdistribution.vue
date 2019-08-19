<template>
   <div class="editdistribution">
        <div>
            <Head title="编辑配送企业">
                    <div>
                        <el-button type="primary" @click="back()">返回</el-button>
                        <el-button type="success" @click="send('form')">保存</el-button>
                        <el-select v-model="value2" placeholder="更多选择" style="width:104px;margin-left:10px">
                                <el-option
                                v-for="item in options2"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                                :disabled="item.disabled">
                                </el-option>
                            </el-select>
                    </div> 
            </Head>
            <div>
                <el-form ref="form" :model="form" :rules="rules"  label-width="130px">
                    <div class="liststyle" >
                        <el-form-item label="企业名称:"  prop="name">
                            <el-input v-model="form.name" style=""></el-input>
                        </el-form-item>
                        <el-form-item label="库房:"  prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>  
                    <div class="liststyle" >
                        <el-form-item label="联系人:">
                            <el-input v-model="form.name" style=""></el-input>
                        </el-form-item>
                        <el-form-item label="联系电话:"  prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="固话:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                    <div class="liststyle" >
                        <el-form-item label="配送企业负责人:" >
                            <el-input v-model="form.name" style=""></el-input>
                        </el-form-item>
                        <el-form-item label="配送企业电话:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="配送企业固话:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </div>
                    <div class="liststyle" >
                        <el-form-item label="统一社会信用代码:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item label="邮箱:" >
                            <el-input v-model="form.name" style=""></el-input>
                        </el-form-item>
                        <el-form-item label="邮编:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                        
                    </div> 
                    <div class="liststyle" >
                        <el-form-item label="开户行:" >
                            <el-input v-model="form.name" style=""></el-input>
                        </el-form-item>
                        <el-form-item label="开户行账号:">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>   
                    </div>
                    <div class="liststyle" >
                        <el-form-item label="所属地区 : ">
                            <el-cascader :options="options" placeholder="请选择" class="item-css"></el-cascader>
                        </el-form-item>  
                    </div>              
                </el-form>
            </div>
            <div class="editdistribution-bottom">
                 <Head title="配送企业证照类型">
                     <el-button type="primary" @click="valueState=true"><i class="iconfont iconxinzeng"> </i>新增证件</el-button>
                 </Head>
                 <div>
                     <p style="font-size:16px;color:rgb(248,172,90)">注：图片格式.jpg,.jpeg,.gif,.png,.bmp；图片最大为3M；每种证件仅能上传一张图片</p>
                 </div>
                 <div class="table-list">
                      <el-table    
                        id="outTable"       
                        :data="tableData"
                        style="width: 100%"
                        :header-cell-style="{background:'#eef1f6',color:'#606266'}">
                        <el-table-column
                            prop="date"
                            label="证件类型">
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="证件状态">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="证件信息">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="证件代码">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="有效期限">
                        </el-table-column>
                        <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button
                            size="mini"
                            @click="handleEdit2(scope.$index, scope.row)">变更</el-button>                
                        </template>
                        </el-table-column>
                    </el-table>
                 </div>
            </div>
        </div>
        <div>
            <h-dialog title="编辑证件" :sendVal.sync="valueState">
                <div>        
                    <el-form ref="form" :model="form" label-width="180px">
                        <div class="formlist">
                        <div  style="width:80%">
                            <el-form-item label="证件类型">
                                <el-select v-model="form.region" placeholder="请选证件类型"  @change="changes" style="width:100%">
                                <el-option v-for="(item,i) in list5" :key="i" :label="item.name" :value="item.val"></el-option>
                                </el-select>
                            </el-form-item>
                            </div>
                        </div>
                        <div>  
                            <keep-alive>             
                              <component  :is="currentView" v-bind:message="message" @myMessage="myMessages"></component>
                            </keep-alive>  
                        </div>
                    </el-form> 
                </div>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false">取 消</el-button>
                    <el-button type="primary" @click="updata">确 定</el-button>
                </div>
            </h-dialog>
        </div>
   </div>  
</template>

<script>
import Head from '@/components/Basic/head'
import Form1 from '@/components/muban/credentials'
import Form2 from '@/components/muban/credentials2'
import Form3 from '@/components/muban/credentials3'
import Form4 from '@/components/muban/credentials4'
import Form5 from '@/components/muban/credentials5'
import Form6 from '@/components/muban/credentials6'
import Form7 from '@/components/muban/credentials7'
import Form8 from '@/components/muban/credentials8'
import Form9 from '@/components/muban/credentials9'
export default {
  components:{ Head , Form1,Form2,Form3,Form4,Form5,Form6,Form7,Form8,Form9},
  name: 'editdistribution',
  props: {
    msg: String
  },
  data(){
      return{
         currentView:'',
         message:0,
         list5:[
             {name:"营业执照（三合一）",val:1},
             {name:"营业执照",val:2},
             {name:"税务登记证",val:3},
             {name:"组织结构代码证",val:4},
             {name:"医疗器械生产许可证",val:5},
             {name:"药品生产许可证",val:6},
             {name:"第一类医疗器械生产企业登记表",val:7},
             {name:"医疗器械经营许可证",val:8},
             {name:"第二类医疗器械生产企业登记表",val:9},
             {name:"第一类医疗器械经营备案凭证",val:10},
             {name:"药品经营许可证",val:11},
             {name:"第三类医疗器械生产企业登记表",val:12},
             {name:"第二类医疗器械经营备案凭证",val:13},
             {name:"药品经营质量管理规范认证证书",val:14},
             {name:"冷链运输证明",val:15},
             {name:"安全生产许可证",val:16},
             {name:"危险化学品经营许可证",val:17},
             {name:"非药品类易制毒化学品经营备案证明",val:18},
             {name:"全国工业产品生产许可证",val:19},
             {name:"消毒产品生产企业卫生许可证",val:20},
             {name:"企业更名证明",val:21},
             {name:"法人身份证证件",val:22},
             {name:"化妆品生产企业卫生许可证",val:23},
             {name:"制造计量器具许可证",val:24},
             {name:"化妆品生产许可证",val:25},
             {name:"商业登记条例",val:26},
         ], 
         form: {      
            region: '',
         }, 
         valueState:false,
         tableData: [],
         options: [{
            value: 'jiangsusheng',
            label: '江苏省',
            children: [{
                value: 'nanjingshi',
                label: '南京市',
                children:[
                    {
                        value:'yuhuaqu',
                        label:'雨花区',

                    }
                ]
            },{
                value: 'xuzhoushi',
                label: '徐州市',
            }]
        },{
            value: 'anhuisheng',
            label: '安徽省',
            children: [{
                value: 'hefeishi',
                label: '合肥市',
            },{
                value: 'suzhoushi',
                label: '宿州市',
            }]
        }],  
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]},  
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
         
        options2: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶',
          disabled: true
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
        value2: '',
        list:'',
      }
  },

  mounted(){      
      let datas = JSON.parse(this.$route.query.msg);
      this.list = datas
      console.log(this.list)
  },
  
  methods:{
      send(formName){
         this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      back(){
          this.$router.go(-1)
      },
      myMessages(){
          console.log(1)
      },
      updata(){
          this.message = this.message+1;
          console.log(this.message)
      },
      changes(i){
          this.currentView = `Form${i}`
          console.log(this.currentView)
      },
//       toggle(i,v) {
//           this.active = i
// 		  this.currentView = v
//   },
      handleEdit(index,row){
          console.log(index,row)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.editdistribution{
    .liststyle{
        display: flex;
        border-bottom: 1px dotted #dfdfdf;
        margin-bottom: 20px;
    }
    .table-list{
        margin-top:20px;
    }
}
.formlist{
    border-bottom: 1px solid #dfdfdf;
    margin-bottom: 20px;
}

</style>
