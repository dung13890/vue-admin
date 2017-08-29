<template>
  <div class="card">
    <div class="card-header">card heading without title</div>
    <div class="card-body">
      <div class="my-1 row">
        <div class="col-md-6">
          <b-form-fieldset horizontal label="Rows per page" :label-cols="6">
            <b-form-select :options="pageOptions" />
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
          <code>query: {{ query }}</code>
          <datatable class="table table-striped table-bordered"
            :columns="columns"
            :query="query"
            :data="data"
            :total="total"
          >
          </datatable>
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
      filter: null,
      columns: [
        {title: 'User ID', field: 'uid', sort: true},
        {title: 'Username', field: 'name', sort: true},
        {title: 'Age', field: 'age', sort: true},
        {title: 'Email', field: 'email', sort: true},
        {title: 'Country', field: 'country', sort: true}
      ],
      data: [
        {uid: 1, name: 'dao anh dung', age: 27, email: 'dung13890@gmail.com', country: 'viet Nam'}
      ],
      total: 1,
      query: {}
    }
  }
}
</script>
