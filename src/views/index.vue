<style lang="less">
.header {
    height: 500px;
    width: 100%;
    text-align: center;
    // background: linear-gradient(to right,#4ac1ed 0,#6c8ad7 33%,#ffb991 66%,#ffa8b3 100%);
    background: linear-gradient(to right,#ffb991 0, #ffa8b3 100%);

    .content {
        width: 850px;
        margin: 0 auto;
        .title {
            padding-top: 80px;
            font-size: 40px;
            font-weight: lighter;
            // line-height: 60px;
            color: #fff;
            text-align: left;
        }
    }
    .recommend {
        width: 850px;
        margin: 0 auto;
        text-align: left;
        li {
            display: inline;
            margin-right: 25px;
            font-size: 14px;
            color: #fff;
            cursor: pointer;
        }
    }
    
}
</style>

<template>
    <section class="index">
        <header class="header">
            <section class="content">
                <h3 class="title">让有梦想的人走得更远</h3>
            </section>
            <search></search>
            <ul class="recommend">
                <li>万豪</li><li>喜达屋</li><li>凯悦</li><li>希尔顿</li><li>洲际</li>
            </ul>
        </header>
        <section>
            <!-- 城市展示区 -->
            <city-box></city-box>
            <!-- 酒店展示区 -->
            <hotel-box></hotel-box>
        </section>
    </section>
</template>

<script>
import search from './search.vue';
import cityBox from './cityBox.vue';
import hotelBox from './hotelBox.vue';

export default {
    data: function() {
        return {
            page: "index"
        };
    },
    components: {
        search,
        cityBox,
        hotelBox
    }
};
</script>
