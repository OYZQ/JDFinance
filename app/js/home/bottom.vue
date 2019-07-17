<template lang="html">
  <div :class="$style.bottom">
    <p>Copyright © 2004-2018 京东JD.com 版权所有</p>
    <p>投资有风险，购买需谨慎</p>
    <p>京东金融平台服务协议</p>
    <p>京东金融隐私政策</p>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style lang="scss" module>
.bottom {
  p {
    margin: 20px;
    font-size: 24px;
    line-height: 1.6;
    padding: 24px 32px;
    text-align: center;
    color: #999;
    position: relative;
    box-sizing: border-box;
    border-top: 2px solid rgb(233, 233, 233);
  }
}
</style>
