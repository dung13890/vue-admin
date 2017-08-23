<template>
  <div class="app-sidebar sidebar">
    <nav class="sidebar-nav">
      <div slot="header"></div>
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'#'" class="nav-link">
            <i class="fa fa-dashboard"></i> Link
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
