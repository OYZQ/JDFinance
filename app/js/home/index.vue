<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Borrow></Borrow>
        <Money></Money>
        <Novice></Novice>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Slider from './hslider.vue'
import Borrow from './borrow.vue'
import Novice from './novice.vue'
import Bottom from './bottom.vue'
import Money from './money.vue'
export default {
  components: {
    Heador,
    Slider,
    Borrow,
    Novice,
    Bottom,
    Money
  }
}
</script>

<style lang="scss" module>

</style>
