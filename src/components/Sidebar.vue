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

        <router-link tag="li" class="nav-item nav-dropdown" :to="'#'" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="ion-ios-pie-outline"></i> Dropdown</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'#'" class="nav-link">Link</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'#'" class="nav-link">Link</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'#'" class="nav-link">Link</router-link>
            </li>
          </ul>
        </router-link>

        <router-link tag="li" class="nav-item nav-dropdown" :to="'#'" disabled>
          <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i class="ion-ios-pie-outline"></i> Dropdown</div>
          <ul class="nav-dropdown-items">
            <li class="nav-item">
              <router-link :to="'#'" class="nav-link">Link</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'#'" class="nav-link">Link</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="'#'" class="nav-link">Link</router-link>
            </li>
          </ul>
        </router-link>

      </ul>
    </nav>
  </div>
</template>
<script>
  export default {
    data () {
      return {

      }
    },
    methods: {
      handleClick (e) {
        e.preventDefault()
        e.target.parentElement.classList.toggle('open')
      }
    }
  }
</script>
