<template>
  <div class="card">
    <div class="card-header">Create</div>
    <div class="card-body">
      <div class="row my-2">
        <div class="col-md-6">
          <b-alert :show="dismissCountDown"
            dismissible
            variant="success"
            @dismissed="dismissCountdown=0"
            @dismiss-count-down="countDownChanged">
            <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
          </b-alert>
          <label>Name:</label>
          <b-form-input type="text" v-model="item.name" placeholder="Name" />
          <label class="mt-2">Email:</label>
          <b-form-input v-model="item.email" placeholder="Email" />
          <b-button class="mt-2" @click="store" variant="primary">Save</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dismissSecs: 5,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    props: {
      item: {
        type: Object,
        twoWay: true
      },
      factory: {
        type: Object
      }
    },
    methods: {
      store () {
        this.factory.postData(this.item).then(
          (item) => {
            this.$parent.$refs.table.refresh()
            this.showAlert()
          },
          (error) => {
            console.log(error)
          }
        )
      },
      countDownChanged (dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert () {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>
