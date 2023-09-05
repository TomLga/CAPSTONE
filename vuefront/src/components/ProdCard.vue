<template>
  <div>
    <h1>from prod comp</h1>
  </div>



  <div class="card-group prodCardBody">

    <div class="row" v-if="products">
      <div class="col-md-4" v-for="item in products" :key="item.prodID">

        <div class="card wholeCard">
          <img :src="item.prodImg" class="card-img-top img-fluid"  style=" width:22rem; height:22rem; margin:10px auto;">


          <div class="card-body prodCards">
            <h2 class="card-title">{{ item.prodName }}</h2>
            <!-- <p class="card-text" style="height: 15rem;">
             {{ item.description }}
            </p> -->
          </div>

          <div id="btncartmore">
           
            <a href="#" class="btn btn-outline-primary">View More</a>
            <router-link to="/viewMore"  class="btn btn-outline-primary">CART</router-link>
          </div>

          <div class="card-footer">
            <p class="priceDiv"> R {{ item.price }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else >
      <SpinnerComp/>
  </div>
  </div>
</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue'
export default {
components:{
  SpinnerComp
  
},
  computed: {
    products() {
      return this.$store.state.products;
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


</style>
