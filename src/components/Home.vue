<template>
<div>
  <create :item.sync="item" :factory="dataService"></create>
  <br>
  <div class="card my-2">
    <div class="card-header">card heading without title</div>
    <div class="card-body">
      <div class="my-2 row">
        <div class="col-md-4">
          <div class="form-group">
            <div class="input-group">
              <span class="input-group-addon">
                <i class="ion-ios-search"></i>
              </span>
              <b-form-input v-model="filter" placeholder="Type to Search" />
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <b-button variant="primary">Search</b-button>
            <b-button variant="danger">reset</b-button>
          </div>
        </div>
      </div>
      <table-data :fields.sync="fields" :factory="dataService" :filter.sync="filter" ></table-data>
    </div>
  </div>
</div>
</template>

<script>
import Datatable from './../services/datatable'
import Create from './create'
import TableData from './partials/table'
export default {
  data () {
    let datatable = Datatable.setHttp(window.axios)
    return {
      item: {
        name: null,
        email: null
      },
      dataService: datatable,
      filter: null,
      fields: {
        id: {label: 'id'},
        name: {label: 'Name', sortable: true, 'class': 'text-center'},
        email: {label: 'Email', sortable: true},
        date: {label: 'Date', sortable: true}
      }
    }
  },
  components: { Create, TableData }
}
</script>
<style lang="scss">
  // Import Main styles for this application
  @import "./../assets/sass/partials/table";
</style>
