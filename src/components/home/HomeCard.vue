<!--  -->
<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round />
        </div>
        <div class="nickname">{{'米老鼠'}}</div>
        <div class="shelf-text">书架共有{{3}}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
          <div class="book-wrapper">
              <ImageView />
          </div>
      </div>
      <div class="feedback-wrapper"></div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ImageView from "../../components/base/ImageView";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: { ImageView },
  props: {
    data: Object,
    hasSign: {
      type: Boolean,
      default: false
    },
    signDay: {
      type: Number,
      dafault: 0
    }
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    gotoShelf() {},
    onBookClick() {},
    sign() {}
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
.home-card {
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
  .home-card-inner {
    padding: 21px 17px 20px 20px;
    box-sizing: border-box;
    .user-info {
      display: flex;
      align-items: center;
      .avatar-wrapper {
        width: 20px;
        height: 20px;
      }
      .nickname,
      .shelf-text {
        font-size: 12px;
        color: #fff;
        margin-left: 8.5px;
      }
      .shelf-text {
        opacity: 0.7;
      }
      .round-item {
        width: 4px;
        height: 4px;
        background: #a2a2a2;
        border-radius: 50%;
        margin: 0 8px;
      }
    }
    .book-info {
        .book-wrapper{

        }
    }
    .feedback-wrapper {
    }
  }
}
</style>