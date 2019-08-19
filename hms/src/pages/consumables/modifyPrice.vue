<template>
   <div class="consumablesQuery">
       <div class="consumablesQuery-title">
            <Head title="调价管理"></Head>  
            <HeadSearch>       
                    <template v-slot:mains>
                        <div class="firstInput">
                            <el-row>
                                <el-col :span="8">
                                    <el-col :span="8">
                                        <div class="title">起始时间:</div>
                                    </el-col>

                                    <el-col :span="16">
                                        <el-select
                                        v-model="value"
                                        filterable
                                        
                                        placeholder="请输入"
                                        clearable
                                        @focus="tap"
                                        >
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        ></el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :span="8">
                                    <el-col :span="8">
                                        <div class="title">截止时间:</div>
                                    </el-col>

                                    <el-col :span="16">
                                        <el-select
                                        v-model="value"
                                        filterable
                                    
                                        placeholder="请输入"
                                        clearable
                                        @focus="tap"
                                        >
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        ></el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-col :span="8">
                                        <div class="title">选择库房:</div>
                                    </el-col>

                                    <el-col :span="16">
                                        <el-select
                                        v-model="value"
                                        filterable
                                    
                                        placeholder="请输入"
                                        clearable
                                        @focus="tap"
                                        >
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        ></el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :span="8">
                                    <el-col :span="8">
                                        <div class="title">选择子库房:</div>
                                    </el-col>

                                    <el-col :span="16">
                                        <el-select
                                        v-model="value"
                                        filterable
                                        
                                        placeholder="请输入"
                                        clearable
                                        @focus="tap"
                                        >
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        ></el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                               
                            </el-row>
                            <el-row>
                                <el-col :span="8">
                                    <el-col :span="8">
                                        <div class="title">耗材名称:</div>
                                    </el-col>

                                    <el-col :span="16">
                                        <el-select
                                        v-model="value"
                                        filterable
                                    
                                        placeholder="请输入"
                                        clearable
                                        @focus="tap"
                                        >
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        ></el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :span="8">
                                    <el-col :span="8">
                                        <div class="title">配送企业:</div>
                                    </el-col>

                                    <el-col :span="16">
                                        <el-select
                                        v-model="value"
                                        filterable
                                        
                                        placeholder="请输入"
                                        clearable
                                        @focus="tap"
                                        >
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        ></el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                                <el-col :span="8">
                                    <el-col :span="8">
                                        <div class="title">生产企业:</div>
                                    </el-col>

                                    <el-col :span="16">
                                        <el-select
                                        v-model="value"
                                        filterable
                                        
                                        placeholder="请输入"
                                        clearable
                                        @focus="tap"
                                        >
                                        <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value"
                                        ></el-option>
                                        </el-select>
                                    </el-col>
                                </el-col>
                            </el-row>
                            </div>
                    </template> 
                    <template v-slot:anniu>
                        <el-button type="primary"> 查询</el-button>
                    </template>                
            </HeadSearch>
       </div>
       <div class="consumablesQuery-list">
            <Heads title="调价记录表">
                <el-button type="success">详细信息</el-button>
            </Heads>

            <el-table
                id="outTable"  
                ref="multipleTable"
                :data="tableData3"
                tooltip-effect="dark"
                style="width: 100%"
                :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                @selection-change="handleSelectionChange">
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                label="配送企业名称"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                label="联系电话"
               >
                </el-table-column>
                <el-table-column
                prop="address"
                label="地址"
                >
                </el-table-column>
                <el-table-column
                prop="status"
                label="状态"
                width="80"
                >
                </el-table-column>
                <el-table-column label="操作" show-overflow-tooltip>
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="info"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="warning"
                    @click="handleDelete(scope.$index, scope.row)">变更</el-button>
                </template>
                </el-table-column>
            </el-table>

            <div class="block" style="text-align:right;margin-top:20px;">
                <span class="demonstration"></span>
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>   
       </div>  
   </div>
</template>

<script>
import Head from '@/components/Basic/head'
import Heads from '@/components/Basic/head2'
import HeadSearch from '@/components/Basic/headsearch'
export default {
  name: '',
  components:{ Head,HeadSearch,Heads},  
  data(){
    return{
        tableData3: [
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
        value:'',
        options: [
                {
                value: "HJG",
                label: "黄金糕"
                },
                {
                value: "SPN",
                label: "双皮奶"
                },
                {
                value: "WZJ",
                label: "蚵仔煎"
                },
                {
                value: "LXM",
                label: "龙须面"
                },
                {
                value: "BJKY",
                label: "北京烤鸭"
                }
            ],
    }
  },
  methods:{
        tap(){
            console.log(111);
            this.value = "";
            this.options = this.data;
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.consumablesQuery-title{
    margin-bottom: 30px;
    .firstInput {
        padding-left: 20px;
        padding-right: 20px;
                    .el-row {
                        margin-bottom: 20px;
                    }
                    .title{
                        text-align: right;
                        line-height: 40px;
                        padding-right: 10%;
                        font-weight: 600;
                        font-size: 16px;
                    }
    }
}

</style>
