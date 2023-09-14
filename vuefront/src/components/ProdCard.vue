<template>
  <div>
    <form class="d-flex searchTab" role="search" @submit.prevent="searchProducts">
      <input v-model="searchQuery" class="form-control me-2 barSearch" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-dark btnSearch" type="submit">Search</button>
    </form>
    <div id="optCategory">
    <select class="filterButton" @change="filterByCategory">
      <option value=""> filtered by WORLDWIDE 🌍</option>
      <option value="Europe">Europe⚔️ </option>
      <option value="Asia">Asia ⚔️</option>
      <option value="Africa">Africa ⚔️</option>  
    </select>


    <div id="namePriceFilter">
    <select class="filterName" @change="handleSortOption">
      <option value="name"> filterd by Name..</option>
      <option value="priceLowToHigh">Price Low to High</option>
      <option value="priceHighToLow">Price High to Low</option>
    
    </select>
  </div>
  </div>

    <div class="card-group prodCardBody">

      <div class="row" v-if="products">
        <div class="col-md-6 col-lg-4" v-for="item in filteredProducts" :key="item.prodID">
    
          <div class="card wholeCard">
            <img :src="item.prodImg" class="card-img-top img-fluid" style="width: 22rem; height: 22rem; margin: 10px auto;">
            <div class="card-body prodCards">
              <h2 class="card-title">{{ item.prodName }}</h2>
            </div>

            <div id="btncartmore">
              <button class="btn btn-outline-dark" @click="viewItem(item.prodID)">VIEW MORE</button>
            
              <button @click="AddCart(item)" class="btn btn-outline-dark"> add
                <img style="width: 1rem;" src="https://i.postimg.cc/Vkfvwcdf/cart-add-to-cart-icon-transparent-removebg-preview.png">        
              </button>
             
            </div>

            <div class="card-footer">
              <p class="priceDiv"> R {{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div v-else >
       <h1>PLEASE WAIT</h1>
    </div>
    </div>
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
      priceSortOrder: 'asc', 
      SelectedCategory: null,// Initialize the sorting order
    };
  },
  computed: {
    products() {
    return this.$store.state.products || [];
  },
  filteredProducts() {
    const searchQuery = this.searchQuery.toLowerCase();

    // Filter by search query and category
    return this.products.filter(item => {
      const matchesSearch = item.prodName.toLowerCase().includes(searchQuery);
      const matchesCategory = !this.SelectedCategory || item.category === this.SelectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  },
  },
  methods: {
    searchProducts() {
      // if (this.searchQuery) {
      //   return this.searchBar()
      // } else {
      //   return this.products
      // }
     
    },
   
    filterByCategory(event) {
    // Get the selected category from the event target's value
    const selectedCategory = event.target.value;
    this.SelectedCategory = selectedCategory;
  },
    sortAmount(order) {
      // Update the priceSortOrder based on the button clicked
      this.priceSortOrder = order;

      this.products.sort((a, b) => {
        const priceA = a.price;
        const priceB = b.price;

        if (this.priceSortOrder === 'asc') {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      });
    },
    sortABC() {
      this.amount = !this.amount;
      this.products.sort((a, b) => {
        const big = a.prodName.toLowerCase();
        const small = b.prodName.toLowerCase();

        if (big < small) {
          return this.amount ? -1 : 1;
        } else if (big > small) {
          return this.amount ? 1 : -1;
        } else {
          return 0;
        }
      });
    },




    viewItem(prodID){
      const cProd = this.products.find(
        (item)=>
        item.prodID === prodID
      );
      this.$store.commit("setSignalView", cProd);
      this.$router.push({name: "prodSingView", params:{ prodID:prodID}})
    },


  AddCart(item) {
      const data = JSON.parse(localStorage.getItem('cart')) || []

      const newData = {key: item}
      data.push(newData)

      localStorage.setItem('cart', JSON.stringify(data))
    },
    handleSortOption(event) {
    const selectedSortOption = event.target.value;

    if (selectedSortOption === 'name') {
      this.sortABC();
    } else if (selectedSortOption === 'priceLowToHigh') {
      this.sortAmount('asc');
    } else if (selectedSortOption === 'priceHighToLow') {
      this.sortAmount('desc');
    }
  },


  },
  mounted() {
    this.$store.dispatch('fetchAllProducts');
  },
};
</script>

<style scoped>
.prodCardBody {
  width: 90%;
  margin: auto;
  display: flex;

}
.wholeCard {
  /*background: #111010c5;*/
  background-color: rgba(45, 47, 47, 0.823);
  color: rgb(220, 214, 214);
  margin: 20px;
  padding: 15px;
  max-width: 100%;
  box-shadow: 10px 10px 6px rgb(0, 0, 0);
  border:3px solid black;
  border-radius: 10px ;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#btncartmore {
  display: flex;
  
  width: 300px;
  margin: auto ;

}
#btncartmore > button {
  background: #aaa6a688;
 margin-left:4px;
}
.priceDiv {
  font-size: 20px;
}
/*hover effects*/
img {
  transition: transform 1s ease-in-out, border 1s ease-in-out;
}
img:hover {
  transform: scale(1.2);
  border: 7px solid rgb(0, 0, 0);
  border-radius: 20px;
}
.searchTab {
  width: 50%;
  margin: auto;
  margin-bottom: 20px;
  box-shadow: 20px 20px 20px ;

}
.searchTab > input {
  background: #a6a4a4;
  color: white;
}
@media (max-width: 600px) {
  .wholeCard {
    width: 400px;
  }
  form {
    width: 100%;
  }
}




/*new styles*/
.btnSearch{
  background: #d4cdcd58;
  width: 200px;
}

.btnSearch:hover{
  background: #ffffff81;
  color: black;
}

#optCategory{
  margin-left: 80%;
 
}
.filterButton,.filterName{
  background:rgba(0, 0, 0, 0.449);
  color: white;
  width: 240px;
  border-radius: 10px 0px 20px;
}
.filterName {
  background: rgba(0, 0, 0, 0.449);
  color: white;
  width: 240px;
  border-radius: 10px 0px 20px;
  margin-top: 10px; /* Add margin to create space between the two dropdowns */
}
</style>
