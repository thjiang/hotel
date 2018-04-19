<style lang="less">
    .cityBox{
        display: flex;
        justify-content: center;
        width: 1080px;
        margin: 30px auto 20px;
        .cityCard {
            // display: 
            width: 175px;
            height: 400px;
            border: 1px solid skyblue;
            cursor: pointer;
        }
        .cityCard:hover {
            animation: widen 0.5s;
            animation-fill-mode: forwards;
            animation-timing-function: ease;
        }
    }
    @keyframes widen {
        from {
            width: 175px;
        }
        to {
            width: 600px;
        }
    }
</style>

<template>
    <ul class="cityBox">
        <li class="cityCard"></li>
        <li class="cityCard"></li>
        <li class="cityCard"></li>
        <li class="cityCard"></li>
        <li class="cityCard"></li>
        <li class="cityCard"></li>
    </ul>
</template>

<script>
export default {
    name: 'cityBox',
    data: function() {
        return {
            page: "cityBox"
        };
    }
};
</script>
