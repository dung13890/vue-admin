<template>
  <b-jumbotron header="BootstrapVue" lead="Bootstrap 4 Components for Vue.js 2" >
    <p>{{ msg }}</p>
    <b-btn variant="primary" href="#">Docs</b-btn>
  </b-jumbotron>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
