<template lang="html">
  <panel title="ada" :class="$style.panel">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t20746/93/1719082958/12040/306a2296/5b31b40dNeefe4c3c.png?width=750&height=200">
  </panel>
</template>

<script type="text/ecmascript-6">
import panel from "../core/panel.vue";
export default {
  components: {
    panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  >h4 {
    display: none;
  }
  img {
    width: 100%;
    padding-bottom: 30px;
  }
}
</style>
