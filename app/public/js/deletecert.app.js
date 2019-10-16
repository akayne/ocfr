var certificationDel = new Vue({
  el: '#certificationDel',
  data: {
    deletecert:[]
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
      .then( json => { certificationDel.deletecert= json  })

    },


  }, // end methods
//  handleRowClick(certDel) {
  //  employeesEditApp.employeeData = employeeData;
  //}
//},
  //  created() {  }
});
