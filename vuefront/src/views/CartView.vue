<template>
  <div class="bodyCart">
    <h1 style="margin-top: 100px;">Shopping Cart</h1>
    <div class="cart-container" v-if="cart.length > 0">

      <div class="product-list">
        <div class="product-item" v-for="product in cart" :key="product.prodID">
          <div class="product-info">
            <div class="product-details">
              <div class="product-image">
                <img style="width:10rem" :src="product.key.prodImg" alt="Product Image" />
              </div>
              <div class="product-name">{{ product.key.prodName }}</div>
              <div class="product-name">R{{ product.key.price }}</div>
              <!-- <div class="product-quantity">In Stock: {{ product.key.qty }}</div>
              <div class="product-price">Unit Price: ${{ product.key.price }}</div>  -->
              <div class="product-actions">
                <button @click="confirmDelete(product.key.prodID)" class="remove-button">Remove</button>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      <div class="cart-summary">
        <h3>CART SUMMARY</h3>
        <div class="product-details" v-for="product in cart" :key="product.prodID">
          <div class="product-name">{{ product.key.prodName }}</div>
          <div class="product-quantity">In Stock: {{ product.key.qty }}</div>
          <div class="product-price">Unit Price: ${{ product.key.price }}</div> 
          <div class="product-actions">
            <button @click="confirmDelete(product.key.prodID)" class="remove-button">Remove</button>
          </div>
        </div>
        <div class="item-count-box">
          <strong>Products in Cart:</strong> {{ uniqueProductCount }}
        </div>
        <div class="total-box">
          <strong>TOTAL:</strong> R{{ total }}
        </div>

        <div>
          <button @click="checkout" class="btn" style="margin-top: 15px; width:150px; background-color: rgb(208, 109, 109);">
            CHECKOUT</button>
        </div>
      </div>
    </div>
    <div v-else class="empty-cart-container">
      <img class="img-fluid" id="emptyCart" src="https://i.postimg.cc/NftSgm0G/empty-Shop-Cart-removebg-preview.png">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2';
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

      checkout() {
      Swal.fire({
        title: 'Are you sure you want to checkout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, checkout',
        cancelButtonText: 'Cancel',
      }).then((result) => {
        if (result.isConfirmed) {
          // Display the "processing checkout" alert
          alert('Processing checkout...');

          // Clear the cart by setting it to an empty array
          localStorage.setItem('cart', JSON.stringify([]));

          // Refresh the page to reflect the updated cart state
          location.reload();
        }
      });
    },
  },

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
  
};
</script>

<style>
.bodyCart {
  display: flex;
  flex-direction: column;
  align-items: center;

}

.cart-container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 20px;
  background: #535252;
}

.product-list {
  flex: 1;
}
.bodyCart{
  height:fit-content;
} 
.total-box {
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #000000;
  text-align: start;
  font-weight: bold;
  width: 300px;
  background: #f5f5f5;
}

.item-count-box {
  margin-top: 10px;
  font-weight: bold;
}

/* Add your custom styles here */




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





 /* final style clean code thats not being used */
.product-info{
  display: flex;
  margin-top: 15px;
 
}
 .product-details{
   background: #cec8c8;
   width: 300px;
   margin: 5px;
   padding: 5px;
 }

 .cart-summary{

  width: 50%;
 }

</style>
