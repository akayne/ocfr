var employeesWaitingApp = new Vue({
  el: '#employeesWaitingApp',
  data: {
    employees:[]
  },

  methods: {
    fetchemployees(){
      fetch('api/employee/')
      .then(response => response.json())
      .then(json => { employeesWaitingApp.employees = json })
    }
  },
  created() {
    this.fetchemployees();
  }
});
