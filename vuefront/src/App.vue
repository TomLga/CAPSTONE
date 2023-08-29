<template>

    <NavBar/>
    
    <router-view/>
    <FooterComp/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp'
 export default{
  components:{
    NavBar,
    FooterComp
  }
 }




</script>

<style>


nav a.router-link-exact-active {
  color: #42b983;
}
</style>
