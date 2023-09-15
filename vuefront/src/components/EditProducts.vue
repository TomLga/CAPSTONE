<template>
  <div>
    <h1 style="padding-top: 100px">EDIT PRODUCTS</h1>
    <button id="addBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
      data-bs-whatever="@mdo" fdprocessedid="sia2z">
      Edit Product
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              EDITING PRODUCT
            </h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body wholeModal">
            <form>
              <div class="mb-3">
                <label for="prodID" class="col-form-label">ID:</label>
                <input type="number" v-model="model.product.prodID" class="form-control" id="prodID" />
              </div>
              <div class="mb-3">
                <label for="prodName" class="col-form-label">NAME:</label>
                <input v-model="model.product.prodName" class="form-control" id="prodName" />
              </div>
              <div class="mb-3">
                <label for="qty" class="col-form-label">STOCK ON HAND:</label>
                <input type="number" v-model="model.product.qty" class="form-control" id="qty" />
              </div>
              <div class="mb-3">
                <label for="price" class="col-form-label">PRICE:</label>
                <input type="number" v-model="model.product.price" class="form-control" id="price" />
              </div>
              <div class="mb-3">
                <label for="category" class="col-form-label">CATEGORY:</label>
                <input v-model="model.product.category" class="form-control" id="category" />
              </div>
              <div class="mb-3">
                <label for="prodImg" class="col-form-label">IMG:</label>
                <input type="url" v-model="model.product.prodImg" class="form-control" id="prodImg" />
              </div>
            </form>
          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" @click="updateProduct" class="btn btn-primary">
              SAVE PRODUCT
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "editProductComp",

  data() {
    return {
      model: {
        product: {
          prodID: "",
          prodName: "",
          qty: "",
          price: "",
          category: "",
          prodImg: "",
        },
      },
    };
  },
  mounted() {
    this.getProdData(this.$route.params.id);
  },
  methods: {
    updateProduct() {
      const newValueForProdID = this.model.product.prodID;
      const newValueForProdName = this.model.product.prodName;
      const newValueForQty = this.model.product.qty;

      this.$store.dispatch("updateProducts", this.model.product);
    },

    getProdData(prodID) {
      axios
        .get(`https://capstoneswordall.onrender.com/product/${prodID}`)
        .then((res) => {
          console.log(res.data);
          this.model.product = res.data.product;
        })
        .catch((error) => {
          console.error("Error fetching product data:", error);
        });
    },
  },
  saveProduct() {
    axios
      .post(
        "https://capstoneswordall.onrender.com/Addproduct",
        this.model.product
      )
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg);

        this.model.product = {
          prodID: "",
          prodName: "",
          qty: "",
          price: "",
          category: "",
          prodImg: "",
        };
      })
      .catch((error) => {
        console.error("Error saving product:", error);
      });
  },
};
</script>
