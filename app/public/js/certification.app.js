var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: [],
    recordCertif: {}
/*    filter: {
      sab: ''
    }
*/
  },

  methods: {
    fetchcertifications() {
      fetch('api/certification/')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
    },

    handleCreate(event) {
      fetch('api/certification/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordCertif),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certificationApp.certifications = json })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });

      this.handleReset();
    },

    handleDelete(cert) {
      fetch('api/certification/delete.php', {
        method:'POST',
        body: JSON.stringify(cert),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certificationApp.certifications= json  });

      this.handleReset();

    },

    handleReset() {
      this.recordCertif = {
        name: '',
        agency: '',
        defaultExpiration: ''
      }
    },

    handleRowClick(certifData) {
      certifEditApp.certifData = certifData;
      console.log(certifData);
    }
  },//end of methods

  created() {
    this.handleReset();
    this.fetchcertifications();
  }
});
