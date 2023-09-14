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
            <td>{{ product.key.qty }}</td>
            <td>{{ product.key.prodName }}</td>
          
            <td>{{ product.key.price }}</td>
            <td>
        <button @click="confirmDelete(product.key.prodID)" class="remove-button">delete</button>
      </td>
          </tr>
        </tbody>
      </table>
      <div v-else class="empty-cart-container">
        <img class="img-fluid" id="emptyCart" src="https://i.postimg.cc/NftSgm0G/empty-Shop-Cart-removebg-preview.png">
      </div>
    </div>
    <div class="total-box">
        <strong>TOTAL:</strong> ${{ total }}
      </div>
      <div class="item-count-box">
  <strong>U Products in Cart:</strong> {{ uniqueProductCount }}
</div>


  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      productQuantities: {}, 
    };
  },
  computed: {
    cart() {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      return cartData;
    },
    total() {
      // Calculate the total price of items in the cart
      if (this.cart) {
        return this.cart.reduce((acc, product) => acc + product.key.price, 0);
      }
      return 0;
    },
    itemCount() {
      // Calculate the total number of items in the cart
      if (this.cart) {
        return this.cart.reduce((acc, product) => acc + product.key.qty, 0);
      }
      return 0;
    },
    uniqueProductCount() {
  if (this.cart) {
    const uniqueProductIDs = new Set();
    this.cart.forEach((product) => {
      uniqueProductIDs.add(product.key.prodID);
    });
    return uniqueProductIDs.size;
  }
  return 0;
},
  },
  methods: {
    removeFromCart(prodID) {
  console.log("Removing product with ID:", prodID);
  this.$store.commit('removeFromCart', prodID); 
},
getProductQuantity(prodID) {
      // Retrieve the quantity of a specific product
      return this.productQuantities[prodID] || 0;
    },
    // Add a method to increase the product quantity when the "Add to Cart" button is clicked
    addToCart(prodID) {
      if (this.productQuantities[prodID]) {
        this.productQuantities[prodID]++;
      } else {
        this.productQuantities[prodID] = 1;
      }
    },
    confirmDelete(prodID) {
      if (window.confirm('Are you sure you want to delete this item?')) {
        this.removeFromCart(prodID);
      }},

    // Modify your existing method for deleting a product to reset its quantity
    delProduct(prodID) {
      console.log(prodID);
      if (confirm('Are you sure?')) {
        axios.delete(`https://capstoneswordall.onrender.com/product/${prodID}`)
          .then(res => {
            alert(res.data.msg);
            // Reset the product quantity to 0 when deleted
            this.productQuantities[prodID] = 0;
          });
      }
    },
  },
};
</script>

<style>
.bodyCart{
  height:82vh;
} 
.total-box {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  text-align: right;
  font-weight: bold;
}

.item-count-box {
  margin-top: 10px;
  font-weight: bold;
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
