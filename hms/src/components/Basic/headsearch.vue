<template>
    <div class="headsearch">
        <div class="headsearch-title">
            <i class="el-icon-search"></i>
            <span>&nbsp搜索条件</span>
        </div>
        <div class="headsearch-content">      
            <div>
                <slot name="mains"></slot>
            </div>
            <div class="headsearch-bottom">
                <slot name="anniu"></slot>
            </div>   
        </div>
      
    </div>
</template>

<script>
export default {
  
  props: {
    title: {
        type:String
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.headsearch{
    .headsearch-title{
            padding-left: 20px;
            height: 46px;
            background:$main-color;
            color: #f2f2f2;
            font-weight: 700;
            line-height: 46px;
            border-radius: 4px 4px 0 0;
            font-size: 20px;
    }
    .headsearch-content{
            padding-top: 20px;
            border: 1px solid $main-color;
            border-top:none;
            .headsearch-bottom{
                  margin: 20px auto 0px auto;
                  text-align: center;
                  padding: 10px 0px;
                  background: #dfdfdf;
            }
    }
}

</style>
