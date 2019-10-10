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
  },

  created() {
    this.fetchemployees();
  },



handleAdd(event) {
  fetch('api/employee/post.php', {
    method:'POST',
    body: JSON.stringify(this.recordemployee),
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then( response => response.json() )
  .then( json => { employeesApp.employees.push( json[0] ) })
  .catch( err => {
    console.error('RECORD POST ERROR:');
    console.error(err);
  });
  }
}
});
