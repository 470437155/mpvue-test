<template>
  <div class="search-list-wrapper">
    <SearchItem
      icon="apps-o"
      :title="category"
      sub-title="Category"
      @onClick="showList(category.title,'category')"
    />
    <SearchItem
      :icon="author.icon"
      :title="author.title"
      :sub-title="author.subTitle"
      @onClick="showList(author.title,'author')"
    />
    <SearchItem
      :icon="publisher.icon"
      :title="publisher.title"
      :sub-title="publisher.subTitle"
      @onClick="showList(publisher.title,'publisher')"
    />
    <SearchTable :data="data.list" />
  </div>
</template>

<script>
import SearchItem from "./SearchItem.vue";
import SearchTable from "./SearchTable.vue";
export default {
  components: {
    SearchTable,
    SearchItem
  },
  props: {
    data: Object
  },
  computed: {
    category() {
      return this.data.category[0].categoryText;
    },
    author() {
      return this.data.item[1];
    },
    publisher() {
      return this.data.item[2];
    }
  },
  methods: {
    showList(text, key) {
      console.log(text, key);
    }
  }
};
</script>

<style>
</style>