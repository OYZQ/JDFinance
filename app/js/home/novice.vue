<template lang="html">
  <panel title="理财精选" :class="$style.panel">
      <section :class="$style.content">
          <div class="item">
               <ul>
                  <li>
                    <span>长乐盈</span>
                    <p>5.80%</p>
                    <p>近1年历史年化投资回报率</p>
                  </li>    
                  <li>
                    <span>京智0号</span>
                    <p>6.00%</p>
                    <p>近1年历史年化投资回报率</p>
                  </li>    
              </ul>
          </div>
          <div class="item">
              <ul>
                  <li>
                    <span>建信养老飞益鑫</span>
                    <p>4.57%</p>
                    <p>近7日年化收益</p>
                  </li>    
                  <li>
                    <span>小白基金</span>
                    <p>4.50%</p>
                    <p>近7日年化收益</p>
                  </li>    
              </ul>
          </div>
      </section>
  </panel>
</template>

<script type="text/ecmascript-6">
import Panel from'../core/panel.vue'
export default {
  components: {
    Panel,
  }
};
</script>

<style lang="scss" module>
</style>
