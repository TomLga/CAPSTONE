<template>
    <div>
        <h1 id="admin">USERS page</h1>
        <!-- <form class="d-flex searchTab" role="search" @submit.prevent="searchProducts">
            <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search by name" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->

        <h5>Products</h5>

        
       <button><a class="nav-link" href="/admin">PRODUCT ADMIN</a></button> 

     <AddUser/> 
        

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
                <td>🗑️</td>
              </tr>
            </tbody>
          </table>
    </div>
</template>


<script>
import SpinnerComp from '../components/SpinnerComp.vue';
import AddUser from '../components/AddUser.vue'


export default {
  components: {
    SpinnerComp,
    AddUser

  },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    users() {
      return this.$store.state.users //|| [];
    },
//     filteredUsers() {
//   const searchQuery = this.searchQuery.toLowerCase();
//   return this.users.filter(data =>
//     data.userName && data.userName.toLowerCase().includes(searchQuery)
//   )
//     },
  },
  methods: {
    searchProducts() {
    },
  },
  mounted() {
    console.log('Fetching users...');
    this.$store.dispatch('fetchAllUsers');
  },
};
</script>



<style>
#admin{
    padding-top: 100px;
}

.searchTab{
    width: 50%;
    margin: auto;
    margin-bottom: 20px;
  
  }
  .searchTab> input{
    background: #ccc8c8;
    color: white;
  }
  #userBtnlink{
    float: right;
  }

</style>

