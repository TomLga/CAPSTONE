<template>
  <div>
    <h1 style="padding-top: 100px;">YOUR'RE ON YOUR WAY!</h1>
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body wholeModal modal-content-container">
            <div class="image-container ">
              <img class="img-fluid" style="width: 30rem;" src="https://i.postimg.cc/GhWnhGLh/143531044-max.jpg">
            </div>
            <div class="form-container">
            <form  action="https://formspree.io/f/xbjvydzj"
            method="POST">
              
              <div class="mb-3">
                <label for="prodName" class="col-form-label" ></label>
                <input v-model="model.user.firstName" class="form-control" id="prodName" placeholder="NAME" required>
              </div>
              <div class="mb-3">
                <label for="qty" class="col-form-label"></label>
                <input  v-model="model.user.lastName"   class="form-control" id="qty" placeholder="LAST NAME" required>
              </div>
              <div class="mb-3">
                <label for="gender" class="col-form-label">Gender</label>
                <select v-model="model.user.gender" class="form-select" id="gender" required > 
                  <option value="" disabled>SELECT</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
           
              <div class="mb-3">
                <label for="category" class="col-form-label"></label>
                <input   v-model="model.user.emailAdd" class="form-control" id="category" placeholder="EMAIL ADDRESS" required>
              </div>
              <div class="mb-3">
                <label for="category" class="col-form-label"></label>
                <input  type="password" v-model="model.user.userPass" class="form-control" id="category" placeholder="PASSWORD" required>
              </div>
              <div class="mb-3">
                <label for="prodImg" class="col-form-label"></label>
                <input type="url" v-model="model.user.userProfile" class="form-control" id="prodImg" placeholder="profile img(optional)">
              </div>
            </form>
            <span id="signSpan">Alraedy have an account? <router-link  style="color:white; font-size: 20px;" to="/resgister">LOGIN</router-link></span>

            <div class="modal-footer">
              <button type="submit" @click="saveUser" class="btn btn-primary">REGISTER</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

  <script>
import axios from 'axios';


  export default{
    name:'addUserComp',
    data(){
        return{
            model:{
                user:{
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
          if (
        !this.model.user.firstName ||
        !this.model.user.lastName ||
        !this.model.user.gender ||
        !this.model.user.emailAdd ||
        !this.model.user.userPass
      ) {
        alert('Please fill in all the required fields');
        return;
      }



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

<style>
.wholeModal{
  width: 70%;
  margin: auto;
  padding: 10px;
  background: #3d3c3c;
}


.modal-content-container {
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: center; /* Center horizontally */
}

.image-container {
  width: 50%; 
  padding: 20px; 
}

.form-container {
  width: 50%; 
  padding: 20px;
  color: white;
}


</style>