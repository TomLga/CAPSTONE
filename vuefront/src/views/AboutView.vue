<template>
  <div>

    <div class="card mb-3 abtCard" >
      <div class="row">

        <div class="col md-4">
          <img id="abtImg" class="img-fluid" src="https://i.postimg.cc/bJ28J55b/Sword-wallpaper-for-phone.jpg">
        </div>
        
        <div class="col-md-8">

          <div class="card-body textHold">
            <div>
            <h5 class="card-title">About Sword Alliance: Forged in Heritage and Craftsmanship</h5>

            <H4 class="invisbleText">WELOME TO: </H4>
            <h5 class="invisbleText">Sword Alliance: Forged in Heritage and Craftsmanship</h5>
            <h5 class="invisbleText">TOP SECRET: HOVER TO VIEW</h5>
            
            <p class="card-text">
              Welcome to Sword Alliance, your ultimate destination for exceptional blades and a testament to the artistry of swordsmiths across generations. At Sword Alliance, we are more than a company; we are a tribute to the rich legacy of sword making and an embodiment of the unity between history and modern craftsmanship. <br> <br>
              
              Sword Alliance is a haven for those who share a passion for the stories woven into blades of the past and the dedication of skilled artisans who forge them. <br> <br>
  
              Each sword in our collection is a masterpiece from the elegantly curved katana that embodies the spirit of the samurai, to the mighty broadswords that once defended kingdoms.   <br> <br>           
              In a world driven by technology, Sword Alliance brings tradition to the fingertips of enthusiasts worldwide. Our e-commerce platform offers a seamless shopping experience, allowing you to explore the diverse selection of swords, each with its unique tale and features. With just a few clicks, you can own a piece of history.
             </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <CarouselAbt/>

   
  </div>
</template>


 <script>
 import CarouselAbt from '@/components/CarouselAbt.vue';
export default{
components:{
  CarouselAbt
}

}

</script>



<style>
.abtCard{
  padding: 20px;
  margin:100px auto;
  height: 545px;  
  width: 95%;
}
h5{
  text-decoration: underline;
  font-size: 1.5rem;
  text-align: center;
}

.textHold{
margin: auto;
background: #f7f5f5;
color: white;
}
.textHold:hover{
  background: #000;

}

#abtImg{
  width: 14rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
 
}

.invisbleText{
  color: #000;
}

</style>