var employeesApp = new Vue({
  el: '#employeesApp',
  data: {
    employees: [],
    recordemployee: {}
  },

  methods: {
    fetchemployees() {
      fetch('api/employee/')
      .then(response => response.json())
      .then(json => { employeesApp.employees = json })
<<<<<<< HEAD
=======
  },

  created() {
    this.fetchemployees();
>>>>>>> 793092421eae9be765c1fd89cfd7272bf0c86555
  },




//    handleAdd(event) {
//      fetch('api/employee/post.php', {
//        method:'POST',
//        body: JSON.stringify(this.recordemployee),
//        headers: {
//          "Content-Type": "application/json; charset=utf-8"
//        }
//      })
//      .then( response => response.json() )
//      .then( json => { employeesApp.employees.push(json[0]) })
//      .catch( err => {
//        console.error('RECORD POST ERROR:');
//        console.error(err);
//      })
//      this.handleReset();
//      },



    handleEdit(event) {
      fetch('api/employee/post.php', {
        method:'POST',
        body: JSON.stringify(this.recordemployee),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { employeesApp.employees.push(json[0]) })
      .catch( err => {
        console.error('RECORD POST ERROR:');
        console.error(err);
      })
      this.handleReset();
    },
    handleReset() {
      this.recordemployee = {
        personId: '',
        firstName: '',
        lastName: '',
        radioNumber: '',
        stationNumber: ''
      }
    },
    handleRowClick(employees) {
      employeesApp.employees = employees;
    }
  }, // end methods
    created() {
      this.handleReset();
      this.fetchemployees();
    }
<<<<<<< HEAD
=======
  })
  .then( response => response.json() )
  .then( json => { employeesApp.employees.push( json[0] ) })
  .catch( err => {
    console.error('RECORD POST ERROR:');
    console.error(err);
  });
  }
}
>>>>>>> 793092421eae9be765c1fd89cfd7272bf0c86555
});
