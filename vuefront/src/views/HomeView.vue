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
      <button style="margin:70px 0px;">SEE ALL PRODUCTS</button>
    </div>

  <h1>HISTORY LESSON OF THE DAY</h1>

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

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  .imgDiv {
    position: relative;
    display: inline-block;
  }

  .img-fluid {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .centerText {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 10px;
    border-radius: 5px;
  }

  /* Adjust these styles according to your animation needs */
  .sideAnimation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Additional animation-related styles */
  }
</style>
</head>
<body>
  <div class="imgDiv">
    <img class="img-fluid" id="landPic" src="https://i.postimg.cc/7YQHzNKY/mystical-warrior-in-armor-with-sword-l8zszwhe2legl7v4.jpg">
    <div class="centerText">WELCOME</div>
    <div class="sideAnimation">
      
    </div>
  </div>





 -->