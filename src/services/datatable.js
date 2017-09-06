export default {
  setHttp (http) {
    this.http = http
    return this
  },
  setRouter (router) {
    this.router = router
    return this
  },
  getData (params) {
    var self = this
    return new Promise((resolve, reject) => {
      self.http.get('/users', params).then((item) => {
        resolve(item)
      }, (error) => {
        reject(error)
      })
    })
  }
}
