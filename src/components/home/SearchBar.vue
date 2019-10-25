<!--  -->
<template>
  <div class="search-bar">
    <div class="search-bar-wrapper">
      <van-icon class="search" name="search" size="16px" color="#858C96"></van-icon>
      <input placeholder-style="color:#ADB4BE;font-size:15px;" @confirm="onConfirm" confirm-type="search" @input="onChange" v-model="searchWord" :placeholder="hotSearch.length === 0? '搜索':hotSearch" :focus="focus" :maxlength="limit" :disabled="disabled" class="search-bar-input" />
      <van-icon v-if="searchWord.length >0" @click="onClearClick" class="clear" name="clear" size="16px" color="#858C96"></van-icon>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props:{
    focus:{
      type:Boolean,
      default:true
    },
    disabled:{
      type:Boolean,
      defaulr:false
    },
    limit:{
      type:Number,
      default:50
    },
    hotSearch:{
      type:String,
      default:'搜索'
    }
  },
  data() {
    //这里存放数据
    return {
      searchWord:''
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    onSearchBarClick(){
      this.$emit('onClick')
    },
    onClearClick(){
      this.searchWord=''
      this.$emit('onClear')
    },
    onChange(e){
      const {value} = e.mp.detail
      this.$emit('onChange',value)
    },
    onConfirm(e){
      const {value} = e.mp.detail
      this.$emit('onConfirm',value)
    },
    setValue(v){
      this.searchWord = v
    },
    getValue(){
      return this.searchWord
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.search-bar {
  padding: 15px 15.5px;
  .search-bar-wrapper {
    display: flex;
    height: 40px;
    box-sizing: border-box;
    align-items: center;
    background: #f5f7f9;
    border-radius: 20px;
    padding: 12px 17px;
    .search-bar-input {
      flex: 1;
      margin: 0 8px;
    }
    .search {
      display: flex;
      align-items: center;
      height: 100%;
    }
    .clear {
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
}
</style>