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
            </div>
            <div :class="$style.right"></div>
        </div>
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
  > h4 {
    text-align: left;
    font-size: 32px;
    font-weight: 700;
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
      width: 30%;
      height: 300px;
      margin-right: 10px;
      .cricle {
        width: 184px;
        height: 184px;
        border-radius: 50%;
        background-color: #fff;
        border: 20px solid rgb(243, 245, 247);
        position: relative;
        .text {
          text-align: center;
          width: 100%;
          font-family: PingFangSC-Medium;
          font-size: 0.75rem;
          letter-spacing: -0.0375rem;
          height: 1.0625rem;
          line-height: 1.0625rem;
          top: 2.875rem;
          position: absolute;
          top: 1.875rem;
          left: 0;
          color: #c4a36c;
        }
      }
    }
  }
  .right {
    width: 70%;
    height: 300px;
  }
}
</style>
