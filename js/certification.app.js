var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certificaitons: [],
    recordCertification: {}
  },

  methods: {
    fetchCertifications() {
      fetch('api/record/')
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
  /*  handleRowClick(patient) {
      patientTriageApp.patient = patient;
    }*/
  }, // end methods

  created() {
    this.handleReset();
    this.fetchCertifications();
  }
});
