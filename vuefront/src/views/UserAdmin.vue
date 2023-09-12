<template>
    <div>
        <h1 style="padding-top: 100px;">USER ADMIN</h1>

        <div>
        
            <form class="d-flex searchTab" role="search" @submit.prevent="searchProducts">
                <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search by name" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
    
            <h5>Products</h5>
    
            
           <button><a class="nav-link" href="/admin">PRODUCT ADMIN</a></button> 

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
                <tbody>
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
              </table>
        </div>

    </div>
</template>

<script>
// import SpinnerComp from '../components/SpinnerComp.vue';
// import AddUser from '../components/AddUser.vue'

import sweet from 'sweetalert';
import axios from 'axios';


export default {
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
    delUser(userID){
      console.log(userID);

      if(confirm('are you sure?')){
      // console.log(prodID);
      axios.delete(`https://capstoneswordall.onrender.com/user/${userID}`)
      .then(res =>{
        alert(res.data.msg)
      


      })
      }
    }
  },
  mounted() {
    console.log('Fetching users...');
    this.$store.dispatch('fetchAllUsers');
  },
};
</script>


