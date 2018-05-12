<style lang="less">
    .cityBox{
        display: flex;
        justify-content: center;
        width: 1080px;
        margin: 30px auto 20px;
        overflow: hidden;
        .cityCard {
            position: relative;
            width: 180px;
            height: 400px;
            border: 1px solid skyblue;
            cursor: pointer;
            .title {
                position: absolute;
                left: 0;
                top: 0;
                overflow: hidden;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.3);
                h4 {
                    position: absolute;
                    left: 50%;
                    top: 45%;
                    transform: translate(-50%, -50%);
                    width: 30px;
                    color: #FFF;
                    font-size: 30px;
                    font-weight: 100;
                    line-height: 40px;
                    -webkit-font-smoothing: subpixel-antialiased;
                }
            }
            .cityPic {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 100%;
                overflow: hidden;
                // background: url(http://b2-q.mafengwo.net/s8/M00/DC/2A/wKgBpVUh7wSAOeDSAAeg0DjpSb030.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL3AxLXEubWFmZW5nd28ubmV0L3M4L00wMC82Mi83OS93S2dCcFZodUN6Q0FJa3RIQUFBTkc4TDlCUU0xNjAucG5n%2Fgravity%2FNorthWest%2Fdx%2F20%2Fdy%2F21) no-repeat center 0;
                .img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
        .cityCard:hover {
            animation: widen 0.5s;
            animation-fill-mode: forwards;
            animation-timing-function: ease;
            .title {
                display: none;
            }
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
        <li class="cityCard">
            <div class="title">
                <h4>北京</h4>
            </div>
            <div class="cityPic">
                <img src="http://n4-q.mafengwo.net/s5/M00/FB/74/wKgB3FGE3yuAKsBsAAvinzlwgnk13.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL3AxLXEubWFmZW5nd28ubmV0L3M4L00wMC82Mi83OS93S2dCcFZodUN6Q0FJa3RIQUFBTkc4TDlCUU0xNjAucG5n%2Fgravity%2FNorthWest%2Fdx%2F20%2Fdy%2F21">
            </div>
        </li>
        <li class="cityCard">
            <div class="title">
                <h4>苏州</h4>
            </div>
            <div class="cityPic">
                <img src="http://n1-q.mafengwo.net/s6/M00/2B/D6/wKgB4lL1j5qAcyEtAA7I3OGIe1Q44.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL3AxLXEubWFmZW5nd28ubmV0L3M4L00wMC82Mi83OS93S2dCcFZodUN6Q0FJa3RIQUFBTkc4TDlCUU0xNjAucG5n%2Fgravity%2FNorthWest%2Fdx%2F20%2Fdy%2F21">
            </div>
        </li>
        <li class="cityCard">
            <div class="title">
                <h4>杭州</h4>
            </div>
            <div class="cityPic">
                <img src="http://n2-q.mafengwo.net/s6/M00/90/F3/wKgB4lKbQL6AUh2NAAIYXevlHHU11.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL3AxLXEubWFmZW5nd28ubmV0L3M4L00wMC82Mi83OS93S2dCcFZodUN6Q0FJa3RIQUFBTkc4TDlCUU0xNjAucG5n%2Fgravity%2FNorthWest%2Fdx%2F20%2Fdy%2F21">
            </div>
        </li>
        <li class="cityCard">
            <div class="title">
                <h4>丽江</h4>
            </div>
            <div class="cityPic">
                <img src="http://n2-q.mafengwo.net/s5/M00/5F/09/wKgB2lHnqsGAPXJmAAZVXqzEhC471.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL3AxLXEubWFmZW5nd28ubmV0L3M4L00wMC82Mi83OS93S2dCcFZodUN6Q0FJa3RIQUFBTkc4TDlCUU0xNjAucG5n%2Fgravity%2FNorthWest%2Fdx%2F20%2Fdy%2F21">
            </div>
        </li>
        <li class="cityCard">
            <div class="title">
                <h4>三亚</h4>
            </div>
            <div class="cityPic">
                <img src="http://n3-q.mafengwo.net/s5/M00/94/BC/wKgB3FDjAxWAb0sWAAY9_6G8nwY98.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL3AxLXEubWFmZW5nd28ubmV0L3M4L00wMC82Mi83OS93S2dCcFZodUN6Q0FJa3RIQUFBTkc4TDlCUU0xNjAucG5n%2Fgravity%2FNorthWest%2Fdx%2F20%2Fdy%2F21">
            </div>
        </li>
        <li class="cityCard">
            <div class="title">
                <h4>大理</h4>
            </div>
            <div class="cityPic">
                <img src="http://n2-q.mafengwo.net/s7/M00/79/3A/wKgB6lSoP1GAMiArAB3lLGJg43o03.jpeg?imageMogr2%2Fthumbnail%2F%21690x450r%2Fgravity%2FCenter%2Fcrop%2F%21690x450%2Fquality%2F90%7Cwatermark%2F1%2Fimage%2FaHR0cDovL3AxLXEubWFmZW5nd28ubmV0L3M4L00wMC82Mi83OS93S2dCcFZodUN6Q0FJa3RIQUFBTkc4TDlCUU0xNjAucG5n%2Fgravity%2FNorthWest%2Fdx%2F20%2Fdy%2F21">
            </div>
        </li>
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
