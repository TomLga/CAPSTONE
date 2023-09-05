<template>
    <div>
        <h1 id="admin">ADMIN</h1>
        <form class="d-flex searchTab" role="search" @submit.prevent="searchProducts">
            <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search by name" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>

        <h5>Products</h5>
      <a href="../views/UsersView.vue">USERS</a>
        

        <table class="table">
            <thead>
              <tr>
                <td>#ID</td>
                <th>Name</th>
                <th>qty</th>
                <th>price</th>
                <th>category</th>
                <th>prodImg</th>
                <th>EDIT</th>
                <th>DEL</th>
        
              </tr>
            </thead>
            <tbody v-if="filteredProducts.length > 0">
              <tr v-for="item in filteredProducts" :key="item.prodID">
                <td>{{ item.prodID }}</td>
                <td>{{ item.prodName }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.price}}</td>
                <td>{{ item.category }}</td>
                <td> <img :src="item.prodImg" class="card-img-top img-fluid" style="width: 5rem; height: 5rem; margin:auto;"></td>
                <td> ✒️</td>
                <td>🗑️</td>
              </tr>
            </tbody>
          </table>

        

    </div>
</template>


<script>
import SpinnerComp from '../components/SpinnerComp.vue';


export default {
  components: {
    SpinnerComp,

  },
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    products() {
      return this.$store.state.products || [];
    },
    filteredProducts() {
      const searchQuery = this.searchQuery.toLowerCase();
      return this.products.filter(item =>
        item.prodName.toLowerCase().includes(searchQuery)
      );
    },
  },
  methods: {
    searchProducts() {
    },
  },
  mounted() {
    this.$store.dispatch('fetchAllProducts');
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