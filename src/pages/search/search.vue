<template>
    <div class="search-wrapper">
        <TagGroup :value="tags" header-text="热门搜索" btn-text="换一批" @onTagClick="onTagClick" @onBtnClick="onBtnClick"/>
        <SearchItem icon="apps-o" title="计算机科学" subTitle="类别"/>
    </div>
</template>

<script>
import Tag from '../../components/base/Tag'
import TagGroup from '../../components/base/TagGroup'
import SearchItem from '../../components/search/SearchItem'
export default {
    components:{
        Tag,
        TagGroup,
        SearchItem
    },
    data(){
        return {
            tags:[
                'aaaaaaaaa',
                'bbbbbbbbbb',
                'cccccccccccc',
                'ddddddddddd',
                'eeeeeeeeee'
            ]
        }
    },
    methods: {
        onTagClick(text,index){
            console.log('tag click',text,'no.'+index);
            
        },
        onBtnClick(){
            console.log('btn');
            
        }
    },
};
</script>

<style lang="scss" scoped>
    
</style>