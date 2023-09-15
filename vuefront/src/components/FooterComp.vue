<template>
    <div class="footer">
     
        <router-link  style="text-decoration: none; color:white" to="/adminLogin">Login As Admin?</router-link>
        <div class="info">
            <p> Copyright &copy; by LOGAN THOMAS {{ currentYear }}</p>
        </div>

        <div id="discord">
            <p>DISCORD <br>
            <span>~Swords for nerds</span> <br>
        
            <i href="https://discord.gg/qstdj6a" class="fa-brands fa-discord" style="color: #2c64c3;"></i>
            </p> 
        </div>

        <div  id="numbFooter">
            <p>Contact me: <br>
            <span>+27 067 627 3770</span>
        </p>
        </div>
    
         
    

    </div>
</template>
<script>
import AdminLogin from '../components/AdminLogin'

export default{
    data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },

    computed:{
        AdminLogin
    }
}


</script>



<style>

.footer{
    background-image: url('https://i.postimg.cc/NjNLDHBp/298254-cut-sword-to-right-filter.jpg');
    font-size: 20px;
    color: white;
    height: 135px;
    width: 100%;
    
}
.info{
    text-align: center;
   font-size: 20px;
}

#discord{
    text-align: start;
    margin-top: -30px;
}
span{

    font-style: italic;
    font-size: 13px;
}
#numbFooter{
    text-align: end;
    margin-top: -90px;
    margin-right: 20px;

}
#linkAdmin{
    color: black;
    text-decoration: none;
    float: right;
}


  

</style>