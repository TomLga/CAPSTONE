<template>
  <div>
    <h1 style="padding-top: 100px;">USER MODULE</h1>
    <button
      id="addBtn"
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      data-bs-whatever="@mdo"
      fdprocessedid="sia2z"
    >
    REGISTER
    </button>

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
            <h1 class="modal-title fs-5" id="exampleModalLabel">ADDING NEW USER</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body wholeModal">
            <form>
              <div class="mb-3">
                <label for="prodID" class="col-form-label">ID:</label>
                <input type="number" v-model="model.user.userID"  class="form-control" id="prodID">
              </div>
              <div class="mb-3">
                <label for="prodName" class="col-form-label">NAME:</label>
                <input   v-model="model.user.firstName" class="form-control" id="prodName">
              </div>
              <div class="mb-3">
                <label for="qty" class="col-form-label">Surname</label>
                <input  v-model="model.user.lastName"   class="form-control" id="qty">
              </div>
              <div class="mb-3">
                <label for="price" class="col-form-label">Gender</label>
                <input  v-model="model.user.gender" class="form-control" id="price">
              </div>
              <div class="mb-3">
                <label for="category" class="col-form-label">emailAdd</label>
                <input   v-model="model.user.emailAdd" class="form-control" id="category">
              </div>
              <div class="mb-3">
                <label for="category" class="col-form-label">Password:</label>
                <input  v-model="model.user.userPass" class="form-control" id="category">
              </div>
              <div class="mb-3">
                <label for="prodImg" class="col-form-label">IMG:</label>
                <input type="url" v-model="model.user.userProfile" class="form-control" id="prodImg">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="saveUser" class="btn btn-primary">ADD New User</button>
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