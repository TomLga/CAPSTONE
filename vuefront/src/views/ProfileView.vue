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
            <img :src="user.userProfile" class="img-fluid" style="border-radius: 100%;" alt="user.firstName" />
          </div>
          <div class="user-details">
            <h5 class="card-title">USER PROFILE</h5>
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

        <div>
          <a href="/product" class="btn contShopbtn btn-outline-primary">Continue Shopping</a>
          <button @click.prevent="logout()">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
            cookies.remove("AUser")
            router.push({ name: "resgister" });
        }
    }
};
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

.user-profile {
  display: flex;
  align-items: center;
}

.user-profile-image {
  margin-right: 20px;
  width: 20rem;
  border-radius: 100%; /* Adjust this margin as needed */
}

.user-details {
  flex: 1;
}

</style>