 var detailsEditApp = new Vue({
  el: '#detailsEditApp',
  data: {
    detailData: {}
  },

  methods: {
    handleEdit() {
      fetch('api/details/edit.php', {
        method:'POST',
        body: JSON.stringify(this.detailData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      });
/*      .then( re sponse => response.json() )
      .then( json => {waitingApp.patients = json})
      .catch( err => {
        console.error('TRIAGE POST ERROR:');
        console.error(err);
      });
*/

      this.handleReset();
    },

    handleReset() {
      this.detailData = {
        firstName:'',
        lastName:'',
        name:'',
        dateReceived: '',
        dateExpired: ''
      }
    }
  }, // end methods

    created() {
      this.handleReset();
    }
});
