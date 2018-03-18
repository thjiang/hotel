<style lang="less">
    .hotelBox{
        display: flex;
        flex-wrap: wrap;
        width: 1082px;
        margin: 30px auto 20px;
        border: 1px solid skyblue;
        .hotel {
            position: relative;
            height: 240px;
            border: 1px solid skyblue;
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
                transition-property: transform;
                transition-duration: 1s;
                transition-timing-function: ease;
            }
            .position {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 300px;
                height: 80px;
                color: #fff;
                text-align: center;
                cursor: pointer;
                h3 {
                    font-weight: 100;
                    font-size: 24px;
                    text-shadow: 1px 1px 8px #005aff;
                }
                p {
                    margin-top: 10px;
                    font-weight: 100;
                    font-size: 20px;
                    text-shadow: 1px 1px 8px #6e00ff;
                }
            }
        }
        .hotel:hover > a > img {
            transform: scale(1.3);
        }
        .small {
            width: 360px;
        }
        .mid {
            width: 720px;
        }
    }
</style>

<template>
    <section class="hotelBox">
        <div class="hotel small">
            <a href="#">
                <img src="http://m.elongstatic.com/promotions/index/fold/fold6/pic/5002.jpg">
                <div class="position">
                    <h3>石梅湾威斯汀度假酒店</h3>
                    <p>中国·海南</p>
                </div>
            </a>
        </div>
        <div class="hotel mid">
            <a href="#">
                <img src="http://img4.tuniucdn.com/gulangyu2.jpg">
                <div class="position">
                    <h3>石梅湾威斯汀度假酒店</h3>
                    <p>中国·海南</p>
                </div>
            </a>
        </div>
        <div class="hotel small">
            <a href="#">
                <img src="http://m.elongstatic.com/promotions/index/fold/fold6/pic/4001.jpg">
                <div class="position">
                    <h3>石梅湾威斯汀度假酒店</h3>
                    <p>中国·海南</p>
                </div>
            </a>
        </div>
        <div class="hotel small">
            <a href="#">
                <img src="http://img4.tuniucdn.com/hotelnewpc/jingxuan/guzhen.jpg">
                <div class="position">
                    <h3>石梅湾威斯汀度假酒店</h3>
                    <p>中国·海南</p>
                </div>
            </a>
        </div>
        <div class="hotel small">
            <a href="#">
                <img src="http://m.tuniucdn.com/fb2/t1/G1/M00/2B/02/Cii9EFds2diISHaDAABlSlyF60IAAGuOACzedcAAGVi269.jpg">
                <div class="position">
                    <h3>石梅湾威斯汀度假酒店</h3>
                    <p>中国·海南</p>
                </div>
            </a>
        </div>
        <div class="hotel mid">
            <a href="#">
                <img src="http://img4.tuniucdn.com/hotelnewpc/faxian/suzhou.jpg">
                <div class="position">
                    <h3>石梅湾威斯汀度假酒店</h3>
                    <p>中国·海南</p>
                </div>
            </a>
        </div>
        <div class="hotel small">
            <a href="#">
                <img src="http://js.trip.cmbchina.com/platinumHotelsDetail/11124662/hotels_shuhehuajiantang_s_01.jpg">
                <div class="position">
                    <h3>石梅湾威斯汀度假酒店</h3>
                    <p>中国·海南</p>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'hotelBox',
    data: function() {
        return {
            page: "hotelBox"
        };
    }
};
</script>
