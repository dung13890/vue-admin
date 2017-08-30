<template>
  <div class="card">
    <div class="card-header">card heading without title</div>
    <div class="card-body">
      <div class="my-1 row">
        <div class="col-md-6">
          <b-form-fieldset horizontal label="Rows per page" :label-cols="6">
            <b-form-select :options="pageOptions" v-model="perPage" />
          </b-form-fieldset>
        </div>
        <div class="col-md-6">
          <b-form-fieldset horizontal label="Filter" :label-cols="3">
            <b-form-input v-model="filter" placeholder="Type to Search" />
          </b-form-fieldset>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive">
            <b-table class="table table-striped table-bordered"
              :fields="fields"
            >
            </b-table>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-md-offset-4">
          <b-pagination :total-rows="60" :per-page="perPage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      pageOptions: [
        {text: 1, value: 1}, {text: 2, value: 2}, {text: 3, value: 3}, {text: 4, value: 4}
      ],
      perPage: 5,
      filter: null,
      fields: {
        name: {label: 'Name', sortable: true},
        age: {label: 'Age', sortable: true, 'class': 'text-center'},
        isActive: {label: 'is Active'},
        actions: {label: 'Actions'}
      }
    }
  }
}
</script>
