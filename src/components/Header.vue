<template>
  <header class="navbar navbar-default app-header">
    <b-link class="navbar-brand img-responsive" to="#"></b-link>
    <button class="navbar-toggler mobile-toggler" type="button" @click="sidebarToggle">&#9776;</button>
    <b-nav>
      <b-nav-item>
        <i class="ion-android-notifications-none"></i><span class="badge badge-pill badge-danger">5</span>
      </b-nav-item>
      <b-nav-item-dropdown text="Admin" right>
        <b-dropdown-item><i class="ion-person"></i> Profile</b-dropdown-item>
        <b-dropdown-item><i class="ion-ios-cog-outline"></i> Settings</b-dropdown-item>
        <b-dropdown-item><i class="ion-power"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-nav>
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
        document.body.classList.toggle('sidebar-hidden')
      }
    }
  }
</script>
