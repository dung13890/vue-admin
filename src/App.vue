<template>
  <div id="app">
    <app-header></app-header>
    <div class="app-body">
      <app-sidebar></app-sidebar>
      <main id="main" class="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/Header'
import AppSidebar from './components/Sidebar'
export default {
  data () {
    return {

    }
  },
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>
<style lang="scss">
  // Import Main styles for this application
  @import "./assets/sass/main";
</style>
