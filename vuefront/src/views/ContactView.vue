<!-- <template>
    <div>
        <h1 id="conTexts">CONNECT WITH US</h1>

        <div class="contactDiv">
            <div class="inputFields">
                <label>NAME:</label>
                <input type="text">
                <label>EMAIL:</label>
                <input type="text">
                <label>ENQUIRY:</label>
                <input type="text">
            </div>

            <div class="socialBox">
                <h4>SOCIALS</h4>
                <i class="fa-brands fa-x-twitter " style="color: #000000;"></i>
                <i class="fa-brands fa-discord " style="color: #3e74d0;"></i>
                <i class="fa-brands fa-facebook" style="color: #3d75d6;"></i>
                <i class="fa-brands fa-instagram " style="background: linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);"></i>
            </div>

        </div>

    </div>
</template>

<style>
#conTexts{
    padding-top: 100px;
}
.contactDiv{
    background: #b19999;
    height: 59vh;
    display: flex;
}
.socialBox{
    background: #09ce1c;
    width: 50%;
    height: 50%;
    margin: auto;
}

</style> -->



<template>
    <div>
      <h1 id="conTexts">CONNECT WITH US</h1>
  
      <div class="contactDiv">

        <div class="inputFields">
            <form  action="https://formspree.io/f/xbjvydzj"
            method="POST" target="_blank">
          <label>NAME:</label>
          <input type="text">
          <label>EMAIL:</label>
          <input type="text">
          <label >ENQUIRY:</label>
          <input id="msgbox" type="text">
          <button id="subContBtn" type="submit">submit</button>
        </form>
        </div>
  
        <div class="socialBox">
          <h4>CONNECT WITH US ON SOCIALS</h4>
          <i class="fa-brands fa-x-twitter " style="color: #000000;"><span>Twitter</span></i>
          <i class="fa-brands fa-discord " style="color: #3e74d0;"><span>DISCORD</span></i>
          <i class="fa-brands fa-instagram " style="background: linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);"><span>INSTAGRAM</span></i>
          <i class="fa-brands fa-facebook" style="color: #3d75d6;"><span>FaceBook</span></i>
        </div>
      </div>
  
    </div>
  </template>
  
  <style>
  #conTexts {
    padding-top: 100px;
    text-align: center;
  }
  h4{
    text-decoration: underline;
  }
  
  .contactDiv {

    font-size: 25px;
    height: 59vh;
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
  }
  
  .inputFields {
    text-align: center;
    width: 50%;
    
  }

  /* spacing between labels and inputs */
  .inputFields label {
    display: block;
    margin-bottom: 10px;
  }
  input{
    width: 50%;
    height: 30px;
    margin-left: 50%;
    font-size: 18px;

  }
  #msgbox{
    height: 90px;
  }
  #subContBtn{
    margin-left: 50%;
    margin-top: 10px;
    width: 30%;

    border-radius: 20px 0px 50px;
    background-color: white;
  }
#subContBtn:hover{
    background: #000;
    color: white;
    transform: scale(1.3);

}





  .socialBox {
    background: #aab5ab;
    width: 40%;
    height: 50%;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  
  /* Add spacing between the social icons */
  .socialBox i {
margin-right:10%;
margin-top: 10%;
  }
  .socialBox span{
    font-size: 9px;
    display: flex;
    font-weight: 600;
    margin-top: 5px;
    text-decoration: underline;
  }
  </style>
  







