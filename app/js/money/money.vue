<template lang="html">
  <panel title="赏金任务" :class="$style.panel">
      <section :class="$style.content">
          <div class="arrow">
              查看更多任务>
          </div>
          <Slider :options="options" :items="items" cname="product-slider"></Slider>
      </section>
      <div :class="$style.img">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/7640/35/4322/21318/5bda6023E656cbbbb/b2ddefd7ef80d7aa.png?width=750&height=200">
      </div>
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
            "//img12.360buyimg.com/jrpmobile/jfs/t26893/316/1416172900/5740/58f20b1e/5bc82e3aN7aa90a89.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t26767/72/1365822552/8516/2e071d95/5bc82e6eN0be93809.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t27040/190/1395454031/8316/d3d74de2/5bc82eb2N34a7625d.png?width=210&height=260"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t26182/297/1417522782/7864/19181a3b/5bc82ec0N0824153d.png?width=210&height=260"
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
    & > div {
      position: absolute;
      font-size: 28px;
      color: #999;
      right: 20px;
      top: -70px;
    }
  }
  .img{
    img{
      width: 100%;
      position: relative;
      top: -25px;
    }
  }
}
</style>
