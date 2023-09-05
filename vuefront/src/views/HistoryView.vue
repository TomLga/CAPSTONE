<template>
  <div>
    <div>
      <h1 id="textHistory">HISTORY</h1>

      <form class="d-flex searchTab" role="search" @submit.prevent="searchHistory">
        <input v-model="searchQuery" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>


    <div v-if="history" v-for="item in filteredHistory" :key="item.iID">
    <div class="card mb-3 wholeHistory" v-for="item in filteredHistory" :key="item.iID">
      <div class="row">
        <div class="col-md-4" id="imgCenter">
  
          <img :src="item.iImg" class="img-fluid rounded-start img" style="width: 12rem; height: 12rem;">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ item.iName }}</h5>
            <p class="card-text">{{ item.iDescription }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else >
    <SpinnerComp/>
</div>
  
</div>

</template>

<script>
import SpinnerComp from '../components/SpinnerComp.vue'


export default {
  components:{
  SpinnerComp
},
  data() {
    return {
      searchQuery: '',
    };
  },
  computed: {
    history() {
      return this.$store.state.history;
    },
    
    filteredHistory() {
  if (this.history) {
    return this.history.filter(item =>
      item.iName.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  } else {
    return [];
  }
},

  },
  methods: {
    searchHistory() {
  
    },
  },
  mounted() {
    this.$store.dispatch('fetchHistory');
  },
};
</script>


<style>
#textHistory {
  padding-top: 100px;
}
.wholeHistory{
  width: 80%;
  margin: auto;
}
#imgCenter{

width: 13rem;
}

.searchTab{
  width: 50%;
  margin: auto;
  margin-bottom: 20px;


}
.searchTab> input{
  background: #706767;
  color: white;
}
</style>


<!-- <template>
  <div>
    <input v-model="searchQuery" type="text" placeholder="Search...">
    <ul>
      <li v-for="item in filteredItems" :key="item.id">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        // Add more items as needed
      ],
      searchQuery: '',
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter(item =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>
 -->