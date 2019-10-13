var employeesApp = new Vue({
  el: '#employeesApp',
  data: {
    employees:[],
    employeesEdit: {}
  },

  methods: {
    fetchemployees(){
      fetch('api/employee/')
      .then(response => response.json())
      .then(json => { employeesApp.employees = json })
    },
    handleEdit(event){
      fetch('api/employee/post.php', {
        method:'POST',
        body: JSON.stringify(this.employeesEdit),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { employeesApp.employees=json })
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


  }, // end methods
  handleRowClick(employeeData) {
    employeesEditApp.employeeData = employeeData;
  }
},
    created() {
      this.handleReset();
      this.fetchemployees();

    }
});
