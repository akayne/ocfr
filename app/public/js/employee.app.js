var employeesApp = new Vue({
  el: '#employeesApp',
  data: {
    employees:[],
    recordemployees: {},
    filter: {
      stNumber: ''
        }
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
      .then( json => { employeesApp.employees = json })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })
      this.handleReset();
    },

    handleDelete(emp) {
      fetch('api/employee/delete.php', {
        method:'POST',
        body: JSON.stringify(emp),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { employeesApp.employees= json  });

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
      console.log(employeeData);
    }
}, // end methods
    created() {
      this.handleReset();
      this.fetchemployees();

    }
});
