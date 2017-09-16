<template>
<div>
<div class="row">
  <div class="col-md-12">
    <div class="table-responsive">
      <b-table ref="table" class="table table-striped table-bordered"
        :items="datatable"
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
</div>
</div>
</template>
<script>
export default {
  data () {
    return {
      pageOptions: [
        {text: 10, value: 10}, {text: 25, value: 25}, {text: 50, value: 50}, {text: 100, value: 100}
      ],
      currentPage: 1,
      perPage: 10,
      totalRows: 40,
      sortBy: null,
      sortDesc: false
    }
  },
  props: {
    fields: {
      type: Object,
      twoWay: true
    },
    filter: {
      type: Object,
      twoWay: true
    },
    factory: {
      type: Object
    }
  },
  created: function () {
    this.$parent.$on('refresh-table', this.refreshDatatable)
  },
  methods: {
    datatable (ctx) {
      let params = {
        params: {
          limit: ctx.perPage,
          offset: ctx.perPage * (ctx.currentPage - 1),
          sort: ctx.sortDesc ? 'desc' : 'asc',
          order: ctx.sortBy
        }
      }
      return this.factory.getData(params).then(
        (items) => {
          return items.data.data
        },
        (error) => {
          console.log('errors:' + error)
          return []
        }
      )
    },
    refreshDatatable () {
      console.log(3)
      this.$refs.table.refresh()
    }
  }
}
</script>
