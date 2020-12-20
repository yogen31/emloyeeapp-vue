<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
  
    
  </div>
</template>

<script>
import Navbar from './components/navbar/Navbar';
export default {
  name: 'App',
  components:{
    Navbar
  }
}
</script>


