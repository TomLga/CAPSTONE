  <template>
      <div>
          <h1 id="admin">ADMIN</h1>
          <form class="d-flex searchTab" role="search" @submit.prevent="searchProducts">
              <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search by name" aria-label="Search">
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>

          <h5 style="color:white">GO TO:</h5>
          
          <button style="margin:0px 10px; width"><a class="btn btn-contShopbtn" href="/UserAdmin">USERS ADMIN</a></button> 


      <AddProduct/> 
          

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
                  <td>
                    <router-link :to="{path: '/product/' + item.prodID + '/edit'}" >
                    ✒️
                  </router-link>
                  
                    
                    </td>
                  <td>

                    <button @click="delProduct(item.prodID)">🗑️</button>
                    </td>
                  </tr>
                </tbody>
                <div v-else >

                                    <H1 style="font-size: 30px; color:rgb(255, 255, 255)">loading please wait</H1>
              </div>
            </table>
          </div>
  </template>


  <script>
  import SpinnerComp from '../components/SpinnerComp.vue';
  import AddProduct from '../components/AddProduct.vue'
  import sweet from 'sweetalert2';
  import axios from 'axios';


  export default {
    components: {
      SpinnerComp,
      AddProduct

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
      async delProduct(prodID) {
        const result = await sweet.fire({
          title: 'Are you sure?',
          text: 'You are about to delete this product. This action cannot be undone.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, delete it!',
          cancelButtonText: 'No, cancel',
        });

        if (result.isConfirmed) {
          axios.delete(`https://capstoneswordall.onrender.com/product/${prodID}`)
            .then(res => {
              
              window.location.reload();
            })
            .catch(error => {
              sweet.fire('Error!', 'An error occurred while deleting the product.', 'error');
            });
        }
      },
      searchProducts() {
      },
      },
    
    async fetchProducts() {
        try {
          await this.$store.dispatch('fetchAllProducts');
          sweet("Success!", "Products fetched successfully!", "success");
        } catch (error) {
          sweet("Error!", "An error occurred while fetching products.", "error");
        }
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
    .btn-contShopbtn{
      width: 200px;
      height: 30px;
    }
    .btn-contShopbtn:hover{
     box-shadow: 10px 10px 20px;
    
    }
  </style>