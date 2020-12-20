<template>
  <div id="dashboard">
    <h3>Employee table</h3>
    <div class="container">
        <div class="container-table">
            <hot-table class="container-table"
      :data="data1"
     
       
    
      
       
      
     
      settings="settings"
      licenseKey="non-commercial-and-evaluation"
    >
    <hot-column class="container-table" title="id" data="id"></hot-column>
    <hot-column class="container-table" title="employee_id" data="employee_id"></hot-column>
    <hot-column class="container-table" title="name" data="name"></hot-column>
    <hot-column class="container-table" title="dept" data="dept"></hot-column>
    <hot-column class="container-table" title="position" data="position"></hot-column>
     <hot-column class="container-table" title="action" data="button"></hot-column>
    </hot-table>
        </div>
    
    </div>

    <div class="fixed-action-btn">
        <router-link to="/add" class="btn-floating btn-large red">
<i class="fa fa-plus"></i>
        </router-link>
    </div>
     <div>
       <br/>
 <router-link to="/enter" class="btn grey">Edit</router-link>
    <router-link to="/delete" class="btn red">Delete</router-link>
  </div>
   
  </div>
 
  
</template>

<script>
import { HotTable,HotColumn } from "@handsontable/vue";
import db from "../firebase/firebaseInit";

export default {
  data: function () {
    return {
      data1: [
        
      ],
    };
  },
  components: {
    HotTable,HotColumn
  },
  created(){
      db.collection('employee').get().then(querySnapshot => 
      querySnapshot.forEach(doc=>{
          console.log("data",doc.data());
          const data2={
              'id':doc.id,
              'employee_id':doc.data().employee_id,
              'name':doc.data().name,
              'dept':doc.data().dept,
              'position':doc.data().position,
              

          }
          this.data1.push(data2);
      }))
  }
};
</script>



<style src="../../../node_modules/handsontable/dist/handsontable.full.css"></style>
<style >
#dashboard{
    text-align: center;
}



@media only screen and (max-width: 860px) {
 .container {
    text-align: center;
   
    
  }
  
}
@media only screen and (max-width: 705px) {
 .container {
    float: left;
   
    padding: 0 2rem;width: 100%;
    
  }
  .container-table{
      width:"100"; height:"300";
      display: inline;
      float: left;
  }
  .ht_master{
    width:20%;

  }
  
}
@media only screen and (max-width:685px){
   .container {
    float: left;
 
    padding: 0 2rem;width: 100%;
    
  }
  .container-table{
      width:"50"; height:"300";
      display: inline;
      float: left;
  }
}
</style>