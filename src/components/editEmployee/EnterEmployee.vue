<template>
  <div id="edit-employee">
      <h3>Edit Employee</h3>
       <div class="row">
            <div class="inpout-field col s12">
              <input type="text" v-model="employee_id" required>
              <label>Employee Id#</label>
             

            </div>
           
              <router-link v-bind:to="{name:'edit-employee',
               params:{employee_id:employee_id}}" class="btn grey">Continue</router-link>
          </div>
  </div>
</template>

<script>
export default {
  name: "edit-employee",
  data() {
    return {
        employee_id:null
    };
  },
};
</script>