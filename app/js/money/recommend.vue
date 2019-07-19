<template lang="html">
  <panel title="特色推荐" :class="$style.panel">
      <div :class="$style.img">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/36686/22/12820/31089/5d0c4daaE3587b5ce/1ef075c6642db628.jpg?width=750&height=200">
      </div>
  </panel>
</template>

<script type="text/ecmascript-6">
import panel from "../core/panel.vue";
import Slider from "../core/slider.vue";
export default {
  components: {
    panel,
  },
};
</script>


<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  >h4 {
    text-align: left;
    font-size: 36px;
    font-weight: 700;
    padding: 0 .9375rem;
    padding-bottom: 26px;
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
