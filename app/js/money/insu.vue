<template lang="html">
  <panel title="热销保险" :class="$style.panel">
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
            "//img12.360buyimg.com/jrpmobile/jfs/t1/24464/26/8171/23261/5c73b40dEddca0b4d/d23341c0ec8932e9.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/19379/16/8191/19539/5c73b4aaEb1b3cb27/f2566275b974eae8.jpg?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/22706/31/8158/20065/5c73b4d1Ecd7b7948/eb412d04d9e5a9c3.jpg?width=210&height=260"
        }
      ],
      options: {
        slidesPerView: 2.7,
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
          height: 6rem;
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
  }
}
</style>
