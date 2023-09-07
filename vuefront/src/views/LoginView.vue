<template>
    <div class="bodyy">
        <h1 id="topText">WELCOME BACK</h1>

        <div class="login-Container">
            <h2>WELCOME BACK, </h2>
            <form action="action_page.php" @submit.prevent="login">
                <input v-model="payload.emailAdd" type="password" placeholder="emailAdd" required>
                <input v-model="payload.userPass" type="password" placeholder="userPass" required>

              <button type="submit">Login</button>
            </form>
        </div>    
       
        <BUtton>
            <router-link to="/signup">signUp</router-link>
        </BUtton>
    </div>
</template>

<script>

import SignupComp from '@/components/SignupComp.vue';

export default{
    components:{
        SignupComp
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
    methods:{
        login(){
            this.$store.dispatch("login", this.payload)

        }
    },
    beforeCreate(){
        this.$store.dispatch("fetchUsers")
    }

}

</script>

<style>
#topText{
    padding-top: 100px;
    color: white;
}
.bodyy{
    /*background-image: url('https://i.postimg.cc/4yCp3gTf/sword-cross-swords.jpg');
    background-repeat: no-repeat;
    background-size: cover;*/
    background: linear-gradient(45deg, rgb(0, 0, 0) 20%,rgb(0, 0, 0) 20%, rgb(255, 255, 255));

    

}
/*tok desgin*/
.login-Container{
    background: rgba(255, 255,255, 0.8);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    width: 500px;
   
    text-align: center;
    margin: auto;
  
}
.login-Container h2{
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 3px;

  
}
.login-Container input{
    width: 90%;
    padding:5px ;
    margin-bottom: 10px;
    border: 1px solid #000fff;
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
    background-color: #0056b3;
}
@media (max-width:480px){
    .login-Container{
        width: 80%;
    }
}

.spaceGap{
    height: 30vh;
}

</style>