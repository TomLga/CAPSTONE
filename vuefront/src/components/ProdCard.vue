<template>

  <form class="d-flex searchTab" role="search" @submit.prevent="searchProducts">
    <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success btnSearch" type="submit">Search</button>
  </form>

  <div class="card-group prodCardBody">
    <div class="row" v-if="filteredProducts.length > 0">
      <div class="col-md-6 col-lg-4" v-for="item in filteredProducts" :key="item.prodID">
        <!-- Your card content here -->
        <div class="card wholeCard">
          <img :src="item.prodImg" class="card-img-top img-fluid" style="width: 22rem; height: 22rem; margin: 10px auto;">
          <div class="card-body prodCards">
            <h2 class="card-title">{{ item.prodName }}</h2>
          </div>

          <div id="btncartmore">
    <button class="btn btn-outline-primary" @click="viewItem(item.prodID)" >VIEW MORE</button>

            <router-link to="/viewMore" class="btn btn-outline-primary">CART</router-link>
          </div>


          <div class="card-footer">
            <p class="priceDiv"> R {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <SpinnerComp />
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
    viewItem(prodID){
      const cProd = this.products.find(
        (item)=>
        item.prodID === prodID
      );
      this.$store.commit("setSignalView", cProd);
      this.$router.push({name: "prodSingView", params:{ prodID:prodID}})
    }
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
  background: #111010c5;
  color: rgb(255, 254, 254);
  margin: 20px; /* Adjust the margin between cards */
}
#btncartmore {
  display: flex;
  justify-content: space-evenly;
}
.priceDiv{
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


.searchTab{
  width: 50%;
  margin: auto;
  margin-bottom: 20px;


}
.searchTab> input{
  background: #706767;
  color: white;
}

@media (max-width: 600px) {
  .wholeCard{
    width: 400px;
  
  }

}


.wholeCard {
  background: #111010c5;
  color: rgb(255, 254, 254);
  margin: 20px; /* Adjust the margin between cards */

  /* Add padding and set a maximum width to control the card's size */
  padding: 15px;
  max-width: 100%; /* Allow the card to take up the full width of its container */

  /* Add a box shadow for a card-like effect */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

  /* Add border-radius for rounded corners */
  border-radius: 10px;

  /* Center the card content horizontally */
  margin-left: auto;
  margin-right: auto;

  /* Add some spacing between the card's elements */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (max-width: 600px) {
  form{
  width: 100%;
  
  }
}
</style>



