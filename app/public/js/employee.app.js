
var employeesApp = new Vue({
  el: '#employeesApp',
  data: {
    employees: []
  },

  methods: {
    fetchemployees() {
      fetch('api/employee/')
      .then(response => response.json())
      .then(json => { employeesApp.employees = json })
  }
},
  created() {
    this.fetchemployees();
  }
});
