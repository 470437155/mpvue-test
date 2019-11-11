<template>
  <div class="search-item-wrapper" @click="onClick">
      <div class="search-item-icon">
          <div class="icon-wrapper">
              <van-icon :name="icon" color="rgba(0,0,0,.5)" :style="{width:'20px',height:'20px'}" size="20px"></van-icon>
          </div>
      </div>
      <div class="search-item-info">
          <div class="search-item-title">{{title}}</div>
          <div class="search-item-subtitle">{{subTitle}}</div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        title: String,
        subTitle: String,
        icon:String
    },
    methods:{
        onclick(){
            this.$emit('onClick')
        }
    }
}
</script>

<style lang="scss" scoped>
    .search-item-wrapper{
        padding: 15px;
        height: 36.5px;
        .search-item-icon{
            .icon-wrapper{
                width: 32px;
                height: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: #f7f7f9;
            }
        }
        .search-item-info{
            .search-item-title{
                
            }
            .search-item-subtitle{

            }
        }
    }

</style>