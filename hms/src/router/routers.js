import Layout from '@/pages/index'
import store from '@/store/index';
const _import = path => r => require.ensure([], () => r(require('../pages/' + path + '.vue')));

//白名单
export const constantRouterMap = [
    {path: '/', redirect: '/login',hidden: true},
    {path: '/login', component: _import('login'),hidden: true},
    {path: '/404', component:_import('Error'),hidden: true},
  
]



//异步数据
const asyncRouterMap = [
       
        {
            path: '/base',
            component:Layout,
            name:'base',  
            icon: 'iconshuju',
            color:'#ff6600',
            meta:{
                msg:'基础数据管理'  
            },
            children:[
                {
                    path:'index',
                    component: _import('base/index'),
                    name: 'index',
                    meta:{
                       msg:'测试2'  
                   },   
                },
                {
                    path:'ceshi',
                    component: _import('base/ceshi'),
                    name: 'ceshi',
                    meta:{
                       msg:'测试'  
                   },   
                },
    
                 {
                     path:'hospitalAdmin',
                     component: _import('base/HospitalAdmin'),
                     name: 'hospitalAdmin',
                     meta:{
                        msg:'医院管理'  
                    },   
                 },
                 {
                    path:'distribution',
                    component: _import('base/distribution'),
                    name: 'distribution',
                    meta:{
                        msg:'配送企业管理'  
                    },   
                 },
                 {
                    path:'editdistribution',
                    component: _import('base/editdistribution'),
                    name: 'editdistribution',
                    hidden: true,
                    meta:{
                        msg:'编辑配送企业'  
                    },   
                 },
                 {
                    path:'adddistribution',
                    component: _import('base/adddistribution'),
                    name: 'adddistribution',
                    hidden: true,
                    meta:{
                        msg:'新增配送企业'  
                    },   
                 },
                 {
                    path:'producerManagement',
                    component: _import('base/producerManagement'),
                    name: 'producerManagement',
                    meta:{
                        msg:'生产厂家管理'  
                    },   
                 },
                 {
                    path:'addproducerManagement',
                    component: _import('base/addproducerManagement'),
                    name: 'addproducerManagement',
                    hidden:true,
                    meta:{
                        msg:'新增生产企业'  
                    },   
                 },
                 {
                    path:'editproducerManagement',
                    component: _import('base/editproducerManagement'),
                    name: 'editproducerManagement',
                    hidden:true,
                    meta:{
                        msg:'编辑生产企业'  
                    },   
                 },
                 {
                    path:'managementCategories',
                    component: _import('base/managementCategories'),
                    name: 'managementCategories',
                    meta:{
                        msg:'管理类别'  
                    },   
                 },
                 {
                    path:'department',
                    component: _import('base/department'),
                    name: 'department',
                    meta:{
                        msg:'科室管理'  
                    },    
                 },
                 {
                    path:'warehouse',
                    component: _import('base/warehouse'),
                    name: 'warehouse',
                    meta:{
                        msg:'库房管理'  
                    },    
                 },
                 {
                    path:'storageBin',
                    component: _import('base/storageBin'),
                    name: 'storageBin',
                    meta:{
                        msg:'库位管理'  
                    },    
                 },
                 {
                    path:'countingUnit',
                    component: _import('base/countingUnit'),
                    name: 'countingUnit',
                    meta:{
                        msg:'计数单位管理'  
                    },    
                 },
                 {
                    path:'rolemanagement',
                    component: _import('base/rolemanagement'),
                    name: 'rolemanagement',
                    meta:{
                        msg:'角色管理'  
                    },    
                 },
                 {
                    path:'rolemessage',
                    component: _import('base/rolemessage'),
                    name: 'rolemessage',
                    hidden:true,
                    meta:{
                        msg:'角色授权'  
                    },    
                 },
                 {
                    path:'operationFlow',
                    component: _import('base/operationFlow'),
                    name: 'operationFlow',
                    meta:{
                        msg:'业务流程设置'  
                    },    
                 },
                 {
                    path:'group',
                    component: _import('base/group'),
                    name: 'group',
                    meta:{
                        msg:'分组管理'  
                    },    
                 },
                 {
                    path:'personnel',
                    component: _import('base/personnel'),
                    name: 'personnel',
                    meta:{
                        msg:'人员管理'  
                    },    
                 },
                 {
                    path:'parameter',
                    component: _import('base/parameter'),
                    name: 'parameter',
                    meta:{
                        msg:'参数管理'  
                    },    
                 },
                 {
                    path:'fileManagemenmeter',
                    component: _import('base/fileManagemenmeter'),
                    name: 'fileManagemenmeter',
                    meta:{
                        msg:'文件管理'  
                    },    
                 },

            ]
        },        
        {
            path: '/consumables',
            component:Layout,
            name:'consumables', 
            icon: 'iconyuanliaoxiaohao',
            color:"#F15685",
            meta:{
                msg:'耗材字典管理'  
            },
            children:[
                {
                    path:'consumablesManage',
                    component: _import('consumables/consumablesManage'),
                    name: 'consumablesManage',
                    meta:{
                        msg:'耗材管理'  
                    },       
                },
                {
                    path:'jumpDetail',
                    component: _import('consumables/consumablesManage/jumpDetail'),
                    name: 'jumpDetail',
                    // hidden:true
                    hidden:true,
                    meta:{
                        msg:'产品详情'  
                    }, 
                },
                {
                    path:'consumablesQuery',
                    component: _import('consumables/consumablesQuery'),
                    name: 'consumablesQuery',
                    meta:{
                        msg:'耗材查询'  
                    }, 
                },
                {
                    path:'modifyPrice',
                    component: _import('consumables/modifyPrice'),
                    name: 'modifyPrice',
                    meta:{
                        msg:'耗材调价管理'  
                    }, 
                },
                {
                    path:'consumablesMapping',
                    component: _import('consumables/consumablesMapping'),
                    name: 'consumablesMapping',
                    meta:{
                        msg:'平台耗材映射'  
                    }, 
                },
           ]
        },
        {
            path: '/sectionApplication',
            component:Layout,
            name:'sectionApplication', 
            icon: 'iconkeshi', 
            color:"#00B0FF",
            meta:{
                msg:'科室申请'  
            },
            children:[]
        },
        {
            path: "/planMange",
            component: Layout,
            name: "planMange",
            icon: "iconwj-jh",
            color: "#67C23A",
            meta:{
                msg:'计划管理'
            },  
            children: [
              {
                path: "medialPlan",
                component: _import("planMange/medialPlan"),
                name: "medialPlan",
                meta:{
                    msg:'医工计划'
                },  
              },
              {
                path: "planArror",
                component: _import("planMange/planArror"),
                name: "planArror",
                meta:{
                    msg:'计划审批'
                },  
              },
              {
                path: "purchaseMange",
                component: _import("planMange/purchaseMange"),
                name: "purchaseMange",
                meta:{
                    msg:'采购单管理'
                },  
              },
              {
                path: "purchaseQuery",
                component: _import("planMange/purchaseQuery"),
                name: "purchaseQuery",
                meta:{
                    msg:'采购单查询'
                },  
              }
            ]
        },
        {
            path: '/storehouse',
            component:Layout,
            name:'storehouse',
            icon: 'iconkufang', 
            color:"#67C23A",
            meta:{
                msg:'库房管理'  
            },
            children:[]
        },
        {
            path: '/secondstorehouse',
            component:Layout,
            name:'secondstorehouse',
            icon: 'iconkufang', 
            color:"#67C23A",
            meta:{
                msg:'二级库房管理'  
            },
            children:[]
        },
        {
            path: '/sterilization',
            component:Layout,
            name:'sterilization',
            icon: 'iconxiaodu', 
            color:"#67C23A",
            meta:{
                msg:'灭菌管理'
            },
            children:[
                {
                    path:'sterilizationManagement',
                    component: _import('sterilization/sterilizationLogin'),
                    name: 'sterilizationManagement', 
                    meta:{
                        msg:'灭菌登记'  
                    },  
                },
                {
                    path:'sterilizationTracing',
                    component: _import('sterilization/sterilizationTracing'),
                    name: 'sterilizationTracing',
                    // hidden:true
                    meta:{
                        msg:'灭菌追溯'  
                    },
                    
                },
                
           ]
        },
        {
            path: '/dataSupplement',
            component:Layout,
            name:'dataSupplement',
            icon: 'iconICAtubiao_jifenbulu', 
            color:"#67C23A",
            meta:{
                msg:'数据补录'
            },
            children:[
                {
                    path:'supplement',
                    component: _import('dataSupplement/supplement'),
                    name: 'supplement',   
                    meta:{
                        msg:'跟台耗材数据补录'
                    },
                },
                {
                    path:'destroyData',
                    component: _import('dataSupplement/destroyData'),
                    name: 'destroyData',
                    // hidden:true
                    meta:{
                        msg:'撤销耗材补录数据'
                    },
                },
                
           ]
        },
        {
            path: '/handleExcption',
            component:Layout,
            name:'handleExcption',
            icon: 'icongaojingxinxi', 
            color:"#67C23A",
            meta:{
                msg:'异常处理'
            },
            children:[
                {
                    path:'voildbill',
                    component: _import('handleExcption/voildbill'),
                    name: 'voildbill',
                    meta:{
                        msg:'作废验货单'
                    },   
                },
                {
                    path:'returnInventory',
                    component: _import('handleExcption/returnInventory'),
                    name: 'returnInventory',
                    meta:{
                        msg:'历史库存退库'
                    },   
                    
                },
                
           ]
        },
        {
            path: '/invoiceControl',
            component:Layout,
            name:'invoiceControl',
            icon: 'iconfapiao1', 
            color:"#67C23A",
            meta:{
                msg:'发票管理'
            },
            children:[
                {
                    path:'invoiceEntry',
                    component: _import('invoiceControl/invoiceEntry'),
                    name: 'invoiceEntry', 
                    meta:{
                        msg:'发票录入'
                    },  
                },
                {
                    path:'invoiceControlManage',
                    component: _import('invoiceControl/invoiceControlManage'),
                    name: 'invoiceControlManage',
                    meta:{
                        msg:'发票管理'
                    },  
                    
                },           
           ]
        },
        {
            path: '/barCodemange',
            component:Layout,
            name:'barCodemange',
            icon: 'iconiconset0254', 
            color:"#67C23A",
            meta:{
                msg:'条码管理'
            },  
            children:[
                {
                    path:'printBarCode',
                    component: _import('barCodemange/printBarCode'),
                    name: 'printBarCode',
                    meta:{
                        msg:'打印空白条码'
                    },     
                }
           ]
        }, 
        {
            path: '/statementStatistics',
            component:Layout,
            name:'statementStatistics',
            icon: 'iconshujubaobiao', 
            color:"#67C23A",
            meta:{
                msg:'报表统计'
            },  
            children:[
                {
                    path:'consumablesTraceability',
                    component: _import('statementStatistics/consumablesTraceability'),
                    name: 'consumablesTraceability',   
                    meta:{
                        msg:'耗材追溯'
                    },  
                },
                {
                    path:'balanceManagement',
                    component: _import('statementStatistics/balanceManagement'),
                    name: 'balanceManagement', 
                    meta:{
                        msg:'结存管理'
                    },    
                },
                {
                    path:'warehousingDetail',
                    component: _import('statementStatistics/warehousingDetail'),
                    name: 'warehousingDetail', 
                    meta:{
                        msg:'入库明细'
                    },    
                },
                {
                    path:'receivingDetail',
                    component: _import('statementStatistics/receivingDetail'),
                    name: 'receivingDetail', 
                    meta:{
                        msg:'收发明细'
                    },    
                },
                {
                    path:'despoitDetail',
                    component: _import('statementStatistics/despoitDetail'),
                    name: 'despoitDetail', 
                    meta:{
                        msg:'出库明细'
                    },    
                },
                {
                    path:'supplybill',
                    component: _import('statementStatistics/supplybill'),
                    name: 'supplybill', 
                    meta:{
                        msg:'供应商账单'
                    },    
                },
                {
                    path:'departmentalBill',
                    component: _import('statementStatistics/departmentalBill'),
                    name: 'departmentalBill',
                    meta:{
                        msg:'科室费用账单'
                    },     
                },
                {
                    path:'purchasingHistory',
                    component: _import('statementStatistics/purchasingHistory'),
                    name: 'purchasingHistory', 
                    meta:{
                        msg:'采购历史'
                    },    
                },
                
           ]
        },
        {
            path: '/wareHousemange',
            component:Layout,
            name:'wareHousemange',
            icon: 'iconshujubaobiao', 
            color:"#67C23A",
            meta:{
                msg:'二级库房报表'
            },  
            children:[
                {
                    path:'balanceManage',
                    component: _import('wareHousemange/balanceManage'),
                    name: 'balanceManage', 
                    meta:{
                        msg:'结存管理'
                    },    
                },
                {
                    path:'expenseAccounting',
                    component: _import('wareHousemange/expenseAccounting'),
                    name: 'expenseAccounting',
                    meta:{
                        msg:'科室费用记账'
                    },     
                },            
           ]
        },
            
]


// //异步
// menusToRoutes(store.state.umen.userUmen)
// console.log('aaaaa',store.state.umen.userUmen)
// // 将菜单信息转成对应的路由信息 动态添加
// function menusToRoutes(data) {
//     const result = []
//     const children = []

//     result.push({
//         path: '/',
//         component: () => import('../pages/index.vue'),
//         children,
//     })

//     data.forEach(item => {
//         generateRoutes(children, item)
//     })

//     // children.push({
//     //     path: 'error',
//     //     name: 'error',
//     //     component: () => import('../components/Error.vue')
//     // })

//     result.push(
//         {path: '*', redirect: '/error'},
//     )

//     return result
// }

// function generateRoutes(children, item) {
//     if (item.name) {
//         children.push(asyncRouterMap[item.name])
//     } else if (item.children) {
//         item.children.forEach(e => {
//             generateRoutes(children, e)
//         })
//     }
// }

export const menuRouter = [...asyncRouterMap];
export default [...constantRouterMap,...asyncRouterMap];