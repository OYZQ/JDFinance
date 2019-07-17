<template lang="html">
  <panel title="理财精选" :class="$style.panel">
      <section :class="$style.content">
          <div :class="$style.item">
               <ul>
                  <li>
                    <p :class="$style.p0">长乐盈<span>180天可质押</span></p>
                    <p :class="$style.p1">5.80%</p>
                    <p :class="$style.p2">近1年历史年化投资回报率</p>
                  </li>    
                  <li>
                    <p :class="$style.p0">建信养老飞益鑫</p>
                    <p :class="$style.p1">4.57%</p>
                    <p :class="$style.p2">近7日年化收益</p>
                  </li>    
              </ul>
          </div>
          <div :class="$style.item">
              <ul>
                  <li>
                    <p :class="$style.p0">京智0号<span>大数据赋能</span></p>
                    <p :class="$style.p1">6.00%</p>
                    <p :class="$style.p2">近1年历史年化投资回报率</p>
                  </li>    
                  <li>
                    <p :class="$style.p0">小白基金<span>超短期</span></p>
                    <p :class="$style.p1">4.50%</p>
                    <p :class="$style.p2">近7日年化收益</p>
                  </li>    
              </ul>
          </div>
      </section>
  </panel>
</template>

<script type="text/ecmascript-6">
import Panel from "../core/panel.vue";
export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  > h4 {
    font-weight: bolder;
  }
  .content {
    @include list(row);
    .item {
      width: 50%;
      padding-left: 32px;
      padding-top: 32px;
      box-sizing: border-box;
      float: left;
      position: relative;
      li {
        padding-bottom: 64px;
        border-bottom: 1px solid #ddd;
      }
      .p0 {
        color: #333;
        font-weight: 700;
        font-size: 30px;
        display: block;
        height: 42px;
        line-height: 42px;
      }
      span {
        content: "180天可质押";
        box-sizing: border-box;
        border: 1px solid #ff5155;
        color: #ff5155;
        font-size: 25px;
        margin-left: 10px;
      }
      .p1 {
        font-weight: 700;
        font-size: 44px;
        height: 58px;
        line-height: 58px;
        color: #ff5155;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .p2 {
        font-size: 24px;
        height: 34px;
        line-height: 34px;
        color: #999;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
