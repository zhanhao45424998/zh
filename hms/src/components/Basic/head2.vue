<template>
    <div class="distribution-title">
        <p>{{title}}</p>
        <template>
            <slot></slot>      
        </template>
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
<style scoped lang="scss">

      .distribution-title{
            display: flex;
            align-items: center;
            justify-content: space-between; 
            padding: 10px 10px !important;
            background: #dfdfdf;
            border-radius: 8px 8px 0px 0px ;
          p {
                font-size: 20px;
            } 
    
      }

</style>
