<template>
  <div>
    <h1 id="pfview">profile view</h1>

    <div class="card profileCard">
      <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="true" href="#"> ACC DETAILS</a>
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="user-profile">
          <div class="user-profile-image">
            <img :src="user.userProfile" class="img-fluid" style="border-radius: 100%;" alt="Picture" />
          </div>
          <div class="user-details">
            <h5 class="card-title ">USER PROFILE</h5>
            <button style="width: 200px;" class="btn btn-sm contShopbtn">edit Profile</button>
            <div class="fields text-center">
              <p class="card-text">THANK YOU FOR CHOOSING OUR SITE, <span style="font-size:30px;">{{ user.firstName }}!!</span> </p>
              <label for="">Name:</label>
              <fieldset>{{ user.firstName }}</fieldset>
              <label for="">Surname:</label>
              <fieldset>{{ user.lastName }}</fieldset>
              <label for="">Gender:</label>
              <fieldset>{{ user.gender }}</fieldset>
              <label for="">Email:</label>
              <fieldset>{{ user.emailAdd }}</fieldset>
            </div>
          </div>
        </div>
        <!-- <router-link to="/productsView" >Shop</router-link> -->

        <div class="btn btnLogShop btn-sm">
          <router-link class="btn btn-sm contShopbtn" to="/productsView" > Continue Shopping</router-link>
          <button class="btn btn-sm contShopbtn" @click.prevent="logout()">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import router from "@/router";
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
export default {
    computed: {
        user() {
            return this.$store.state.user || cookies.get("AUser").result;
        },
    },
    methods: {
        logout() {
          Swal.fire({
        title: 'Are you sure you want to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          cookies.remove("AUser")
            router.push({ name: "resgister" });
        
        }
      });
    },
           
        }
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
    height:100vh;
    background: #cfc2c241;
    box-shadow: none;
    margin:20px;
}

.user-profile {
  display: flex;
  align-items: center;
}

.user-profile-image {
  margin-right: 20px;
  width: 20rem;
  border-radius: 100%;
}

.user-details {
  flex: 1;
  background: #615b5b;
  width: 100%;
 
  color: white;
}

.uDets{
  background: #c6b9b9;
}
.contShopbtn{
  background: #c1bcbc;
  box-shadow: 10px 10px 20px;
  margin-top: 5px;
}

@media (max-width:555px){
  .user-details {
    font-size: 10px;

   
  }
  .profileCard{
    width: 100%;
 
  }
  .contShopbtn{
    width: fit-content;
    display: block;
  }
  .user-profile-image{
    display: none;
  }
}

</style>