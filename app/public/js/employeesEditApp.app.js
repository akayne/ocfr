var employeesEditApp = new Vue({
  el: '#employeesEditApp',
  data: {
    employeeData: {}
  },

  methods: {
    handleEdit() {
      fetch('api/employee/edit.php', {
        method:'POST',
        body: JSON.stringify(this.employeeData),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })

      this.handleReset();
    },
    handleReset() {
      this.employeeData = {
        personId: '',
        firstName: '',
        lastName: '',
        radioNumber: '',
        stationNumber: '',
        email: ''
      }
    }

  }, // end methods
    created() {
      this.handleReset();
    }
});
