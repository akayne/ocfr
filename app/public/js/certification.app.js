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
      .then( json => { certificationApp.certifications.push( json[0] ) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });

      this.handleReset();
    },

    handleDelete(event) {
      fetch('api/certification/delete.php', {
        method:'POST',
        body: JSON.stringify(this.recordCertif),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certificationApp.certifications= json  })

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
    }
  },//end of methods

  created() {
    this.handleReset();
    this.fetchcertifications();
  }
});
