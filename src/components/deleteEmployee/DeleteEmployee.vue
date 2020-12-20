<template>
  <div id="edit-employee">
      <h3>Edit Employee</h3>
       <div class="row">
            <div class="inpout-field col s12">
              

                <input type="text" v-model="employee_id" required>
              <label>Employee Id#</label>
              <br/>
              <button @click="deleteEmployee" class="btn red">Delete</button>
              
              
             

            </div>
           
          </div>
  </div>
</template>

<script>
import db from "../firebase/firebaseInit";
export default {
  name: "edit-employee",
  data() {
    return {
        employee_id:null
    };
  },
  methods:{
    deleteEmployee (){
      if(confirm('Are you sure?')){
          db.collection('employee').where('employee_id','==',
          this.employee_id).get().
          then(querySnapshot => {
              querySnapshot.forEach(doc => {
                  doc.ref.delete();
                  this.$router.push('/');
              })
          })
      }
  }
  }
  
};
</script>