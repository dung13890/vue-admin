<template>
  <header class="app-header navbar">
    <div class="container-fluid">
      <button class="navbar-toggler mobile-toggler hidden-lg-up" type="button" @click="sidebarToggle">&#9776;</button>
      <b-link class="navbar-brand" to="#"></b-link>
      <b-nav-item-dropdown right>
        <template slot="button-content">
          <img src="./../assets/img/logo.png" class="img-avatar" alt="admin@bootstrapmaster.com">
          <span class="d-md-down-none">admin</span>
        </template>
        <b-dropdown-item><i class="fa fa-user"></i> Profile</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-wrench"></i> Settings</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
    </div>
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
