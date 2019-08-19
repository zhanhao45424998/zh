<template>
<div>
    <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            >
        <div class="dialog" v-if="sendVal" style="animation-duration: 500ms">
            <div class="dialog-container" id="mydialog" ref="mydialog" style="margin-top: 15vh;">
                <div class="dialog-title" >        
                    <div>{{title}}</div>
                    <p style="cursor: pointer;" @click.stop="closeMask"><i class="iconfont iconguanbi1"></i></p>
                </div>
                <div class="content">
                    <div class="content-center">
                        <slot></slot> 
                    </div>
                    <div class="dialog-foot">
                        <slot name="foot"></slot>
                    </div>
                </div>
            </div>        
        </div>
    </transition> 
</div>  
</template>
<script>
import animate from 'animate.css'
export default {
    name:'aa',
    props: {
        sendVal: {},
        title: {
            type: String,
            default: ''
        },
    },


    watch:{
       sendVal(val){
           if(val==true){
               this.closeAll()
           }else{
               return
           }
       }
    },
    
    mounted(){

    },
    
    data(){
        return{
            showMask: false,
        }
    },
    methods:{
        closeMask(){
            this.$emit('update:sendVal',false)         
        },

        closeAll(){
            let _this = this;
            document.addEventListener('click', function (e) {    
                e.stopPropagation()
            let flag = e.target.contains(document.getElementById('mydialog'))
            if(flag == true){
               _this.closeMask();   
               return           
            }else{
              
            }   
            })

        }
    },

}
</script>
<style lang="scss" scoped>
    .dialog{
        overflow-y: scroll;
        border-radius: 8px;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.4);
        z-index: 99;
        .dialog-container{          
                position: relative;
                margin: 0 auto 50px;
                border-radius: 2px;
                -webkit-box-shadow: 0 1px 3px rgba(0,0,0,.3);
                box-shadow: 0 1px 3px rgba(0,0,0,.3);
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                width: 50%;
            .dialog-title{
                width: 100%;
                display: flex;
                justify-content: space-between;
                border-radius: 8px 8px 0px 0px;
                font-size: 18px;
                color:$font-dcolor;
                background: $main-color;
                font-weight: 600;
                padding: 20px 14px 20px 14px;
                box-sizing: border-box;
            }
            .content{
                color: #797979;
                background: $font-dcolor;
                line-height: 26px;
                padding:20px;
                box-sizing: border-box;
                .content-center{
                    background:$bg-color;
                    padding: 10px;
                }
            }
            .dialog-foot{
                 padding: 20px;
                 text-align: center;
            }

        }
    }
</style>

