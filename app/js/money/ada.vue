<template lang="html">
  <panel title="ada" :class="$style.panel">
      <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/37697/16/1334/187953/5cb44c65E5dbefe83/200ce71a4347aeec.png?width=750&height=200">
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
