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
<!--       <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <b-table ref="table" class="table table-striped table-bordered"
              :items="myTest"
              :fields="fields"
              :current-page="currentPage"
              :per-page="perPage"
            >
            </b-table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7">
          <b-form-select class="per-page" :options="pageOptions" v-model="perPage" />
        </div>
        <div class="col-md-5">
          <b-pagination hide-goto-end-buttons hide-ellipsis v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
          />
        </div>
      </div> -->
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
      // pageOptions: [
      //   {text: 10, value: 10}, {text: 25, value: 25}, {text: 50, value: 50}, {text: 100, value: 100}
      // ],
      // currentPage: 1,
      // perPage: 10,
      // test: null,
      filter: null,
      // totalRows: 40,
      // sortBy: null,
      // sortDesc: false,
      fields: {
        id: {label: 'id'},
        name: {label: 'Name', sortable: true, 'class': 'text-center'},
        email: {label: 'Email', sortable: true},
        date: {label: 'Date', sortable: true}
      }
    }
  },
  // methods: {
  //   myTest (ctx) {
  //     let params = {
  //       params: {
  //         limit: ctx.perPage,
  //         offset: ctx.perPage * (ctx.currentPage - 1),
  //         sort: ctx.sortDesc ? 'desc' : 'asc',
  //         order: ctx.sortBy
  //       }
  //     }
  //     return this.dataService.getData(params).then(
  //       (items) => {
  //         return items.data.data
  //       },
  //       (error) => {
  //         console.log('errors:' + error)
  //         return []
  //       }
  //     )
  //   }
  // },
  components: { Create, TableData }
}
</script>
<style lang="scss">
  // Import Main styles for this application
  @import "./../assets/sass/partials/table";
</style>
