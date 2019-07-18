<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Ad></Ad>
        <Nav></Nav>
        <Money></Money>
        <Ada></Ada>
        <Bank></Bank>
        <Borrow></Borrow>
        <Bottom></Bottom>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Bottom from '../public/bottom.vue'
import Navbar from '../public/navbar.vue'
import Slider from './mslider.vue'
import Ad from './ad.vue'
import Nav from './nav.vue'
import Money from './money.vue'
import Ada from './ada.vue'
import Bank from './bank.vue'
import Borrow from './borrow.vue'
export default {
  components: {
    Heador,
    Slider,
    Bottom,
    Navbar,
    Ad,
    Nav,
    Money,
    Ada,
    Bank,
    Borrow,
  }
}
</script>

<style lang="scss" module>

</style>
