<template>
  <div>
    <div class="cardFtHistory mb-3">
      <div class="row g-0">
        <!-- Display the image on larger screens -->
        <div class="col-md-4 d-md-block d-none">
          <img
            src="https://i.postimg.cc/wxX8GDY6/Sabre-Kilij-with-Scabbard-18th-Century.jpg"
            class="img-fluid rounded-start"
          />
        </div>

        <div class="col-md-8 cardHisft">
          <div class="card-body">
            <h5 class="card-title title">
              Sabre “Kilij” with Scabbard, 18th Century
            </h5>
            <div class="col-md-4 d-md-none d-flex">
              <img id="imgHist"
                src="https://i.postimg.cc/wxX8GDY6/Sabre-Kilij-with-Scabbard-18th-Century.jpg"
                class="img-fluid rounded-start" style="width:13rem"
              />
            </div>

            <p class="card-text textIncard">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              quos ipsum earum rem qui doloremque maxime repellendus odio
              praesentium. Veritatis dolore sint in nisi aperiam repudiandae!
              Incidunt voluptates blanditiis corporis?
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
              quos ipsum earum rem qui doloremque maxime repellendus odio
              praesentium. Veritatis dolore sint in nisi aperiam repudiandae!
              Incidunt voluptates blanditiis corporis?
              <Button id="hisbtn">
                <a class="atag" href="/history"> SEE MORE ON HISTORY</a>
              </Button>
            </p>
          </div>
        </div>

        <!-- Display the image on smaller screens -->
        
      </div>
    </div>
  </div>
</template>

<script>
import PopOver from '../components/PopOver.vue'

export default {
  components: {
    PopOver
  }
}
</script>

<style>
.cardFtHistory {
  margin: auto;
  max-width: 930px; /* Adjust this to your desired maximum width */
  box-shadow: 10px 10px 20px rgb(43, 38, 38);
}

.cardFtHistory:hover {
  transform: scale(1.02);
}

.textIncard {
  margin: 20px;
}

.title {
  text-decoration: underline;
  text-align: center;
  font-size: 25px;
  color: black;
}

#hisbtn {
  display: flex;
  margin-top: 20px;
  box-shadow: 5px 7px 2px;
}

.atag {
  color: black;
  text-decoration: none;
  margin: 10px;
}

.cardHisft {
  background: #000000b4;
  color: white;
}

/* Media query to make the image fluid on smaller screens */
@media (max-width: 767px) {
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  #imgHist{
  
    margin: auto;
  }
}
</style>
