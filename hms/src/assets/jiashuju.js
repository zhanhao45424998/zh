
  var m=10;
  var list = 
   {
     date: '2016-05-06',
     name: '王小虎',
     province: '上海',
     city: '普陀区',
     address: '上海市普陀区金沙江路 1518 弄',
     zip: 200333
   }
 
var list2=[];  
 for( var i=0;i<m;i++){
   list.date = i;
   list2.push({
     date: list["date"],
     name: '王小虎',
     province: '上海',
     city: '普陀区',
     address: '上海市普陀区金沙江路 1518 弄',
     zip: 200333
   })
 }  
  console.log(list2)


 
export default list2





 
 
