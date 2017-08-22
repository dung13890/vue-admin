<template>
  <div id="app">
    <heading></heading>
    <sidebar></sidebar>
    <main id="main">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import Heading from './components/Heading'
import Sidebar from './components/Sidebar'
export default {
  data () {
    return {

    }
  },
  components: {
    Heading,
    Sidebar
  }
}
</script>
<style lang="scss">
  // Import Main styles for this application
  @import "./assets/sass/main";
</style>
