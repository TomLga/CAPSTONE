<template>
    <div>
    <div class="bodyy">
      <h1 id="topText">ADMIN LOGIN</h1>
  
      <div class="login-Container">
        <div class="content">
          <div class="sideImgLogin">
            <img src="https://i.postimg.cc/fbVQ2FDF/5fcd23f8-02d4-4b85-bd99-92fe6ba4188a.jpg" style="width: 16rem;">
          </div>
          <div class="formContainer">
            <h2>WELCOME BACK, </h2>
            <form @submit.prevent="login">
              <input v-model="payload.emailAdd" name="emailAdd" type="email" placeholder="Email" required>
              <input v-model="payload.userPass" name="userPass" type="password" placeholder="Password" required>
              <button type="submit">Login</button>
            </form>
            
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
    
  
  <script>
  
  import RegisterComp from '@/components/RegisterComp.vue';
  
  
  
  
  export default{
      components:{
          RegisterComp
      },
      data(){
          return {
              payload: {
              emailAdd: "",
              userPass:""
              }
          }
      },
      computed:{
          user(){
              return this.$store.state.user
          }
      },
      methods: {
          login(){
            this.$store.dispatch("login", this.payload)
            alert("i was clicked")
          },
      },
      beforeCreate(){
          this.$store.dispatch("fetchUsers")
      },
      created(){
  
      },
    }
  
  
  
  </script>
  
  <style>
  #topText{
      padding-top: 100px;
      color: white;
  }
  
  /*tok desgin*/
  .login-Container{
     
    
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgb(255, 255, 255);
      width: 900px;
     
      text-align: center;
      margin: auto;
      margin-bottom: 20px;
    
  }
  .login-Container h2{
      margin-bottom: 20px;
      letter-spacing: 3px;
  
    
  }
  .login-Container input{
      width: 90%;
      padding:5px ;
      margin-bottom: 10px;
      border: 1px solid #000000;
      box-shadow: 10px 10px 20px;
      border-radius: 5px;
  }
  .login-Container button{
      background-color: #000000;
      color: #fff;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
  }
  .login-Container button:hover{
      background-color: #ffffff;
      color: #000000;
  }
  @media (max-width:480px){
      .login-Container{
          width: 80%;
      }
  }
  .spaceGap{
      height: 30vh;
  }
  
  .login-Container {
      /* ... other styles ... */
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .content {
      display: flex;
      flex-direction: row; 
      align-items: center;
    }
    
    .sideImgLogin {
      width: fit-content;
      margin-right: 20px; /* Add some space between the image and the form */
    }
    
    .formContainer {
      text-align: center; /* Center-align the form content */
    }
    #signSpan{
      color: #000000;
    }
  
  
  </style>