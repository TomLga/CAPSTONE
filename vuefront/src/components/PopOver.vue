<template>
    <div>
      <button @click="togglePopover" class="btn btn-lg btn-danger">See More</button>
  
      <div v-if="isPopoverVisible" class="popover">
        <h3>{{ popoverTitle }}</h3>
        <p>{{ popoverContent }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isPopoverVisible: false,
        popoverTitle: "Popover Title",
        popoverContent: "Popover content goes here.",
      };
    },
    methods: {
      togglePopover() {
        this.isPopoverVisible = !this.isPopoverVisible;
      },
    },
  };
  </script>
  
  <style>
  .popover {
    position: absolute;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1000;
  }
  </style>
  