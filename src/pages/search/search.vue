<template>
  <div class="search-wrapper">
    <SearchBar :focus="searchFocus" @onChange="onChange"/>
    <TagGroup
      :value="hotSearch"
      header-text="热门搜索"
      btn-text="换一批"
      @onTagClick="changeHotSearch"
      @onBtnClick="showBookDetail"
      v-if="hotSearch.length > 0 && !showList"
    />
    <TagGroup
      :value="historySearch"
      header-text="历史搜索"
      btn-text="清空"
      @onTagClick="clearHistorySearch"
      @onBtnClick="searchKeyWord"
      v-if="historySearch.length > 0 && !showList"
    />
    <!-- <SearchItem icon="apps-o" title="计算机科学" subTitle="类别"/>
        <SearchItem icon="apps-o" title="计算机科学" subTitle="类别"/>
    <SearchItem icon="apps-o" title="计算机科学" subTitle="类别"/>-->
    <SearchList :data="searchList" v-if="showList" />
  </div>
</template>

<script>
import SearchTable from "../../components/search/SearchTable.vue";
import Tag from "../../components/base/Tag";
import TagGroup from "../../components/base/TagGroup";
import SearchItem from "../../components/search/SearchItem";
import SearchList from "../../components/search/SearchList";
import SearchBar from "../../components/home/SearchBar.vue";
import {getStorageSync} from '../../api/wechat.js'
import {search} from '../../api'
export default {
  components: {
    SearchBar,
    SearchList,
    SearchTable,
    Tag,
    TagGroup,
    SearchItem
  },
  computed: {
    showList() {
      const keys = Object.keys(this.searchList);
      return keys.length > 0;
    }
  },
  data() {
    return {
      hotSearch: [],
      historySearch: [],
      searchList: {},
      searchFocus:true,
      openId:''
    };
  },
  mounted() {
    this.openId = getStorageSync('openId')
  },
  methods: {
    onChange(keyword){
      if(!keyword || keyword.trim().lenght === 0){
        return
      }
      this.onSearch(keyword)
    },
    onSearch(keyword){
      search({
        keyword,openId:this.openId
      }).then(res => {
        this.searchList = res.data.data
      })
    },
    clearkeyWord() {},
    clearHistorySearch() {},
    showBookDetail() {
      console.log("detail");
    },
    changeHotSearch() {
      console.log("change");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>