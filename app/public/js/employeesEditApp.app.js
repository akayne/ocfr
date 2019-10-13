var employeesEditApp = new Vue({
  el: '#employeesEditApp',
  data: {
    employeesEdit: []
  },

  methods: {
    handleEdit(event) {
      fetch('api/employee/post.php', {
        method:'POST',
        body: JSON.stringify(this.employeesEdit),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { employeesEditApp.employeesEdit=json })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })
      this.handleReset();
    },
    handleReset() {
      this.employeesEdit = {
        personId: '',
        firstName: '',
        lastName: '',
        radioNumber: '',
        stationNumber: ''
      }
    }

  }, // end methods
    created() {
      this.handleReset();
    }
});
