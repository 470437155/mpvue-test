<template>
  <div class="home-banner" @click="onClick">
    <div class="bg-img" :style="{backgroundImage:bgImage}">
      <div class="title">{{title}}</div>
      <div class="subtitle">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String,
    img: String
  },
  computed:{
      bgImage(){
          return 'url('+this.img+')'
      }
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="scss" scoped>
.home-banner {
  width: 100%;
  margin-top: 20px;
  padding: 0 20px;
  box-sizing: border-box;
  .bg-img {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 125px;
    border-radius: 10px;
    background: yellow;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    .title {
      font-size: 18px;
      font-weight: 500;
      color: #fff;
    }
    .subtitle {
      padding: 5px 15px;
      background: #4585ff;
      border: 1px solid #ccc;
      border-radius: 50px;
      margin-top: 10px;
      font-size: 14px;
      font-weight: 500;
      color: #fff;
    }
  }
}
</style>