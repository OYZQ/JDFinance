<template lang="html">
  <panel title="导航条" :class="$style.panel">
      <ul :class="$style.content">
        <li v-for="(item,index,path) in items" :key="item.index">
            <router-link :to="{ path:item.path}" exact>
                <img :src="item.src">
                <p >{{item.name}}</p>
            </router-link>
        </li>
      </ul>
  </panel>
</template>

<script type="text/ecmascript-6">
import panel from "../core/panel.vue";
export default {
  components: {
    panel
  },
  data() {
    return {
      items: [
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png?width=60&height=60",
          name: "首页",
          path: "/"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png?width=60&height=60",
          name: "赚钱",
          path: "/money"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png?width=60&height=60",
          name: "借钱",
          path: "/borrow"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png?width=60&height=60",
          name: "省钱",
          path: "/save"
        },
        {
          src:
            "//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png?width=60&height=60",
          name: "金融会员",
          path: "/member"
        }
      ]
    };
  },
};
</script>



<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  position: fixed;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 100px;
  z-index: 100;
  margin: 0 auto;
  > h4 {
    display: none;
  }
  .content {
    @include flex(row);
    justify-content: space-around;

    li {
      text-align: center;
      a {
        text-decoration: none;
      }
      img {
        width: 44px;
        height: 44px;
        display: inline-block;
        margin: 12px auto 6px;
      }
      p {
        font-size: 22px;
      }
    }
  }
}
</style>
<style>
html a {
    color: #656565;
}
a.router-link-active {
  color: rgb(70, 104, 255);
  font-size: larger;
  font-weight: bold;
}
</style>