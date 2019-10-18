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
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
          <div class="book-img-wrapper">
            <ImageView
              src="https://www.youbaobao.xyz/book/res/img//EarthSciences/978-981-10-3713-9_CoverFigure.jpg"
            />
          </div>
        </div>
        <div class="shelf-wrapper">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper" @click="onFeedBackClick">
        <span>反馈</span>
      </div>
    </div>
    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ImageView from "../../components/base/ImageView";
import Dialog from "vant-weapp/dist/dialog/dialog"
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
    sign() {},
    onFeedBackClick(){
      Dialog.confirm({
        title:'反馈',
        message:"您是否确认提交反馈信息",
        confirmButtonText:"是",
        cancelButtonText:'否'
      }).then(()=>{
        console.log('是');
      }).catch(()=>{
        console.log('否');
        
      })
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
.home-card {
  background-image: linear-gradient(-90deg, #54575f 0%, #595b60 100%);
  border-radius: 15px;
  margin: 22px 20px 0;
  .home-card-inner {
    position: relative;
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
      display: flex;
      margin-top: 16.5px;
      .book-wrapper {
        flex: 1;
        display: flex;
        justify-content: space-around;
        .book-img-wrapper {
          width: 72px;
          height: 101px;
        }
      }
      .shelf-wrapper {
        display: flex;
        align-items: center;
        .shelf {
          font-size: 11px;
          width: 11px;
          word-break: break-word;
          opacity: 0.8;
          color: #ffffff;
        }
      }
    }
    .feedback-wrapper {
      border-radius: 100px 0 0 100px;
      background: #707070;
      width: 44.5px;
      height: 24px;
      position: absolute;
      right: 0;
      top: 21px;
      display: flex;
      align-items: center;
      justify-content: center;
      // line-height: 24px;
      text-align: center;
      span{
        color: #fff;
        font-size: 11px;
      }
    }
  }
}
</style>