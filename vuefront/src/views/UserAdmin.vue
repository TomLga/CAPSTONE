<template>
    <div>
        <h1 style="padding-top: 100px;">USER ADMIN</h1>

        <div>
        
            <form class="d-flex searchTab" role="search" @submit.prevent="searchProducts">
                <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search by name" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
    
              <div style="display: flex;">
                <h3>Go back:</h3>
           <button style="margin:0px 10px;"><a class="btn btn-contShopbtn" href="/admin">PRODUCT ADMIN</a></button> 

              </div>
            <table class="table">
                <thead>
                  <tr>
                    <td>#ID</td>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>gender</th>
                    <th>email</th>
                    <th>profile</th>
                    <th>EDIT</th>
                    <th>DEL</th>
            
                  </tr>
                </thead>
                <tbody v-if="users">
                  <tr v-for="data in users" :key="data.userID">
                    <td>{{ data.userID }}</td>
                    <td>{{ data.firstName }}</td>
                    <td>{{ data.lastName }}</td>
                    <td>{{ data.gender}}</td>
                    <td>{{ data.emailAdd }}</td>
                    <td> <img :src="data.userProfile" class="card-img-top img-fluid" style="width: 5rem; height: 5rem; margin:auto;"></td>
                    <td> ✒️</td>
                    <td>

                      <button @click="delUser(data.userID)">🗑️</button>
                      </td>
                  </tr>
                </tbody>
                <div v-else >
                  <!-- <SpinnerComp/> -->
                  <H1 style="font-size: 30px; color:rgb(255, 0, 0)">loading please wait</H1>
              </div>
              </table>
        </div>

    </div>
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue';
import axios from 'axios';
import sweet from 'sweetalert2';


export default {
  components:{
    SpinnerComp

  },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    users() {
      return this.$store.state.users 
    },
    filteredHistory() {
  if (this.history) {
    return this.history.filter(item =>
      item.iName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  } else {
    return [];
  }
},

  },
  methods: {
    searchProducts() {
    },
    async delUser(userID) {
      const result = await sweet.fire({
        title: 'Delete User',
        text: 'Are you sure you want to delete this user?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete',
        cancelButtonText: 'No, cancel',
        confirmButtonColor: '#d33',
      });

      if (result.isConfirmed) {
        axios.delete(`https://capstoneswordall.onrender.com/user/${userID}`)
          .then(res => {
            alert(res.data.msg);
            window.location.reload();
          
          })
          .catch(error => {
            sweet.fire('Error', 'An error occurred while deleting the user.', 'error');
          });
      }
    },
    
  },
  mounted() {
    console.log('Fetching users...');
    this.$store.dispatch('fetchAllUsers');
  },
};
</script>


<style>
.searchTab{
  width: 50rem;
  margin: auto;

}
.searchTab >input{
  background: #bab5b5;
}
.btn-contShopbtn{
  width: 200px;
  height: 30px;
}
.btn-contShopbtn:hover{
 box-shadow: 10px 10px 20px;

}
</style>