<template>
  <div class="card">
    <div class="card-header">card heading without title</div>
    <div class="card-body">
      <div class="my-1 row">
        <div class="col-md-6">
          <b-form-fieldset horizontal label="Filter" :label-cols="3">
            <b-form-input v-model="filter" placeholder="Type to Search" />
          </b-form-fieldset>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <code>{{ test }}</code>
          <div class="row mb-2">
            <div class="col-md-6">
              <b-form-select class="per-page" :options="pageOptions" v-model="perPage" />
            </div>
          </div>
          <div class="table-responsive">
            <b-table class="table table-striped table-bordered"
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
        <div class="col-md-6 col-md-offset-4">
          <b-pagination hide-goto-end-buttons hide-ellipsis v-model="currentPage"
            :total-rows="totalRows"
            :per-page="perPage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Datatable from './../services/datatable'
export default {
  data () {
    axios.defaults.headers.common['Accept'] = 'application/json'
    let datatable = Datatable.setHttp(axios)
    return {
      dataService: datatable,
      pageOptions: [
        {text: 10, value: 10}, {text: 25, value: 25}, {text: 50, value: 50}, {text: 100, value: 100}
      ],
      currentPage: 1,
      perPage: 10,
      test: null,
      filter: null,
      totalRows: 40,
      sortBy: null,
      sortDesc: false,
      fields: {
        rank: {label: 'Rank'},
        name: {label: 'Name', sortable: true, 'class': 'text-center'},
        symbol: {label: 'Symbol', sortable: true},
        price_usd: {label: 'Price(USD)', sortable: true},
        percent_change_1h: {label: '1H', sortable: true},
        percent_change_24h: {label: '1D', sortable: true},
        percent_change_7d: {label: '1W', sortable: true}
      }
    }
  },
  methods: {
    myTest (ctx) {
      let params = {
        params: {
          limit: ctx.perPage,
          offset: ctx.perPage * (ctx.currentPage - 1),
          sort: ctx.sortDesc ? 'desc' : 'asc',
          order: ctx.sortBy
        }
      }
      return this.dataService.getData(params).then(
        (items) => {
          return items.data
        },
        (error) => {
          console.log('errors:' + error)
          return []
        }
      )
    }
  }
}
</script>
<style lang="scss">
  // Import Main styles for this application
  @import "./../assets/sass/partials/table";
</style>
