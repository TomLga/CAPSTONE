<template>
    <div>
        <div class="ftProdView">

        <div class="card ftCard">

            <div class="card-img-top img-fluid">
                <img src="https://i.postimg.cc/NfBnKP1y/saber-1.jpg"   style=" width:22rem; height:22rem;">
            </div>

            <div class="card-body ">
              <h5 class="card-title">Saber</h5>
              <p class="card-text">The Saber sword, with origins in various cultures including Europe and the Middle East, is a curved, single-edged blade known for its effectiveness in cavalry charges and swift cutting motions. It was prominently used by cavalry forces for its slashing capabilities and became an iconic symbol of mounted warriors and military prowess.</p>
              <button class="btn btn-outline-primary" @click="viewItem(item.prodID)" >VIEW MORE</button>
            </div>
          </div>


        <div class="card ftCard">
           
            <div class="card-img-top img-fluid">
                <img src="https://i.postimg.cc/qvZDZJWn/kanta-long-2.jpg"   style=" width:22rem; height:22rem; margin:10px auto;">
            </div>

            <div class="card-body" >
              <h5 class="card-title">Japanse Kanta</h5>
              <p class="card-text">The Japanese katana sword is an iconic weapon originating from Japan, characterized by its curved, single-edged blade and distinctive appearance. Traditionally used by samurai, the katana was renowned for its sharpness and cutting ability, symbolizing the warrior's honor and craftsmanship while serving as a symbol of status and skill.</p>
              <button class="btn btn-outline-primary" @click="viewItem(item.prodID)" >VIEW MORE</button>
            </div>
          </div>
        <div class="card ftCard">
           
            <div class="card-img-top img-fluid">
                <img src="https://i.postimg.cc/yYjbcXPL/falcata-1.jpg"   style=" width:22rem; height:22rem; margin:10px auto;">
            </div>

            <div class="card-body">
              <h5 class="card-title">Falcata</h5>
              <p class="card-text">The falcata is a distinctive sword originating from the Iberian Peninsula, known for its single-edged curve near the tip and a convex edge on the inner side. It was primarily used by ancient Iberian warriors and is recognized for its effectiveness in close combat due to its slashing capabilities and unique design. A pre-Roman Iberian sword with a single-edged curve near the tip, combining aspects of single and double-edged designs.'
              </p>
              <button class="btn btn-outline-primary" @click="viewItem(item.prodID)" >VIEW MORE</button>
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
    }
  },
  methods: {
  
    viewItem(prodID){
      const cProd = this.products.find(
        (item)=>
        item.prodID === prodID
      );
      this.$store.commit("setSignalView", cProd);
      this.$router.push({name: "prodSingView", params:{ prodID:prodID}})
    }
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
</style>