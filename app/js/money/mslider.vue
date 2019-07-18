<template lang="html">
  <panel title="轮播图" :class="$style.panel">
      <section :class="$style.content">
          <Slider :items="items" :cname="$style.slider"></Slider>
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
            "//img12.360buyimg.com/jrpmobile/jfs/t1/31588/6/14705/52443/5cbeb2b2Ea0648bba/e05f04db25d47126.png?width=750&height=400"
        },
        {
          href: "home",
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/38925/1/7734/32802/5cef91cfE8962dc90/08a7df363c6465f2.png?width=750&height=400"
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
    display: none;
  }
  .content {
    .slider {
      margin-top: 120px;
      img {
        width: 100%;
      }
    }
  }
}
</style>
