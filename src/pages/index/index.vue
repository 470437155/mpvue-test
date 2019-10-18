<template>
  <div class="home">
    <SearchBar :disabled="true" />
    <HomeCard />
    <HomeBanner title="来了来了" subTitle="6666666" src />
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/HomeCard";
import HomeBanner from "../../components/home/HomeBanner";
export default {
  data() {
    return {};
  },

  components: {
    SearchBar,
    HomeCard,
    HomeBanner
  },

  methods: {},

  created() {
    // let app = getApp()
  }
};
</script>

<style lang="scss" scoped>
</style>
