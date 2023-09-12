<template>
  <div>
    <h1 style="padding-top: 100px;">USER COMPONENT</h1>
    <button
      id="addBtn"
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exa
mpleModal"
      data-bs-whatever="@mdo"
      fdprocessedid="sia2z"
    >
      ADD NEW USER
    </button>


    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">ADDING NEW USER</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body wholeModal">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">ID:</label>
                <input type="number" v-model="model.user.userID" class="form-control">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">NAME:</label>
                <input v-model="model.user.firstName" class="form-control">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">SURNAME:</label>
                <input v-model="model.user.lastName" class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">GENDER</label>
                <input v-model="model.user.gender" class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">EMIAL:</label>
                <input v-model="model.user.emailAdd" class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Password:</label>
                <input v-model="model.user.userPass" type="url" class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">IMG:</label>
                <input v-model="model.user.userProfile" type="url" class="form-control" id="message-text">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="saveUser" class="btn btn-primary">ADD USER</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import e from 'express';


export default {
  name: 'addUserComp',
  data() {
    return {
      model: {
        user: {
          userID: '',
          firstName: '',
          lastName: '',
          gender: '',
          emailAdd: '',
          userPass: '',
          userProfile: '',
        },
      },
      userAdded: false, // Initialize the userAdded property
    };
  },
  methods: {
    saveUser() {
  axios
    .post('https://capstoneswordall.onrender.com/addUser', this.model.user)
    .then((res) => {
      console.log(res.data);
      alert(res.data.msg)
      this.model.user = {
        userID: '',
        firstName: '',
        lastName: '',
        gender: '',
        emailAdd: '',
        userPass: '',
        userProfile: '',
      };




        })
        .catch(function (error) {
          if(error.response){
            if(error.response.status == 422){
     


            }
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          else if(error.request){
            console.log(error.request);
          }else{
            console.log("Error", error.msg);
          }
       
    });
      }
   
    }
  }
       
       
   
//     addUser() {
//       this.$store.dispatch('addUser', this.user);
//     },
//   },


</script>








<style>
#addBtn{
    width: 100px;
    font-size: 10px;
}


.wholeModal{
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.455), rgb(255, 255, 255));


}


</style>
