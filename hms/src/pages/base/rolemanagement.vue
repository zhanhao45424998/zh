<template>
   <div class="rolemanagement">
        <div>
            <Head title="角色列表">
                    <div>
                        <el-button type="primary"  @click="valueState = true"><i class="iconfont iconxinzeng"> </i>新增角色</el-button>
                        <el-button  @click="exportExcel"><i class="iconfont icondaochu"> </i>导出模板</el-button>
                    </div> 
            </Head>
        </div>
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
                type="index"
                label="序号"
                align="center"
                fixed
                width="70">
                </el-table-column>
                <el-table-column
                label="角色名称"
                :show-overflow-tooltip="true"
                >
                <template slot-scope="scope">{{ scope.row.date }}</template>
                </el-table-column>
                <el-table-column
                prop="name"
                :show-overflow-tooltip="true"
                label="所属库房"
               >
                </el-table-column>
                <el-table-column
                prop="address"
                :show-overflow-tooltip="true"
                label="系统分支"
                >
                </el-table-column>
                 <el-table-column
                prop="status"
                align="center"
                label="是否授权" 
                width="100"    
                >
                 <template slot-scope="scope">
                  <span v-if="scope.row.status=='已授权'" style="color:#94D475">{{ scope.row.status }}</span>
                  <span v-else style="color:#F56C6C">{{ scope.row.status }}</span>
	              </template>
                </el-table-column>
                <el-table-column label="操作" align="center" show-overflow-tooltip width="350"  fixed="right">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    type="success"
                    @click="handleEdit(scope.$index, scope.row)"><i class="iconfont iconxiugai"></i>编辑</el-button>
                     <el-button
                    size="mini"
                    
                    type="primary"
                    @click="handleAdd(scope.$index, scope.row)"><i class="iconfont iconjiaoseshouquan"></i>授权</el-button>
                     <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"><i class="iconfont iconshanchu"></i>删除</el-button>
                </template>
                </el-table-column>
                
            </el-table>
        </div>

        <div class="block" style="text-align:right;margin-top:20px;">
            <span class="demonstration"></span>
            <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
            </el-pagination>
        </div>
        
        <!-- 新增角色 -->
        <div>
            <h-dialog title="新增角色" :sendVal.sync="valueState">
                <div style="margin-left:10px;margin-bottom:20px;">请填写角色信息</div>    
                <el-form :model="form"  label-width="120px">
                    <el-form-item label="角色名称" >
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="系统分支" >
                        <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="主院" value="shanghai"></el-option>
                            <el-option label="分院" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属库房">
                        <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="主院" value="shanghai"></el-option>
                            <el-option label="分院" value="beijing"></el-option>
                        </el-select>
                    </el-form-item> 
                    <el-form-item label="角色类型" >
                        <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="主院" value="shanghai"></el-option>
                            <el-option label="分院" value="beijing"></el-option>
                        </el-select>
                    </el-form-item> 
                    <el-form-item label="授权" >
                        <el-select v-model="form.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="主院" value="shanghai"></el-option>
                            <el-option label="分院" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="角色说明">
                        <el-input v-model="form.name" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState = false">取 消</el-button>
                    <el-button type="primary" @click="valueState = false">确 定</el-button>
                </div>
            </h-dialog>

            <h-dialog title="修改角色信息" :sendVal.sync="valueState2">
                <div style="margin-left:10px;margin-bottom:20px;">请填写角色信息</div>    
                    <el-form :model="form2"  label-width="120px">
                    <el-form-item label="角色名称" >
                        <el-input v-model="form2.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="系统分支" >
                        <el-select v-model="form2.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="主院" value="shanghai"></el-option>
                            <el-option label="分院" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="所属库房">
                        <el-select v-model="form2.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="主院" value="shanghai"></el-option>
                            <el-option label="分院" value="beijing"></el-option>
                        </el-select>
                    </el-form-item> 
                    <el-form-item label="角色类型" >
                        <el-select v-model="form2.region" placeholder="请选择活动区域" style="width:100%">
                            <el-option label="主院" value="shanghai"></el-option>
                            <el-option label="分院" value="beijing"></el-option>
                        </el-select>
                    </el-form-item> 
                    <el-form-item label="授权">
                            <el-input disabled v-model="form2.regions"></el-input>
                    </el-form-item>
                    <el-form-item label="角色说明">
                        <el-input v-model="form2.name" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="foot" class="dialog-footer">
                    <el-button @click="valueState2 = false">取 消</el-button>
                    <el-button type="primary" @click="valueState2 = false">确 定</el-button>
                </div>
            </h-dialog>
        </div>
        
        <!-- 授权管理 -->
        <div>
            <h-dialog title="授权管理" :sendVal.sync="valueState3">
                <div>
                    <el-collapse accordion>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconshuju" style="margin-right:10px;"></i>基础数据管理
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
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconyuanliaoxiaohao"  style="margin-right:10px;"></i>耗材字典管理
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate2" v-model="checkAll2" @change="handleCheckAllChange2" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities2" @change="handleCheckedCitiesChange2">
                                <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconkeshi" style="margin-right:10px;"></i>科室申请
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate3" v-model="checkAll3" @change="handleCheckAllChange3" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities3" @change="handleCheckedCitiesChange3">
                                <el-checkbox v-for="city in cities3" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconwj-jh" style="margin-right:10px;"></i>计划管理
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate4" v-model="checkAll4" @change="handleCheckAllChange4" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities4" @change="handleCheckedCitiesChange4">
                                <el-checkbox v-for="city in cities4" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconkufang" style="margin-right:10px;"></i>库房管理
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate5" v-model="checkAll5" @change="handleCheckAllChange5" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities5" @change="handleCheckedCitiesChange5">
                                <el-checkbox v-for="city in cities5" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconkufang" style="margin-right:10px;"></i>二级库房管理
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate6" v-model="checkAll6" @change="handleCheckAllChange6" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities6" @change="handleCheckedCitiesChange6">
                                <el-checkbox v-for="city in cities6" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconxiaodu" style="margin-right:10px;"></i>灭菌管理
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate7" v-model="checkAll7" @change="handleCheckAllChange7" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities7" @change="handleCheckedCitiesChange7">
                                <el-checkbox v-for="city in cities7" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconICAtubiao_jifenbulu" style="margin-right:10px;"></i>数据补录
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate8" v-model="checkAll8" @change="handleCheckAllChange8" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities8" @change="handleCheckedCitiesChange8">
                                <el-checkbox v-for="city in cities8" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont icongaojingxinxi" style="margin-right:10px;"></i>异常处理
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate9" v-model="checkAll9" @change="handleCheckAllChange9" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities9" @change="handleCheckedCitiesChange9">
                                <el-checkbox v-for="city in cities9" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconfapiao1" style="margin-right:10px;"></i>发票管理
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate10" v-model="checkAll10" @change="handleCheckAllChange10" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities10" @change="handleCheckedCitiesChange10">
                                <el-checkbox v-for="city in cities10" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconiconset0254" style="margin-right:10px;"></i>条码管理
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate11" v-model="checkAll11" @change="handleCheckAllChange11" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities11" @change="handleCheckedCitiesChange11">
                                <el-checkbox v-for="city in cities11" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconshujubaobiao" style="margin-right:10px;"></i>报表统计
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate12" v-model="checkAll12" @change="handleCheckAllChange12" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities12" @change="handleCheckedCitiesChange12">
                                <el-checkbox v-for="city in cities12" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                        <el-collapse-item>
                            <template slot="title">
                                <div class="list-title" style="">
                                    <i class="iconfont iconshujubaobiao" style="margin-right:10px;"></i>二级库房报表
                                </div>
                            </template>
                            <div class="titlt-style">
                            <el-checkbox :indeterminate="isIndeterminate13" v-model="checkAll13" @change="handleCheckAllChange13" >全选</el-checkbox>    
                            </div>
                            <div style="margin: 15px 0;"></div>
                            <el-checkbox-group v-model="checkedCities13" @change="handleCheckedCitiesChange13">
                                <el-checkbox v-for="city in cities13" :label="city" :key="city">{{city}}</el-checkbox>
                            </el-checkbox-group>
                        </el-collapse-item>
                    </el-collapse>    
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
const cityOptions = ['医院管理','企业配送管理', '生产产家管理', '科室管理', '库房管理','库位管理','管理类别','计数单位管理','角色管理','组别管理','人员管理','参数管理','文书管理'];
const cityOptions2 = ['耗材管理', '耗材查询', '耗材调价管理', '平台耗材映射','材料价码映射','材料价码对照确认', '耗材限额管理', '耗材限额查询', '第三方耗材管理','第三方耗材映射','捐赠耗材管理'];
const cityOptions3 = ['科室计划申请', '科室计划审核', '科室计划查询', '不良事件上报','临时耗材申请','临时耗材审核', '科室调剂申请', '科室调剂管理', '科室调剂审批','手术名称管理','手术包管理','科室使用申领','科室申领管理'];
const cityOptions4 = ['院内计划', '医工计划', '计划审批', '采购单管理','采购单查询'];
const cityOptions5 = ['物资明细出库', '物资领用出库', '物资手动出库', '物资出库管理','退库申请审批','库存基数管理', '库存基数查询', '库存实时监控', '库存效期监控','物资库存盘点','物资验收登记','物资验收审核','物资验收管理','物资入库登记','物资入库管理','物资手动退货','手术器械快速入库','物资库存'];
const cityOptions6 = ['物资入库管理', '退库申请查询', '库存基数管理', '库存基数查询','库存实时监控','二级库房盘点', '库存管理', '病区材料出库', '门诊材料出库','物资领用出库','物资扫码出库','物资损耗出库','物资撤销出库','物资出库查询','药品发放查询'];
const cityOptions7 = ['灭菌登记', '灭菌追溯'];
const cityOptions8 = ['打印空白条码'];
const cityOptions9 = ['发票录入', '发票管理'];
const cityOptions10 = ['跟台耗材信息补录', '撤销耗材补录信息'];
const cityOptions11 = ['作废验货单', '历史库存退库'];
const cityOptions12 = ['物资结存管理', '耗材使用追溯', '高值使用查询', '购耗存一览表','物资收发明细','计划领用查询', '物资入库明细', '物资出库明细', '供应商账单','科室费用账单','物资进货差额','材料入库分析','材料出库分析','养护记录查询','材料使用分析','物资采购历史','期初耗材明细','物资总账统计','高值盈收查询','寄售耗材统计','异动耗材查询','科室申请领用统计'];
const cityOptions13 = ['结存管理', '科室费用账单','科申请领用统计','科室收发明细'];
export default {
  name: '',
  components:{ Head },
  data(){
        const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `备选项 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
    };
    return{
        checkAll: false,
        checkedCities: ['企业配送管理', '生产产家管理'],
        cities: cityOptions,
        isIndeterminate: true,
        checkAll2: false,
        checkedCities2: ['耗材查询', '耗材调价管理'],
        cities2: cityOptions2,
        isIndeterminate2: true,
        checkAll3: false,
        checkedCities3: ['科室计划审核', '科室计划查询', '不良事件上报'],
        cities3: cityOptions3,
        isIndeterminate3: true,
        checkAll4: false,
        checkedCities4: ['计划审批', '采购单管理','采购单查询'],
        cities4: cityOptions4,
        isIndeterminate4: true,
        checkAll5: false,
        checkedCities5: [ '物资领用出库', '物资手动出库', '物资出库管理'],
        cities5: cityOptions5,
        isIndeterminate5: true,
        checkAll6: false,
        checkedCities6: ['库存基数查询','库存实时监控','二级库房盘点', '库存管理'],
        cities6: cityOptions6,
        isIndeterminate6: true,
        checkAll7: false,
        checkedCities7: ['灭菌登记', '灭菌追溯'],
        cities7: cityOptions7,
        isIndeterminate7: true,
        checkAll8: false,
        checkedCities8: ['打印空白条码'],
        cities8: cityOptions8,
        isIndeterminate8: true,
        checkAll9: false,
        checkedCities9: ['发票录入', '发票管理'],
        cities9: cityOptions9,
        isIndeterminate9: true,
        checkAll10: false,
        checkedCities10: ['跟台耗材信息补录', '撤销耗材补录信息'],
        cities10: cityOptions10,
        isIndeterminate10: true,
        checkAll11: false,
        checkedCities11: ['作废验货单', '历史库存退库'],
        cities11: cityOptions11,
        isIndeterminate11: true,
        checkAll12: false,
        checkedCities12: ['耗材使用追溯', '高值使用查询', '购耗存一览表'],
        cities12: cityOptions12,
        isIndeterminate12: true,
        checkAll13: false,
        checkedCities13: ['科室费用账单','科申请领用统计','科室收发明细'],
        cities13: cityOptions13,
        isIndeterminate13: true,
        //
        data: generateData(),
        value1: [1, 4],
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
          form2:{
            regions:'是'
          },
        valueState:false,
        valueState2:false,
        valueState3:false,
        tableData3: [
          {
              date: '系统管理员	',
              status:'已授权',
              name: '设备科库房',
              address: '耗材管理',
          }, 
          {
              date: '二级库房',
              status:'未授权',
              name: '设备科库房',
              address: '耗材管理'
          }, 
           {
              date: '采购	',
              status:'已授权',
              name: '设备科库房',
              address: '耗材管理',
          }, 
          {
              date: '会计',
              status:'未授权',
              name: '设备科库房',
              address: '耗材管理'
          },
           {
              date: '会计	',
              status:'已授权',
              name: '设备科库房',
              address: '耗材管理',
          }, 
          {
              date: '会计',
              status:'未授权',
              name: '设备科库房',
              address: '耗材管理'
          },   
        ],  
    }
  },

  watch:{
     checkedCities2: function(newval,oldval){
        console.log(newval)
     }
  },

  methods:{
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
        },
        handleCheckAllChange3(val) {
            this.checkedCities3 = val ? cityOptions3 : [];
            this.isIndeterminate3 = false;
        },
        handleCheckedCitiesChange3(value) {
            let checkedCount = value.length;
            this.checkAll3 = checkedCount === this.cities3.length;
            this.isIndeterminate3 = checkedCount > 0 && checkedCount < this.cities3.length;
        },
         handleCheckAllChange4(val) {
            this.checkedCities4 = val ? cityOptions3 : [];
            this.isIndeterminate4 = false;
        },
        handleCheckedCitiesChange4(value) {
            let checkedCount = value.length;
            this.checkAll4 = checkedCount === this.cities4.length;
            this.isIndeterminate4 = checkedCount > 0 && checkedCount < this.cities4.length;
        },
         handleCheckAllChange5(val) {
            this.checkedCities5 = val ? cityOptions5 : [];
            this.isIndeterminate5 = false;
        },
        handleCheckedCitiesChange5(value) {
            let checkedCount = value.length;
            this.checkAll5 = checkedCount === this.cities5.length;
            this.isIndeterminate5 = checkedCount > 0 && checkedCount < this.cities5.length;
        },
         handleCheckAllChange6(val) {
            this.checkedCities6 = val ? cityOptions6 : [];
            this.isIndeterminate6 = false;
        },
        handleCheckedCitiesChange6(value) {
            let checkedCount = value.length;
            this.checkAll6 = checkedCount === this.cities6.length;
            this.isIndeterminate6 = checkedCount > 0 && checkedCount < this.cities6.length;
        },
         handleCheckAllChange7(val) {
            this.checkedCities7 = val ? cityOptions7 : [];
            this.isIndeterminate7 = false;
        },
        handleCheckedCitiesChange7(value) {
            let checkedCount = value.length;
            this.checkAll7 = checkedCount === this.cities7.length;
            this.isIndeterminate7 = checkedCount > 0 && checkedCount < this.cities7.length;
        },
         handleCheckAllChange8(val) {
            this.checkedCities8 = val ? cityOptions8 : [];
            this.isIndeterminate8 = false;
        },
        handleCheckedCitiesChange8(value) {
            let checkedCount = value.length;
            this.checkAll8 = checkedCount === this.cities8.length;
            this.isIndeterminate8 = checkedCount > 0 && checkedCount < this.cities8.length;
        },
         handleCheckAllChange9(val) {
            this.checkedCities9 = val ? cityOptions9 : [];
            this.isIndeterminate9 = false;
        },
        handleCheckedCitiesChange9(value) {
            let checkedCount = value.length;
            this.checkAll9 = checkedCount === this.cities9.length;
            this.isIndeterminate9 = checkedCount > 0 && checkedCount < this.cities9.length;
        },
         handleCheckAllChange10(val) {
            this.checkedCities10 = val ? cityOptions10 : [];
            this.isIndeterminate10 = false;
        },
        handleCheckedCitiesChange10(value) {
            let checkedCount = value.length;
            this.checkAll10 = checkedCount === this.cities10.length;
            this.isIndeterminate10 = checkedCount > 0 && checkedCount < this.cities10.length;
        },
        handleCheckAllChange11(val) {
            this.checkedCities11 = val ? cityOptions11 : [];
            this.isIndeterminate11 = false;
        },
        handleCheckedCitiesChange11(value) {
            let checkedCount = value.length;
            this.checkAll11 = checkedCount === this.cities11.length;
            this.isIndeterminate11 = checkedCount > 0 && checkedCount < this.cities11.length;
        },
          handleCheckAllChange12(val) {
            this.checkedCities12 = val ? cityOptions12 : [];
            this.isIndeterminate12 = false;
        },
        handleCheckedCitiesChange12(value) {
            let checkedCount = value.length;
            this.checkAll12 = checkedCount === this.cities12.length;
            this.isIndeterminate12 = checkedCount > 0 && checkedCount < this.cities12.length;
        },
        handleCheckAllChange13(val) {
            this.checkedCities13 = val ? cityOptions13 : [];
            this.isIndeterminate13 = false;
        },
        handleCheckedCitiesChange13(value) {
            let checkedCount = value.length;
            this.checkAll13 = checkedCount === this.cities13.length;
            this.isIndeterminate13 = checkedCount > 0 && checkedCount < this.cities13.length;
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
        handleEdit(index,row){
             console.log(index, row);
             this.valueState2 = true;
             this.form2 = row;
        },
        handleAdd(index,row){
             console.log(index, row);
             this.valueState3=true;
            //  this.dialogFormVisible2 = true;
            // this.$router.push({
            //     path:'rolemessage',
            //     query:{

            //     }
            // })
        },
        handleDelete(index,row){
            console.log(index, row);
            this.$confirm('此操作将永久删除该角色, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            console.log(index,row)
            this.tableData3.splice(index,1)
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });          
            });
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(val)
        },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/deep/.el-collapse-item__content{
    padding-left: 20px;
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
}
/deep/.el-collapse-item__content{
    padding-bottom: 10px;
}
/deep/.el-checkbox-group{
    /deep/.el-checkbox{
        margin-bottom: 10px;
    }
}
.list-title{
    font-size: 16px;
    padding-left: 20px;
    i{
      padding: 2px;  
      color:$cg-color;
      background: $main-color;   
    }
}
</style>
