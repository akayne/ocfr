var certDelete = new Vue({
  el: '#certificationDel',
  data: {
    employees:[]
  },

  methods: {
    handleDelete(event) {
      fetch('api/certification/delete.php', {
        method:'POST',
        body: JSON.stringify(this.recordCertif),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => { certificationApp.certifications= json  })

    },


  }, // end methods
//  handleRowClick(certDel) {
  //  employeesEditApp.employeeData = employeeData;
  //}
//},
  //  created() {  }
});
