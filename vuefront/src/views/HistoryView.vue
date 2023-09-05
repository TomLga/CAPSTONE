<template>
  <div>
    <div>
      <h1 id="textHistory">HISTORY</h1>
    </div>
    <div class="card mb-3 wholeHistory" v-for="item in history" :key="item.iID">
      <div class="row">
        <div class="col-md-4" id="imgCenter">
  
          <img :src="item.iImg" class="img-fluid rounded-start img"
           style=" width:12rem; height:12rem;">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.iName }}</h5>
            <p class="card-text">{{ item.iDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!-- get imgs from goodle drive  -->


<script>
export default {
  computed: {
    products() {
      return this.$store.state.history;
    },
  },
  mounted() {
    this.$store.dispatch('fetchHistory');
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
