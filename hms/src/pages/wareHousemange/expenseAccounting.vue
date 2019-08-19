<template>
    <div>
        <div @click="print">打印</div>
        <div id="form1"></div>
    </div>
</template>
<script>
import { PrintAccount } from '../../utils/doprint'
import { getLodop } from '../../utils/lodop'
export default {
    data(){
        return{

        }
    },
    methods:{
        print(){
            console.log(33)
            // console.log(this.multipkeSelect)
            // 	PrintAccount(
			// 		'商品包装码',
			// 		'3',
			// 		Connect.codeUrl,
			// 		this.multipkeSelect[i].packingCode,
			// 	)
			// 	//LODOP.PRINT()
            // 	 LODOP.PREVIEW()
            
             let LODOP = getLodop();
            LODOP.PRINT_INIT("采购单");
            LODOP.SET_PRINT_STYLE("FontSize", 18);
            LODOP.SET_PRINT_STYLE("Bold", 1);
            LODOP.ADD_PRINT_TEXT(50, 300, 260, 39, "采购单");
            LODOP.ADD_PRINT_HTM(
                88,
                200,
                350,
                600,
                document.getElementById("form1").innerHTML
            );
            LODOP.PREVIEW();

        }

    }
}
</script>
<style>

</style>

