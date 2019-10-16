var certificationDel = new Vue({
  el: '#certificationDel',
  data: {
    deletecert:[]
  },

  methods: {
    handleDelete(event) {
      fetch('api/certification/delete.php')

      //.then( response => response.json() )
      //.then( json => { certificationDel.deletecert= json  })

    },


  }, // end methods
//  handleRowClick(certDel) {
  //  employeesEditApp.employeeData = employeeData;
  //}
//},
  //  created() {  }
});
