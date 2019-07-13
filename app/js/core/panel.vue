<template lang="html">
  <section :class="[panelClass,cname]">
      <h4>-{{ title }}-</h4>
      <slot/>
  </section>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    cname: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      panelClass: "panel"
    };
  }
};
</script>

<style lang="scss">
@import "../../css/element";
.panel {
  @include panel;
}
</style>
