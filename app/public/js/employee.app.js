var employeesApp = new Vue({
  el: '#employeesApp',
  data: {
    employees:[],
    recordemployees: {}
  },

  methods: {
    fetchemployees(){
      fetch('api/employee/')
      .then(response => response.json())
      .then(json => { employeesApp.employees = json })
      },
      handleCreate(event){
        fetch('api/employee/post.php', {
          method:'POST',
          body: JSON.stringify(this.recordemployees),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => { employeesApp.employees.push( json[0] ) })
        .catch( err => {
          console.error('RECORD POST ERROR:');
          console.error(err);
        })
        this.handleReset();
      },
      handleReset() {
        this.recordemployees = {
          firstName: '',
          lastName: '',
          radioNumber: '',
          stationNumber: '',
          isActive: '',
          address: '',
          email: '',
          phone: '',
          dob: '',
          startDate: '',
          gender: '',
          position: ''
        }
      },
    handleRowClick(employeeData) {
      employeesEditApp.employeeData = employeeData;
    }
}, // end methods
    created() {
      this.handleReset();
      this.fetchemployees();

    }
});
