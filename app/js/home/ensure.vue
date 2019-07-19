<template lang="html">
  <panel title="-保险保障-" :class="$style.panel">
      <section :class="$style.content">
          <Slider :options="options" :items="items" cname="product-slider"></Slider>
      </section>
  </panel>
</template>

<script type="text/ecmascript-6">
import panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
  components: {
    panel,
    Slider
  },
  data() {
    return {
      items: [
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/19965/4/1946/28370/5c18958aE9e8a930d/9810bed7979e6bd5.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/27283/39/2034/26756/5c1895b5Ecbfdf7ed/6a0755f1f40e2eb9.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/27014/35/2022/24897/5c1895d9Ef095679a/c0918d244bbfb2e5.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/19150/30/2037/31576/5c1895f2Eb431149e/7a71e063250f8b0d.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/9279/3/9618/27165/5c189693E5d54e2cb/c263629839992767.jpg?width=210&height=260"
        }
      ],
      options: {
        slidesPerView: 2.3,
        spaceBetween: 30,
        freeMode: true
      }
    };
  }
};
</script>

<style lang="scss">
.product-slider {
  .swiper-container {
    box-sizing: border-box;
    padding: 0 24px;
    .swiper-slide {
      a {
        display: inline-block;
        width: 100%;
        img {
          width: 100%;
          display: block;
          height: 314px;
          border: 1px solid #fafafa;
        }
      }
    }
  }
}
</style>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  .content {
    padding-bottom: 40px;
    position: relative;
    & > div {
      position: absolute;
      font-size: 28px;
      color: #999;
      right: 20px;
      top: -70px;
    }
  }
}
</style>
