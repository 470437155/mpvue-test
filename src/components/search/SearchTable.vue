<template>
  <div class="search-table-wrapper">
    <div class="search-table-inner">
      <div
        class="search-table-book"
        @click="onClick(book)"
        v-for="(book,index) in data"
        :key="index"
      >
        <div class="book-img-wrapper">
          <div class="book-img">
            <ImageView :src="book.cover" />
          </div>
        </div>
        <div class="book-info-wrapper">
          <div class="book-title">{{book.title}}</div>
          <div class="book-author">{{book.author}}</div>
          <div class="book-category">{{book.categoryText}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageView from "../base/ImageView.vue";
export default {
  components: {
    ImageView
  },
  props: {
    data: Array
  },
  methods: {
    onClick(book) {
      this.$emit("onClick", book);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-table-wrapper {
  padding: 0 16px;
  .search-table-inner {
    .search-table-book {
      margin: 14.5px 0;
      display: flex;
      align-items: center;
      .book-img-wrapper {
        .book-img {
          width: 47px;
          height: 68.5px;
        }
      }
      .book-info-wrapper {
        width: 80%;
        margin-left: 15.5px;
        .book-title {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #333;
          font-size: 16px;
          line-height: 22.5px;
          font-weight: 500;
        }
        .book-author {
          color: rgba(0, 0, 0, 0.65);
          font-size: 13px;
          line-height: 18px;
          margin-top: 5px;
        }
        .book-category {
          color: rgba(0, 0, 0, 0.45);
          font-size: 13px;
          line-height: 18px;
        }
      }
    }
  }
}
</style>