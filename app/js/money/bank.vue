<template lang="html">
  <panel title="银行精选" :class="$style.panel">
      <section :class="$style.content">
          <div class="arrow">
              更多银行服务>
          </div>
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
            "//img12.360buyimg.com/jrpmobile/jfs/t11146/24/2920754736/6944/5845636d/5cdd0a6eN9927ae25.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t11146/24/2920754736/6944/5845636d/5cdd0a6eN9927ae25.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/78161/22/1122/6862/5cf64f57E22d73ec6/6db7f006167ae90c.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/52696/34/1660/7438/5cf64f6aE85f1676e/bded5460995cc76e.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t26410/345/1052784155/8412/66e542af/5bc04992N0d13e713.jpg?width=210&height=260"
        }
      ],
      options: {
        slidesPerView: 3.1,
        spaceBetween: 20,
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
          height: 5.5rem;
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
  >h4 {
    text-align: left;
    font-size: 32px;
    font-weight: 700;
    padding: 0 .9375rem;
  }
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
