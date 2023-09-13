<template>


  <h1 id="Sing">FORIGED BY GREAT</h1>
<div class="container conSing text-center">
  <div class="row">

    <div class="col">
      <div>
        <img :src="item.prodImg" class="card-img-top img-fluid"  style=" width:22rem; height:22rem; margin:10px auto;">
        <div class="card-body prodCards">
      
         
        </div>
      </div>
    </div>

    <div class="col">
      <div>
        <h2 class="card-title" style="text-decoration: underline;">{{ item.prodName }}</h2>
        <p class="card-text" style="height: 15rem; margin-top: 60px;">
          {{ item.description }}
         </p>
         <p class="priceDiv"> R {{ item.price }}</p>

         <div class="btnSing">
        <button>ADD TO CART</button>     
        <button> <a class="nav-link"  href="/product">MAIN PAGE</a></button>
   

      </div>

      </div>
    </div>
  
  </div>
</div>

  </template>

<script>
export default {
  computed: {
    item() {
      return this.$store.state.signalView;
    },
  }
};
</script>


<style>
#Sing{
    padding-top: 100px;
}
.conSing{

  background: #e4e4e4;
  box-shadow: 10px 10px 50px rgb(0, 0, 0);
  margin-bottom: 50px;
  height:56vh;
}
.btnSing > button{
margin-left: 20px;
}

</style>
<!-- height:100vh; -->