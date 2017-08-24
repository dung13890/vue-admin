<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <ul class="nav">
        <li class="nav-item">
          <router-link :to="'#'" class="nav-link">
            <i class="ion-ios-speedometer-outline"></i> Link
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="'#'" class="nav-link">
            <i class="ion-ios-email-outline"></i> Link
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="'#'" class="nav-link">
            <i class="ion-ios-alarm-outline"></i> Link
          </router-link>
        </li>

        <li class="nav-item">
          <router-link :to="'#'" class="nav-link">
            <i class="ion-ios-pie-outline"></i> Link
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
