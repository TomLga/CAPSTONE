<template>
  <div>

    <button style="margin:10px;" id="addBtn" type="button" class="btn btn-primary" data-bs-toggle="modal"
      data-bs-target="#exampleModal" data-bs-whatever="@mdo" fdprocessedid="sia2z">
      ADD NEW PRODUCT
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">ADDING NEW PRODUCT</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body wholeModal">
            <form>
              <div class="mb-3">
                <label for="prodID" class="col-form-label">ID:</label>
                <input type="number" v-model="model.product.prodID" class="form-control" id="prodID" required>
              </div>
              <div class="mb-3">
                <label for="prodName" class="col-form-label">NAME:</label>
                <input v-model="model.product.prodName" class="form-control" id="prodName" required>
              </div>
              <div class="mb-3">
                <label for="qty" class="col-form-label">STOCK ON HAND:</label>
                <input type="number" v-model="model.product.qty" class="form-control" id="qty" required>
              </div>
              <div class="mb-3">
                <label for="price" class="col-form-label">PRICE:</label>
                <input type="number" v-model="model.product.price" class="form-control" id="price required">
              </div>
              <div class="mb-3">
                <label for="category" class="col-form-label">CATEGORY:</label>
                <input v-model="model.product.category" class="form-control" id="category" required>
              </div>
              <div class="mb-3">
                <label for="prodImg" class="col-form-label">IMG:</label>
                <input type="url" v-model="model.product.prodImg" class="form-control" id="prodImg">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <span>REFRESH TO SEE UPDATES</span>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" @click="saveProduct" class="btn btn-primary">ADD New PRODUCT</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'addProductComp',
  data() {
    return {
      model: {
        product: {
          prodID: "",
          prodName: "",
          qty: "",
          price: "",
          category: "",
          prodImg: ""
        }
      }
    };
  },
  methods: {
    saveProduct() {
      axios
        .post('https://capstoneswordall.onrender.com/Addproduct', this.model.product)
        .then((res) => {
          console.log(res.data);
          alert(res.data.msg);

          this.model.product = {
            prodID: "",
            prodName: "",
            qty: "",
            price: "",
            category: "",
            prodImg: ""
          };
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            window.location.reload();
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.msg);
          }
        });
    },
    addProduct() {
      this.$store.dispatch("addProduct", this.products);
    }
  }
}; 
</script>


<style>
#addBtn {
  width: 100px;
  font-size: 10px;
}
#addBtn:hover {
  box-shadow: 10px 0px 20px;
}
.wholeModal {
  background: linear-gradient(45deg, rgba(0, 0, 0, 0.455), rgb(255, 255, 255));
}
</style>