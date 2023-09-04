<template>
    <div>
        <h1 id="Sing">this is the view more display</h1>
          
            <div class="card-group prodCardBody">
          
              <div class="row">
                <div class="col-md-4" v-for="item in products" :key="item.prodID">
          
                  <div class="card wholeCard">
                    <img :src="item.prodImg" class="card-img-top img-fluid"  style=" width:22rem; height:22rem; margin:10px auto;">
                  
             
          
                    <div class="card-body prodCards">
                      <h2 class="card-title">{{ item.prodName }}</h2>
                      <p class="card-text" style="height: 15rem;">
                       {{ item.description }}
                      </p>
                    </div>
                    
                    <div class="card-footer">
                      <p class="priceDiv"> R {{ item.price }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>       
       

    </div>
</template>

<script>
export default {
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
#Sing{
    padding-top: 100px;
}

</style>