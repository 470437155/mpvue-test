<template>
  <div class="home">
    <SearchBar :disabled="true" />
    <HomeCard />
    <HomeBanner
      title="来了来了"
      subTitle="6666666"
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      @onClick="onBannerClick"
    />
    <div :style="{marginTop:'23px'}">
      <HomeBook title="为你推荐" :data="data" :row="1" :col="3"/>
    </div>
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/HomeCard";
import HomeBanner from "../../components/home/HomeBanner";
import HomeBook from "../../components/home/HomeBook";
export default {
  data() {
    return {
      data: [
        {
          id: 225,
          fileName: "2016_Book_MicrofinanceEUStructuralFundsA",
          cover:
            "https://www.youbaobao.xyz/book/res/img/Economics/2016_Book_MicrofinanceEUStructuralFundsA.jpeg",
          title:
            "Microfinance, EU Structural Funds and Capacity Building for Managing Authorities",
          author: "Giovanni Nicola Pes",
          publisher: "Palgrave Macmillan",
          bookId: "2016_Book_MicrofinanceEUStructuralFundsA",
          category: 3,
          categoryText: "Economics",
          language: "en",
          rootFile: "OEBPS/9781137536013.opf"
        },
        {
          id: 88,
          fileName: "2018_Book_BetweenMobilityAndMigration",
          cover:
            "https://www.youbaobao.xyz/book/res/img/SocialSciences/978-3-319-77991-1_CoverFigure.jpg",
          title: "Between Mobility and Migration",
          author: "Peter Scholten",
          publisher: "Springer International Publishing",
          bookId: "2018_Book_BetweenMobilityAndMigration",
          category: 2,
          categoryText: "SocialSciences",
          language: "en",
          rootFile: "OEBPS/package.opf"
        },
        {
          id: 24,
          fileName: "2018_Book_SecurityInComputerAndInformati",
          cover:
            "https://www.youbaobao.xyz/book/res/img/ComputerScience/978-3-319-95189-8_CoverFigure.jpg",
          title: "Security in Computer and Information Sciences",
          author: "Erol Gelenbe",
          publisher: "Springer International Publishing",
          bookId: "2018_Book_SecurityInComputerAndInformati",
          category: 1,
          categoryText: "ComputerScience",
          language: "en",
          rootFile: "OEBPS/package.opf"
        }
      ]
    };
  },

  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook
  },

  methods: {
    onSearchBarClick() {},
    onBannerClick() {
      console.log("banner click");
    }
  },

  created() {
    // let app = getApp()
  }
};
</script>

<style lang="scss" scoped>
.book-home {
  margin-top: 23px;
}
</style>
