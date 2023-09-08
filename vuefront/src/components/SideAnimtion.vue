<template>
    <div class="animation-container">

      <img class="left-image img-fluid" src="https://i.postimg.cc/T1Ckqjx3/White-Neon-Green-Game-Logo-removebg-preview-1.png" alt="Left Image" style="width: 40%;">
    <img class="right-image img-fluid" src="https://i.postimg.cc/1tzbv9VD/White-Neon-Green-Game-Logo-removebg-preview-1-REVERSED.png"  alt="Right Image" style="width: 40%;">
    </div>
  </template>


  <style>
  .animation-container {
    position: relative;
    width: 90%;
    height: 100vh;
  }
  
  .left-image, .right-image {
    position: absolute;
    top: 20%;
    transform: translateY(-50%);
    animation-duration: 3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  
  .left-image {
    left: 0px;
    animation-name: slideFromLeft;
  }
  
  .right-image {
    right: -90px;
    animation-name: slideFromRight;
  }
  
  @keyframes slideFromLeft {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  
  @keyframes slideFromRight {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }
  @media (max-width: 900px) {
    .animation-container{
    display: none;
    }
  }
</style>