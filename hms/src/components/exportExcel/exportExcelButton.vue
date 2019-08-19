<template>
    <div class="container">
        <div class="export-excel" @click="exportExcel">
            <i  class="iconfont iconexcel" style="font-size: 15px"></i>
            导出到excel
        </div>
    </div>
</template>

<script>
//     import {exportExcel} from '@/api/login'
//     export default {
//         name: "export-excel-button",
//         props: {
//             url: {
//                 type: String,
//                 default: ''
//             },
//             queryField:{
//                 type:Object,
//                 default:{},
//             },
//             fileName:{
//                 type: String,
//                 default: '导出文件'
//             },
//         },
//         mounted(){
//             console.log(add)
//         },
//         methods: {
//             exportExcel() {
//                 //let url = "/User/exportUserExcel";
//                 let param = "?";
//                 for (let key in this.queryField) {
//                     let val = this.queryField[key];
//                     if (val) {
//                         param += key + "=" + val + "&";
//                     }
//                 }
//                 param = param.substr(0, param.length - 1);
//                 //location.href = this.url + param;
//                 let url = this.url + param;
//                 let fileName = this.fileName+this.getRandom()+'.xls'
//                 exportExcel(url,fileName).then()
//             },
//             getRandom() {
//                 let numberList = Math.floor(Math.random() * 100000)
//                 if (numberList >= 10000) {
//                     return numberList;
//                 } else {
//                     return numberList + 10000;
//                 }
//             },
//         },
//     }
// </script>

// <style scoped lang="scss">
//     .container{
//         .export-excel {
//             cursor:pointer;
//             display: inline-block;
//             border: 1px solid #1d78dd;
//             border-radius: 3px;
//             height: 28px;
//             min-width: 84px;
//             line-height: 28px;
//             padding: 0 15px;
//             font-size: 12px;
//             color: #1d78dd;
//             &:hover {
//                 background-color: mix(#ffffff, #1d78dd, 90%);
//             }
//         }
//     }
// </style>
