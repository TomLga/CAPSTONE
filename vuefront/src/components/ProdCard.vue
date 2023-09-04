<template>
  <div>
    <h1>from prod comp</h1>
  </div>

  <div class="card-group prodCardBody">

    <div class="row">
      <div class="col-md-4" v-for="item in products" :key="item.prodID">

        <div class="card wholeCard">
          <img :src="item.prodImg" class="card-img-top img-fluid"  style=" width:22rem; height:22rem; margin:auto;">
        
         <!-- <img src="@/assets/images/SwordWallpaperForPhone.jpg"
            class="card-img-top img-fluid"
            style="width: 10rem; margin:auto;"/> -->

          <div class="card-body prodCards">
            <h5 class="card-title">{{ item.prodName }}</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>

          <div id="btncartmore">
            <a href="#" class="btn btn-outline-primary">Add to Cart</a>
            <a href="#" class="btn btn-outline-primary">View More</a>
          </div>

          <div class="card-footer">
            <small class="text-body-secondary">{{ item.price }}</small>
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

<style scoped>
.prodCardBody {
  width: 90%;
  margin: auto;
  display: flex;


}

.wholeCard {
  background: #111010c5;
  color: rgb(255, 254, 254);
  margin: 10px; /* Adjust the margin between cards */
}

.btnCart {
  width: 100px;
}

#btncartmore {
  display: flex;
  justify-content: space-evenly;
}
</style>
