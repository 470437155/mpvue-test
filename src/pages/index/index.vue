<template>
  <div>
    <div class="home" v-if="isAuth">
      <SearchBar :disabled="true" :hotSearch="hotSearch" @onClick="onSearchBarClick"/>
      <HomeCard :data="homeCard" />
      <HomeBanner
        title="来了来了"
        subTitle="6666666"
        img="http://www.youbaobao.xyz/book/res/bg.jpg"
        @onClick="onBannerClick"
      />
      <div :style="{marginTop:'23px'}">
        <HomeBook
          title="为你推荐"
          :data="recommend"
          :row="1"
          :col="3"
          mode="col"
          btn-text="换一批"
          @onMoreClick="() => recommendChange('recommend')"
          @onBookClick="onHomeBookClick"
        />
      </div>
      <div :style="{marginTop:'23px'}">
        <HomeBook
          title="免费阅读"
          :data="freeRead"
          :row="2"
          :col="2"
          mode="row"
          btn-text="换一批"
          @onMoreClick="() => recommendChange('freeRead')"
          @onBookClick="onHomeBookClick"
        />
      </div>
      <div :style="{marginTop:'23px'}">
        <HomeBook
          title="当前最热"
          :data="hotBook"
          :row="1"
          :col="4"
          mode="col"
          btn-text="换一批"
          @onMoreClick="() => recommendChange('hotBook')"
          @onBookClick="onHomeBookClick"
        />
      </div>
      <div :style="{marginTop:'23px'}">
        <HomeBook
          title="分类"
          :data="category"
          :row="2"
          :col="2"
          mode="category"
          btn-text="查看全部"
          @onMoreClick="onCategoryMoreClick"
          @onBookClick="onHomeBookClick"
        />
      </div>
    </div>
    <Auth v-if="!isAuth" @getUserInfo="init" />
  </div>
</template>

<script>
import SearchBar from "../../components/home/SearchBar";
import HomeCard from "../../components/home/HomeCard";
import HomeBanner from "../../components/home/HomeBanner";
import HomeBook from "../../components/home/HomeBook";
import Auth from "../../components/base/Auth";
import {
  getHomeData,
  recommend,
  freeRead,
  hotBook,
  register
} from "../../api/index";
import {
  getSetting,
  getUserInfo,
  setStorageSync,
  getStorageSync,
  getUserOpenId,
  showLoading,
  hideLoading
} from "../../api/wechat";
export default {
  data() {
    return {
      homeCard: {},
      hotSearch: "",
      banner: {},
      recommend: [],
      freeRead: [],
      hotBook: [],
      category: [],
      isAuth: true
    };
  },

  components: {
    SearchBar,
    HomeCard,
    HomeBanner,
    HomeBook,
    Auth
  },
  mounted() {
    this.init();
    // this.getHomeData();
  },
  methods: {
    getHomeData(openid, userInfo) {
      getHomeData({ openId: openid })
        .then(res => {
          const {
            data: {
              hotSearch: { keyword },
              shelf,
              banner,
              recommend,
              freeRead,
              hotBook,
              category,
              shelfCount
            }
          } = res.data;
          this.hotSearch = keyword;
          this.banner = banner;
          this.recommend = recommend;
          this.freeRead = freeRead;
          this.hotBook = hotBook;
          this.category = category;
          this.homeCard = {
            bookList: shelf,
            num: shelfCount,
            userInfo
          };
          hideLoading();
        })
        .catch(() => {
          hideLoading();
        });
    },
    recommendChange(key) {
      switch (key) {
        case "recommend":
          recommend().then(res => {
            this.recommend = res.data.data;
          });
          break;
        case "freeRead":
          freeRead().then(res => {
            this.freeRead = res.data.data;
          });
          break;
        case "hotBook":
          hotBook().then(res => {
            this.hotBook = res.data.data;
          });
          break;
      }
    },
    onHomeBookClick() {
      console.log("book click");
    },
    onBookMoreClick() {
      console.log("more click");
    },
    onSearchBarClick() {
      console.log(111);  
      this.$router.push('/pages/search/main')
    },
    onBannerClick() {
      console.log("banner click");
    },
    getUserInfo() {
      const onOpenIdComplete = (openId, userInfo) => {
        this.getHomeData(openId, userInfo);
        register(openId, userInfo);
      };
      getUserInfo(
        userInfo => {
          console.log(userInfo);
          setStorageSync("userInfo", userInfo);
          const openId = getStorageSync("openId");
          if (!openId || openId.length === 0) {
            getUserOpenId(openId => onOpenIdComplete(openId, userInfo));
          } else {
            onOpenIdComplete(openId, userInfo);
          }
        },
        res => {
          console.log("fail"); //获取用户信息，抛出异常
        }
      );
    },
    getSetting() {
      getSetting(
        "userInfo",
        () => {
          this.isAuth = true;
          showLoading("正在加载");
          this.getUserInfo();
        },
        () => {
          this.isAuth = false;
        }
      );
    },
    init() {
      this.getSetting();
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
