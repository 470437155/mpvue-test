<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <ImageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round height="100%" mode="scaleToFill"/>
        </div>
        <div class="sub-title">登录小程序</div>
        <div class="title">全球好书免费读</div>
      </div>
      <button class="auth-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
    </div>
  </div>
</template>

<script>
import ImageView from "./ImageView";
export default {
  components: {
    ImageView
  },
  methods:{
      getUserInfo(){          
          this.$emit('getUserInfo')
      }
  }
};
</script>

<style lang="scss" scoped>
.auth-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(63, 63, 63, 0.5);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  .auth {
    position: relative;
    border-radius: 18px;
    width: 270px;
    height: 248px;
    background: #f5f5f5;
    .auth-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 23px;

      .auth-img {
        width: 74px;
        height: 74px;
      }
      .sub-title {
        margin-top: 18px;
        font-size: 13px;
        color: #999;
        line-height: 18.5px;
      }
      .title {
        margin-top: 4px;
        font-size: 16px;
        color: #333;
        font-weight: 400;
        line-height: 22.5px;
      }
    }
    .auth-btn {
      position: absolute;
      bottom: 0;
      height: 49px;
      line-height: 49px;
      width: 100%;
      background-image: linear-gradient(90deg, #1ea3f5 0%, #0f87fc 100%);
      border-radius: 0 0 18px 18px;
      color: #fff;
    }
  }
}
</style>