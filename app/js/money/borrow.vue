<template lang="html">
  <panel  title="白条" :class="$style.panel">
        <section :class="$style.content">
          <div class="arrow">
              年轻不留白>
          </div>
        </section>
        <div :class="$style.bottom">
            <div :class="$style.left">
                <div :class="$style.cricle">
                    <div :class="$style.text">小白信用分</div>
                </div>
                <div :class="$style.text2">登录查看</div>
            </div>
            <section :class="$style.list">
                <div :class="$style.item" v-for="item in enters" :key="item.img">
                    <router-link :to="{ name: item.href}"> 
                        <img :src="item.img" alt="item.title">
                        <h4>{{ item.title }}</h4>
                    </router-link>
                </div>
            </section>
        </div>
  </panel>
</template>

<script type="text/ecmascript-6">
import panel from "../core/panel.vue";
export default {
  components: {
    panel
  },
  data() {
    return {
      enters: [
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56",
          title: "白条"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56",
          title: "还款"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56",
          title: "1元抢券"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56",
          title: "小白卡"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56",
          title: "金条"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56",
          title: "校园"
        }
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    text-align: left;
    font-size: 36px;
    font-weight: 1000;
    padding: 0 0.9375rem;
  }
  .content {
    position: relative;
    & > div {
      position: absolute;
      font-size: 28px;
      color: #999;
      right: 20px;
      top: -70px;
    }
  }
  .bottom {
    display: flex;
    margin: 0 22px;
    .left {
      width: 40%;
      margin-right: 10px;
      position: relative;
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, 0.15);
      .cricle {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background-color: #fff;
        border: 15px solid rgb(243, 245, 247);
        position: absolute;
        left: 0.3rem;
        top: 0.3rem;
        .text {
          text-align: center;
          width: 100%;
          font-family: PingFangSC-Medium;
          font-size: 24px;
          letter-spacing: -0.0375rem;
          height: 1.0625rem;
          line-height: 1.0625rem;
          top: 2.875rem;
          position: absolute;
          top: 1.4rem;
          left: 0;
          color: #c4a36c;
        }
      }
      .text2 {
        font-family: STHeitiSC-Medium;
        font-size: 24px;
        background: #d4b575;
        width: 3.7rem;
        margin: 0 auto;
        height: 1.2rem;
        line-height: 1.3rem;
        text-align: center;
        border-radius: 0.9375rem;
        position: relative;
        top: 4.5rem;
        color: white;
      }
    }
  }
  .list {
    @include list(row);
    box-shadow: 0 0 0.625rem 0.03125rem rgba(101, 118, 155, 0.15);
    width: 70%;
    height: 300px;
    background: #fff;
    padding-bottom: 20px;
    justify-content: space-around;
    padding:0;
    a {
      text-decoration: none;
    }
    .item {
      text-align: center;
      width: 33.33%;
      margin: 20px 0 0 0;
      box-sizing: border-box;
      img {
        display: inline-block;
        width: 56px;
        height: 56px;
      }
      h4 {
        font-size: 24px;
        color: #333;
      }
    }
  }
}
</style>
