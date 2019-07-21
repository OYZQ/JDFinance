<template lang="html">
    <div>
        <Heador></Heador>
        <Bottom></Bottom>
        <Navbar></Navbar>
    </div>
</template>

<script>
import Heador from '../public/header.vue'
import Bottom from '../public/bottom.vue'
import Navbar from '../public/navbar.vue'
export default {
  components: {
    Heador,
    Bottom,
    Navbar
  }
}
</script>

<style lang="scss" module>

</style>
