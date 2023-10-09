<template>
  <div>

    <div class="imgDiv">
      <img class="img-fluid" id="landPic" src="https://i.postimg.cc/dQ2WTkNJ/mystical-warrior-in-armor-with-sword-l8zszwhe2legl7v4.jpg">
      <div class="centerText">WELCOME TO SWORD ALLIANCE</div>
      <div class="sideAnimation">
        <SideAnimtion/>
        
      </div>
    </div>

    <div class="hiSlessonTxt">
  <p>⚔️FEATURED PRODUCTS⚔️</p>
  </div>

  <FeatureProd/>

 <div class="shopNowbtn">
      <!-- <button style="margin:70px 0px;"> <a style="text-decoration: none; color:black"  href="/productsView">VIEW ALL PRODUCTS</a></button> -->
      <button style="margin:10px 0px;">  <a class="nav-link"  href="/product">VIEW ALL PRODUCTS</a> </button>
    </div>

    <div class="hiSlessonTxt">
  <p> HISTORY LESSON OF THE WEEK!</p>
  </div>


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


<style >

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

}

.hiSlessonTxt{
  margin: auto;
}
.hiSlessonTxt > p{
  background-color: rgba(0, 0, 0, 0.559);
  color: rgba(255, 248, 248, 0.759);
  margin: 10px 0px 20px;
  font-size: 40px;
  text-align: center;
}


@media (max-width: 470px) {
  .hiSlessonTxt p {
    font-size: 19px; 
    margin-bottom: 3px;
    
  }
}
</style>
