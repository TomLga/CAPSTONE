<template>
    <div>
        <div class="ftProdView">

        <div class="card ftCard">

            <div class="card-img-top img-fluid">
                <img class="img-fluid" src="https://i.postimg.cc/NfBnKP1y/saber-1.jpg" style=" width:22rem; height:22rem;">
            </div>
            <div class="card-body cbodyhome" style="display: flex; flex-direction: column; justify-content: space-between;">
              <div>
                <h3 class="card-title" style="color: white; text-decoration: underline; text-align: center">Saber</h3>
                <p class="card-text cTextHome">The Saber sword, with origins in various cultures including Europe and the Middle East, is a curved, single-edged blade known for its effectiveness in cavalry charges and swift cutting motions. It was prominently used by cavalry forces for its slashing capabilities and became an iconic symbol of mounted warriors and military prowess.</p>
              </div>
              

            </div>
                      
          </div>


        <div class="card ftCard">
           
            <div class="card-img-top img-fluid">
                <img class="img-fluid" src="https://i.postimg.cc/qvZDZJWn/kanta-long-2.jpg"   style=" width:22rem; height:22rem; ">
            </div>

            <div class="card-body cbodyhome" >
              <h3 class="card-title" style="color: white; text-decoration:underline; text-align:center" >Japanse Kanta</h3>
              <p class="card-text cTextHome">The Japanese katana sword is an iconic weapon originating from Japan, characterized by its curved, single-edged blade and distinctive appearance. Traditionally used by samurai, the katana was renowned for its sharpness and cutting ability, symbolizing the warrior's honor and craftsmanship while serving as a symbol of status and skill.</p>

              <!-- <div>
              <button class="btn btn-outline-primary viewMoreHome" style="background-color: ;" @click="viewItem(item.prodID)">VIEW MORE</button>
            </div> -->
            </div>
            
            
        </div>
          

        <div class="card ftCard">
           
            <div class="card-img-top img-fluid">
                <img class="img-fluid" src="https://i.postimg.cc/yYjbcXPL/falcata-1.jpg"   style=" width:22rem; height:22rem;">
            </div>

            <div class="card-body cbodyhome">
              <h3 class="card-title" style="color: white; text-decoration:underline; text-align:center">Falcata</h3>
              <p class="card-text cTextHome">The falcata is a distinctive sword originating from the Iberian Peninsula, known for its single-edged curve near the tip and a convex edge on the inner side. It was primarily used by ancient Iberian warriors and is recognized for its effectiveness in close combat due to its slashing capabilities and unique design. A pre-Roman Iberian sword with a single-edged curve near the tip, combining aspects of single and double-edged designs.'
              </p>
          <!-- <div>
              <button class="btn btn-outline-primary viewMoreHome" style="background-color: ;" @click="viewItem(item.prodID)">VIEW MORE</button>
            </div> -->
            </div>

          </div>
        </div>
    </div>
</template>




<script>
import SpinnerComp from '../components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp,
  },
  data() {
    return {
      searchQuery: '',
      priceSortOrder: 'asc', 
      SelectedCategory: null,// Initialize the sorting order
    };
  },
  computed: {
    products() {
    return this.$store.state.products || [];
 
  },
  methods: {
    searchProducts() {
      // if (this.searchQuery) {
      //   return this.searchBar()
      // } else {
      //   return this.products
      // }
     
    },

    viewItem(prodID){
      const cProd = this.products.find(
        (item)=>
        item.prodID === prodID
      );
      this.$store.commit("setSignalView", cProd);
      this.$router.push({name: "prodSingView", params:{ prodID:prodID}})
    },


  AddCart(item) {
      const data = JSON.parse(localStorage.getItem('cart')) || []

      const newData = {key: item}
      data.push(newData)

      localStorage.setItem('cart', JSON.stringify(data))
    },
    handleSortOption(event) {
    const selectedSortOption = event.target.value;

    if (selectedSortOption === 'name') {
      this.sortABC();
    } else if (selectedSortOption === 'priceLowToHigh') {
      this.sortAmount('asc');
    } else if (selectedSortOption === 'priceHighToLow') {
      this.sortAmount('desc');
    }
  },


  },
  mounted() {
    this.$store.dispatch('fetchAllProducts');
  },
  }
  }
</script>



<style>



.ftProdView{
    display: flex;
    justify-content: space-evenly;
   
  }
  .card{
  box-shadow: 15px 25px 20px rgb(120, 113, 113);

}
.ftCard{
  width: 28rem;
}

.cbodyhome{
  background: #000000c1;
}
.cTextHome{
  color: white;
}
.viewMoreHome{
  width: 200px;
  margin: auto;
  bottom: 50%;
}
.card-body.cbodyhome {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Ensure the card-body takes up the full height */
}

.card-title {
  color: white;
  text-decoration: underline;
  text-align: center;
}

.cTextHome {
  color: white;
}

.btn.viewMoreHome {
  margin-top: auto; /* Push the button to the bottom */
  align-self: center; /* Center the button horizontally */
}

/* Add a media query to stack cards on smaller screens */
@media (max-width: 900px) {
  .ftProdView {
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin: auto;
  }
  @media (max-width: 400px) {
    .viewMoreHome{
      width: 100px;
    }

  }

  .ftCard {
    width: 100%; /* Full width for cards on smaller screens */
    margin-bottom: 20px; /* Add some spacing between stacked cards */
  }
}


</style>