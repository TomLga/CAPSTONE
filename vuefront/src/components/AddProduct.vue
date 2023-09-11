<template>
    <div>
        <h1 style="padding-top: 100px;">PROD MODULE</h1>
    <button id="addBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" fdprocessedid="sia2z">ADD NEW PRODUCT</button>
    
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">ADDING NEW PRODUCT</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body wholeModal">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">ID:</label>
                <input type="number" v-model="model.product.prodID" class="form-control">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">NAME:</label>
                <input v-model="model.product.prodName" class="form-control">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">STOCK ON HAND:</label>

              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">PRICE:</label>
                <input  type="number" v-model="model.product.price" class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">CATEGORY:</label>
                <input  v-model="model.product.category" class="form-control" id="message-text">
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">IMG:</label>
                <input  type="url" v-model="model.product.prodImg" class="form-control" id="message-text">
              </div>
             
            </form>
          </div>
          <div class="modal-footer">
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
]
      name:'addProductComp',
      data(){
        return{
          model:{
            product:{
            prodID:"",
            prodName:"",
            qty:"",
            price:"",
            category:"",
            prodImg:""
            }
          }
        }
      },
      methods:{

        saveProduct(){
          axios.post('https://capstoneswordall.onrender.com/Addproduct', this.model.product)
          .then(res =>{
            console.log(res.data)
            alert(res.data.msg);

            this.model.product ={
            prodID:"",
            prodName:"",
            qty:"",
            price:"",
            category:"",
            prodImg:""
            }
          })
          .catch(function(error){
            if(error.response){
              // if(error.response.status == 422)
              // this.errorList = error.response.data.error

              console.log(error.response.data)
              console.log(error.response.status)
              console.log(error.response.headers)
          
            } else if(error.request){
              console.log(error.request);
            } else{
              console.log('Error', error.msg);
            }



          })

        addProduct(){
          this.$store.dispatch("addProduct", this.products)

        }
      }
        
    }
</script>

<style>
#addBtn{
    width: 100px;
    font-size: 10px;
}

.wholeModal{
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.455), rgb(255, 255, 255));
   

}

</style>