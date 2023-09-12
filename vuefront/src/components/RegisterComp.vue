<template>
  <div>
    <h1 style="padding-top: 100px;">USER REGISTRATION</h1>

    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">REGISTER NEW USER</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="userID" class="col-form-label">ID:</label>
                <input type="number" v-model="model.user.userID" class="form-control" id="userID">
              </div>
              <div class="mb-3">
                <label for="firstName" class="col-form-label">First Name:</label>
                <input v-model="model.user.firstName" class="form-control" id="firstName">
              </div>
              <div class="mb-3">
                <label for="lastName" class="col-form-label">Last Name:</label>
                <input v-model="model.user.lastName" class="form-control" id="lastName">
              </div>
              <div class="mb-3">
                <label for="gender" class="col-form-label">Gender:</label>
                <select v-model="model.user.gender" class="form-select" id="gender">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="email" class="col-form-label">Email:</label>
                <input v-model="model.user.email" type="email" class="form-control" id="email">
              </div>
              <div class="mb-3">
                <label for="password" class="col-form-label">Password:</label>
                <input v-model="model.user.password" type="password" class="form-control" id="password">
              </div>
              <div class="mb-3">
                <label for="userProfile" class="col-form-label">Profile Image URL:</label>
                <input type="url" v-model="model.user.userProfile" class="form-control" id="userProfile">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="saveUser" class="btn btn-primary">Register</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



  <script>
import axios from 'axios';

  export default{
    name:'addUserComp',
    data(){
        return{
            model:{
                user:{
                    userID: '',
                    firstName: '',
                    lastName: '',
                    gender: '',
                    emailAdd: '',
                    userPass: '',
                    userProfile: '',

                }
            }
        }
    },
 
    methods:{
        saveUser(){
            axios.post('https://capstoneswordall.onrender.com/adduser', this.model.user)
            .then(res => {
                console.log(res.data)
                alert(res.data.msg)

                this.model.user={
                    userID: '',
                    firstName: '',
                    lastName: '',
                    gender: '',
                    emailAdd: '',
                    userPass: '',
                    userProfile: '',

                }

            })
            .catch(function(error) {
          if (error.response) {
         

            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.msg);
          }
        });
    },
    addUser() {
      this.$store.dispatch("addUser", this.users);
    }
        }
    }
  
</script>