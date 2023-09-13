<template>
  <div class="bodyCart">
    <h1 style="margin-top: 100px;">Shopping Cart</h1>
    <div>

      <table class="cart-table" v-if="cart">
        <thead>
          <tr>
            <th>#ID</th>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>remove</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in cart" :key="product.prodID">
            <td>{{ product.key.prodID }}</td>
            <td>{{ product.key.prodImg }}</td>
            <td>{{ product.key.prodName }}</td>
            <td>{{ product.key.qty }}</td>
            <td>{{ product.key.price }}</td>
            <td><button @click="delProduct(product.key.prodID)">🗑️</button></td>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty-cart-container">
        <img class="img-fluid" id="emptyCart" src="https://i.postimg.cc/NftSgm0G/empty-Shop-Cart-removebg-preview.png">
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  computed: {
    cart() {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      return cartData;
    },
  },
  methods: {
    // this needs to come out
    delProduct(prodID){
      console.log(prodID);

      if(confirm('are you sure?')){
   
      axios.delete(`https://capstoneswordall.onrender.com/product/${prodID}`)
      .then(res =>{
        alert(res.data.msg)
    

      })
      }

    },
  }
};
</script>

<style>
.bodyCart{
  height:82vh;
} 

/* Add your custom styles here */
.cart-table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
}

.cart-table th,
.cart-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.cart-table th {
  background-color: #c7a4a4;
}

#checkout-heading {
  font-size: 24px;
  margin-top: 20px;
}

.empty-cart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh; /* Adjust the height as needed */
}

#emptyCart {
  background: #000;
}

</style>
