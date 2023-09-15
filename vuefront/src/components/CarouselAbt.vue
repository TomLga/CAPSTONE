<template>
  <div>
    <div id="carouselExampleFade" class="WholeCont carousel slide carousel-fade">

      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="img-fluid carImg" src="https://i.postimg.cc/G2vy6tdz/knights.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/kG9bCC5C/worrier-figthing.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/9QYxvn4T/TFP99ov-Jte-Ni-VY7mlw6r-Cm-Mef-YP.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/MKHTg50X/knights-horses-2.jpg" >
        </div>

        <div class="carousel-item active img-fluid">
          <img class="img-fluid carImg" src="https://i.postimg.cc/C105tVJV/battle-fantasy-wallpaper-preview.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/CxWzG8q5/fight-knights-warriors-templars-medieval-templars.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/rwdDRjz7/filter-brown-knight.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/T3yqCRLN/298250.jpg" >
        </div>
        
        <div class="carousel-item active img-fluid">
          <img class="img-fluid carImg" src="https://i.postimg.cc/BbYvXP3q/knights-swords-fight-mount-and-blade-wallpaper-preview.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/Pf2J69wB/rome-fighrters.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/6q53WLDj/warrior-axe-battle-paint.jpg" >
          <img class="img-fluid carImg" src="https://i.postimg.cc/DwGtM6F3/a-battle-between-knights-and-ottomans-august-querfurt.jpg" >
        </div>
      </div>

      <!-- Carousel controls -->
      <button id="btnB" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>

      <button id="btnB" class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>



<style>
.WholeCont{
    background: transparent;
  

}
.carousel-inner {
    width: fit-content;
    margin-left: 11rem;
}
 #btnB{
  background: #000;
  margin: auto;
  width: 2rem;
  height: 6rem;
 }


.carousel-inner {
  display: flex; /* Use flexbox to display images in a row */
  flex-wrap: wrap; /* Allow images to wrap to the next line when needed */
  
}
.carImg{
  width: 15rem;
  height: 12rem;
}


#btnB {
  background: #000;
  margin: auto;
  width: 2rem;
  height: 6rem;
}

@media (max-width: 850px) {
  .WholeCont{display: none;}
  
 
 }
 @media (max-width: 1146px) {
  .carImg {
    width: 9rem; /* Adjust the size for smaller screens */
    height: 6rem; /* Adjust the size for smaller screens */
  }
}


</style>