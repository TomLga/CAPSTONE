<template>
  <div>

    <div class="imgDiv">
      <img class="img-fluid" id="landPic" src="https://i.postimg.cc/7YQHzNKY/mystical-warrior-in-armor-with-sword-l8zszwhe2legl7v4.jpg">
      <div class="centerText">WELCOME TO SWORD ALLIANCE</div>
      <div class="sideAnimation">
        <SideAnimtion/>
        
      </div>
    </div>

    <div class="shopNowbtn">
      <button>SHOP NOW</button> 
    </div>

  <FeatureProd/>

 <div class="shopNowbtn">
      <button style="margin:70px 0px;"> <a style="text-decoration: none; color:black"  href="/product">VIEW ALL PRODUCTS</a></button>
    </div>

  <h1 style="background-color: rgba(0, 0, 0, 0.853); color:white; margin:auto; margin-bottom:20px">HISTORY LESSON OF THE DAY</h1>

    <FtHistory/>
  </div>
  
</template>

<script>
import FeatureProd from '../components/FeatureProd'
import FtHistory from '../components/FtHistory'
import SideAnimtion from '../components/SideAnimtion.vue'
export default{
  components:{
    FeatureProd,
    FtHistory,
    SideAnimtion
  }

}


</script>


<style>

.imgDiv{
background: #000;
  position: relative;
  text-align: center;
  color: white;
}

#landPic{
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.centerText {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  .shopNowbtn>button{
  width: 50%;
  height: 50px;
  margin: 9px;

}
.shopNowbtn{
  margin-left: 35%;
}

h1{
  text-align: center;
  text-decoration: underline;
 
}

.imgDiv {
  position: relative;
}





.sideAnimation {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Additional animation-related styles */
}
</style>




<!-- 
have the buttons work
the pop over work (maybe) or have it go to the education 


connnecting my github to my git bash i need to still downlaod node mods



 -->