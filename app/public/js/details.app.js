var detailsApp = new Vue({
  el: '#detailsApp',
  data: {
    details: []
  },

  methods: {
    fetchdetails() {
      fetch('api/details/')
      .then(response => response.json())
      .then(json => { detailsApp.details = json })
  }
},
  created() {
    this.fetchdetails();
  }
});
