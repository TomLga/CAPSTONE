<template>
  <div>


    <div class="imgDiv">
      <img class="img-fluid" id="landPic" src="https://i.postimg.cc/7YQHzNKY/mystical-warrior-in-armor-with-sword-l8zszwhe2legl7v4.jpg">
      <div class="centerText"> WELCOME</div>
    </div>

    <div class="shopNowbtn">
      <button>SHOP NOW</button>
    </div>

  <FeatureProd/>

 <div class="shopNowbtn">
      <button>SEE ALL PRODUCTS</button>
    </div>


  <h1>HISTORY LESSON OF THE DAY</h1>

    <FtHistory/>




  </div>
  
</template>

<script>
import FeatureProd from '../components/FeatureProd'
import FtHistory from '../components/FtHistory'

export default{
  components:{
    FeatureProd,
    FtHistory
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
</style>