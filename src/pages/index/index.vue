<template>
  <div class="home">
    <SearchBar :disabled="true" />
    <HomeCard/>
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/HomeCard";
export default {
  data() {
    return {};
  },

  components: {
    SearchBar,
    HomeCard
  },

  methods: {},

  created() {
    // let app = getApp()
  }
};
</script>

<style lang="scss" scoped>
</style>
