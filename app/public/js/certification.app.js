var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: [],
    recordCertification: {}
  },

methods: {
    fetchCertifications() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { certificationRecordsApp.certifications = json })
    },
    handleSubmit(event) {
      this.certifications.push( this.recordCertification );
      this.handleReset();
    },
    handleReset() {
      this.recordCertification = {
        name: '',
        agency: '',
        defaultExpiration: ''
      }
    },
  }, // end methods

  created() {
    this.handleReset();
    this.fetchCertifications();
  }
});
