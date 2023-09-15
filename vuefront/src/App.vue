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
color: rgb(13, 223, 223);
font-size: 23px;


}

body {
  position: relative; /* Make sure the ::before pseudo-element is positioned relative to the body */
  background-image: url("https://i.postimg.cc/FsBmTyph/Untitled-design-3.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh; /* Set the body height to the viewport height */
}

/* Create an overlay using the ::before pseudo-element */


/* Style your content as usual */
.content {
  position: relative; /* Make sure the content is stacked above the overlay */
  z-index: 1; /* Set a higher z-index to ensure the content appears above the overlay */
  padding: 20px;
  color: #fff;
  text-align: center;
}

</style>
