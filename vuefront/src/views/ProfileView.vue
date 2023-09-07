<template>
    <div>
        <h1 id="pfview">profile view</h1>


        <div class="card profileCard text-center">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="true" href="#"> ACC DETAILS</a>
                </li>

              </ul>
            </div>
            <div class="card-body ">
              <h5 class="card-title">USER PROFILE</h5>
              <p class="card-text">THANK YOU CHOOSING OUR SITE!</p>
              <div class="fields text-start">
              <label for="">Name:</label>
             <fieldset>userName</fieldset> 
              <label for="">Surname:</label>
             <fieldset>userLastName</fieldset>
              <label for="">email:</label>
             <fieldset>username@gmail.com</fieldset>
            </div>

            <div>
             
            </div>
        </div>

          <a href="/product" class="btn contShopbtn btn-outline-primary">continue Shopping</a>

        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

#pfview{
    padding-top: 100px;
    
}
.fields > label{
    color: burlywood;
}
.profileCard{
    height:63vh;
    background: #cfc2c241;
    box-shadow: none;
    margin:20px;
}

</style>