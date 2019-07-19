<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <Ensure></Ensure>
        <New></New>
        <Bottom></Bottom>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Bottom from '../public/bottom.vue'
import Navbar from '../public/navbar.vue'
import Slider from './hslider.vue'
import Borrow from './borrow.vue'
import Money from './money.vue'
import Product from './product.vue'
import Ensure from './ensure.vue'
import New from './new.vue'
export default {
  components: {
    Heador,
    Slider,
    Borrow,
    Bottom,
    Money,
    Product,
    Ensure,
    New,
    Navbar
  }
}
</script>

<style lang="scss" module>

</style>
