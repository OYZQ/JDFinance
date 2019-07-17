<template lang="html">
  <panel title="理财精选" :class="$style.panel">
      <section :class="$style.content">
          <dl :class="$style.item" v-for="item in items" :key="item.title">
              <dt>{{item.title}}<span class="red">{{item.sub}}</span></dt>
              <dd>{{item.rate}}</dd>
              <dd>{{item.text}}</dd>
          </dl>
      </section>
  </panel>
</template>

<script type="text/ecmascript-6">
import panel from "../core/panel.vue"
  export default {
      components: {
          panel,
      },
      data() {
          return {
              items: [{
                  title: "长乐盈",
                  sub: "180天可质押",
                  rate: "5.80%",
                  text: "近1年历史年化投资回报率",
              },{
                  title: "京智0号",
                  sub: "大数据赋能",
                  rate: "6.00%",
                  text: "近1年历史年化投资回报率",
              },{
                  title: "建信养老飞益鑫",
                  sub: "",
                  rate: "4.57%",
                  text: "近7日年化收益",
              },{
                  title: "小白基金",
                  sub: "超短期",
                  rate: "4.50%",
                  text: "近7日年化收益",
              }],
          }
      }
  }
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.panel{
    @include panel;
    .content{
        @include flex(row);
        justify-content: space-around;
        box-sizing: border-box;
        .item{
            position: relative;
            width: 50%;
            &:after{
                content: "";
                width: 1px;
                height: 136px;
                display: block;
                position: absolute;
            }
        }
    }
}
</style>
