var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: []
  },

  methods: {
    fetchcertifications() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
  }
},
  created() {
    this.fetchcertifications();
  }
});
