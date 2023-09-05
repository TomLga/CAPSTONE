<template>
  <div>
    <div>
      <h1 id="textHistory">HISTORY</h1>
    </div>

    <div class="card mb-3 wholeHistory">
      <div class="row" v-if="products">
        <div class="col-md-4" id="imgCenter"  v-for="item in products" :key="item.prodID">
  
          <img :src="item.prodImg" class="img-fluid rounded-start img"
           style=" width:12rem; height:12rem;">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.prodName }}</h5>
            <p class="card-text">{{ item.description }}</p>
          </div>
        </div>
      </div>
      <div v-else >
        <SpinnerComp/>
    </div>
    </div>
  </div>
</template>
<!-- get imgs from goodle drive  

  ,-->


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

<style>
#textHistory {
  padding-top: 100px;
}
.wholeHistory{
  width: 80%;
  margin: auto;
}
#imgCenter{

width: 13rem;
}

</style>
