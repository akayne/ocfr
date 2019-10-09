var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: []
  },

  methods: {
    fetchcertifications() {
      fetch('api/certification/')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
  }
},
  created() {
    this.fetchcertifications();
  }
});
