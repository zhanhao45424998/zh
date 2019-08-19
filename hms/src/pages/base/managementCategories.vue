<template>
   <div class="managementCategories">
        <div>
           <Head title="财务类别列表">
                     <div>
                        <el-button type="primary"  @click="valueState = true">+ 新增财务类别</el-button>
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
                <el-input
                    style="width:30%"
                    placeholder="输入关键字进行过滤"
                    v-model="filterText">
                </el-input>

                <el-tree
                    :render-content="renderContent"
                    style="margin-top:20px;font-size:30px;"
                    class="filter-tree"
                    :data="data"
                    :highlight-current = true
                    :props="defaultProps"
                    default-expand-all
                    :filter-node-method="filterNode"
                    ref="tree">
                    
                </el-tree>

            </div>
       </div>

        <div>
             <h-dialog title="新增库房" :sendVal.sync="valueState">
                <div>        
                    <el-form ref="form" :model="formds" label-width="140px">
                        <el-form-item label="所属库房" >
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="类别等级" >
                            <el-select v-model="formds.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="类别名称">
                            <el-input v-model="formds.name"></el-input>
                        </el-form-item>
                        <el-form-item label="类别代码">
                            <el-input v-model="formds.name"></el-input>
                        </el-form-item>
                    </el-form> 
                </div>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false">取 消</el-button>
                    <el-button type="primary">确 定</el-button>
                </div>
            </h-dialog>
        </div>
   </div>
</template>

<script>
import Head from '@/components/Basic/head'

export default {
  name: 'managementCategories',
  components:{ Head },
  data(){
    return{
      formds:{
         region:'',
         name:''
      },
      valueState:false,
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
        filterText: '',
        data: [{
          id: 1,
          label: '其他卫生材料',
          children: [{
            id: 4,
            label: '其他卫生材料单独收费',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '植入材料',
          children: [{
            id: 5,
            label: '植入材料单独收费'
          }, {
            id: 6,
            label: '植入材料非单独收费'
          }]
        }, {
          id: 3,
          label: '化验材料',
          children: [{
            id: 7,
            label: '化验材料单独收费'
          }, {
            id: 8,
            label: '化验材料非单独收费'
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  watch: {
    filterText(val) {
        this.$refs.tree.filter(val);
      }
    },

  methods: {
    filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
    },
    renderContent(createElement,{ node,data,store }){
       return createElement('span',[createElement('span',{attrs:{class:'tree-img'}}),createElement('span',{attrs:{class:'tree-spt'}},node.label)])
    }    
  },
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.el-tree{
  font-size: 16px !important;

  /deep/.el-tree-node {
    margin-top: 10px !important;
    .el-tree-node__content{

    }
  }
}

</style>
