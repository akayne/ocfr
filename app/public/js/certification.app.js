var certificationApp = new Vue({
  el: '#certificationApp',
  data: {
    certifications: [],
    recordCertif: {}
  },

  methods: {
    fetchcertifications() {
      fetch('api/records/')
      .then(response => response.json())
      .then(json => { certificationApp.certifications = json })
  }
},
handleCreate(event) {
  fetch('api/records/post.php', {
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
  created() {
    this.fetchcertifications();
  }
});
