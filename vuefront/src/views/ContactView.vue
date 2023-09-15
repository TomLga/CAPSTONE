<template>
  <div class="pageAbt">
    <h1 id="conTexts">CONNECT WITH US</h1>

    <div class="contactDiv">
      <div class="inputFields">
        <form action="https://formspree.io/f/xbjvydzj" method="POST" target="_blank">
          <label for="name">NAME:</label>
          <input type="text" id="name" name="name">
          <label for="email">EMAIL:</label>
          <input type="text" id="email" name="email">
          <label for="enquiry">ENQUIRY:</label>
          <input id="msgbox" type="text" name="enquiry">
          <button id="subContBtn" type="submit">submit</button>
        </form>
      </div>

      <div class="socialBox">
        <h4>CONNECT WITH US ON SOCIALS</h4>
        <div>
        <a href="https://twitter.com" target="_blank">
          <i class="fab fa-twitter" style="color: #000000;"></i>
        </a>
        <a href="https://discord.com" target="_blank">
          <i class="fab fa-discord" style="color: #3e74d0;"></i>
        </a>
        <a href="https://instagram.com" target="_blank">
          <i class="fab fa-instagram" style="background: linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);"></i>
        </a>
        <a href="https://facebook.com" target="_blank">
          <i class="fab fa-facebook" style="color: #3d75d6;"></i> 
          <!-- have a span for names -->
        </a>
      </div>

      <div class="infoText">
      <p>
  We're here to assist you with any questions, concerns, or inquiries you may have. Feel free to reach out to us using the following contact options. We value your feedback and are committed to providing excellent customer support.
</p>

<h5>Contact Information</h5>
<p>
  <strong>Email:</strong> llogantthomas2@gmail.com<br>
  <strong>Phone:</strong> +27 067 627 3770<br>
  
</p>

</div>

      </div>
    </div>
  </div>
</template>

  
  <style>
  .pageAbt{
    height: 100%;
  }
  .infoText{
    font-size: 14px;
  }
  #conTexts {
    padding-top: 100px;
    text-align: center;
  }
  h4{
    text-decoration: underline;
  }
  
  .contactDiv {
    font-size: 25px;
    height: 100vh;
    display: flex;
    justify-content: center; /* Center the content horizontally */
    align-items: center; /* Center the content vertically */
  }
  /* holder of inputs */
  .inputFields {
    text-align: center;
    width: 50%;
    background: #d5c3c3;
    
  }

  /* spacing between labels and inputs */
  .inputFields label {
    display: block;
    margin-bottom: 10px;
  }
  input{
    width: 50%;
    height: 30px;
    margin-left: 10%;
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
    height:fit-content;
    margin: auto;
    padding: 20px;
    text-align: center;
  }
  
  /* Add spacing between the social icons */
  .socialBox i {
margin-right:10%;
margin-top: 10%;
  }
  /* .socialBox span{
    font-size: 9px;
    display: flex;
    font-weight: 600;
    margin-top: 5px;
    text-decoration: underline;
  } */



  @media (max-width:780px){
    .socialBox{
      font-size: 15px;
      padding: 0px;
      width: 100%;
    
      margin-top: 20px;
      }
    .infoText{
      font-size: 10px;
    }
    .contactDiv {
    font-size: 25px;
    display: block;
  }
  .inputFields  {
    text-align: center;
    width: 100%;
    height: 20px;
    background: #d5c3c3;
    
  }
  .pageAbt{
    height: 150vh;
  }
  }
  </style>
  







