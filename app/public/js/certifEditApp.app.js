var certifEditApp = new Vue({
  el: '#certifEditApp',
  data: {
    certifData: {}
  },

  methods: {
    handleEdit() {
      fetch('api/certification/edit.php', {
        method:'POST',
        body: JSON.stringify(this.certifData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
/*      .then( response => response.json() )
      .then( json => {waitingApp.patients = json})
      .catch( err => {
        console.error('TRIAGE POST ERROR:');
        console.error(err);
      });
*/

      this.handleReset();
    },

    handleReset() {
      this.certifData = {
        name: '',
        agency: '',
        defaultExpiration: ''
      }
    }
  }, // end methods

    created() {
      this.handleReset();
    }
});
