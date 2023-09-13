<template>


  <h1 id="Sing">FORIGED BY GREAT</h1>
<div class="container conSing text-center">
  <div class="row singConatiner" style="background-color:rgb(227, 224, 220)">

    <div class="col">
      <div>
        <img :src="item.prodImg" class="card-img-top img-fluid"  style=" width:22rem; height:22rem; margin:10px auto;">
        <div class="card-body prodCards">
      
         
        </div>
      </div>
    </div>

    <div class="col">
  
        <h2 class="card-title" style="text-decoration: underline;">{{ item.prodName }}</h2>
        <p class="card-text" style="height: 15rem; margin-top: 60px;">
          {{ item.description }}
         </p>
         <div class="btnSing">
          <button @click="AddCart(item)" class="btn btn-outline-primary"> add
            <img style="width: 1rem;" src="https://i.postimg.cc/Vkfvwcdf/cart-add-to-cart-icon-transparent-removebg-preview.png">        
          </button> 
        <button> <a class="btn btn-outline-primary" href="/product">MAIN PAGE</a></button>

      </div>
         <p class="priceDiv"> R {{ item.price }}</p>

        
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
  },
  methods:{
    
  AddCart(item) {
      const data = JSON.parse(localStorage.getItem('cart')) || []

      const newData = {key: item}
      data.push(newData)

      localStorage.setItem('cart', JSON.stringify(data))
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
.singConatiner{
  height: 500px;
}

</style>
<!-- height:100vh; -->