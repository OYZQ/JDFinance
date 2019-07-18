<template lang="html">
  <article class="">
      <section :class="$style.list">
          <div :class="$style.item" v-for="item in enters" :key="item.img">
              <router-link :to="{ name: item.href}"> 
                  <img :src="item.img" alt="item.title">
                  <h4>{{ item.title }}</h4>
              </router-link>
          </div>
      </section>
      <div :class="$style.img">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/76825/21/3349/15938/5d197607Ed74e7dea/40bca9650539b256.jpg?width=750&height=200">
      </div>
  </article>
</template>

<script type="text/ecmascript-6">
import Slider from "../core/slider.vue";
export default {
  data() {
    return {
      enters: [
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/69506/40/2501/5076/5d0c2ff7E903b5e99/5333b1c655b4c7bf.png?width=90&height=90",
          title: "去赚钱"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/22708/8/15082/7446/5cad5c35E7e3ae22b/72adc577175d7c4f.png?width=90&height=90",
          title: "双签"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/62829/35/1167/4169/5cf64e75Ec0e5b729/eb07348c21179775.png?width=90&height=90",
          title: "优惠券"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/47642/31/1640/4856/5cf64f24E67912a6f/2a4bf9dc9793872b.png?width=90&height=90",
          title: "单单返京豆"
        },
        {
          href: "home",
          img:
            "//img12.360buyimg.com/jrpmobile/jfs/t29131/288/288291507/3943/bed46aef/5bee6bd5Nfc5d5360.png?width=90&height=90",
          title: "全部"
        },
      ]
    };
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.list {
  @include list(row);
  position: relative;
  top: -40px;
  background: #fff;
  padding-top: 40px;
  padding-bottom: 20px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  .item {
    text-align: center;
    width: 20%;
    margin-bottom: 30px;
    img {
      display: inline-block;
      width: 90px;
      height: 90px;
    }
    h4 {
      font-size: 24px;
      margin-top: 12px;
      font-weight: border;
      color: rgba(0, 0, 0, 1);
    }
  }
}
.img{
    position: relative;
    top: -40px;
    margin: 0 auto;
    padding: 0;
    img{
        width: 100%;
        background: #eee 50% no-repeat;
    }
}
</style>
