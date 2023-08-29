<template>
  <div>
    <div class="cardFtHistory mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img
            src="https://i.postimg.cc/wxX8GDY6/Sabre-Kilij-with-Scabbard-18th-Century.jpg"
            class="img-fluid rounded-start"
          />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title title">
              Sabre “Kilij” with Scabbard, 18th Century
            </h5>
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
              <PopOver/>
            </p>



          
            </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PopOver from '../components/PopOver.vue'

export default{
  components:{
    PopOver
  }
}


</script>


<style>
.cardFtHistory {
  margin: auto;
  width: 930px;
  box-shadow: 10px 10px 20px rgb(43, 38, 38);
}
.cardFtHistory:hover {
  transform: scale(1.02);
}

.textIncard{
  margin-left: 20px;
}
.title{
  text-decoration: underline;
  text-align: center;
  font-size: 25px;
}
</style>
