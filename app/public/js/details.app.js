var detailsApp = new Vue({
  el: '#detailsApp',
  data: {
    details: [],
    recordDetails: {}
  },


  methods: {
    fetchdetails(){
      fetch('api/details/')
      .then(response => response.json())
      .then(json => { detailsApp.details = json })
    },

    handleCreate(event) {
      fetch('api/details/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordDetails),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { detailsApp.details = json })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      });

      this.handleReset();
    },

    handleDelete(detail) {
      fetch('api/details/delete.php', {
        method:'POST',
        body: JSON.stringify(detail),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { detailsApp.details = json  });

      this.handleReset();

    },

    handleReset() {
      this.recordDetails = {
        personId: '',
        certId: '',
        dateReceived: '',
        dateExpired: ''
      }
    },

    handleRowClick(detailData) {
      detailsEditApp.detailData = detailData;
      console.log(detailData);
    }
  },//end of methods

  created() {
    this.handleReset();
    this.fetchdetails();
  }
});
