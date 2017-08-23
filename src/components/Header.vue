<template>
  <header class="app-header navbar navbar-expand navbar-dark flex-column flex-md-row">
    <div class="navbar-brand mr-0 mr-md-2">
      <b-link class="navbar-brand img-responsive" to="#">Logo</b-link>
    </div>
    <button class="navbar-toggler mobile-toggler" type="button" @click="sidebarToggle">&#9776;</button>
    <nav class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
      <b-nav class="navbar-nav">
        <b-nav-item>
          <i class="ion-android-notifications-none"></i><span class="badge badge-pill badge-danger">5</span>
        </b-nav-item>
        <b-nav-item-dropdown text="Admin" right>
          <b-dropdown-item><i class="ion-person"></i> Profile</b-dropdown-item>
          <b-dropdown-item><i class="ion-ios-cog-outline"></i> Settings</b-dropdown-item>
          <b-dropdown-item><i class="ion-power"></i> Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-nav>
    </nav>
  </header>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-show')
      }
    }
  }
</script>
