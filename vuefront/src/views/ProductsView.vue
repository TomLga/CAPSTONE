<template>
    <div>
<div class="mainDiv">
        <h1 id="prodText">PRODUCTS</h1>
        <ProdCard/>
</div>
    </div>
</template>

<script>
import ProdCard from '@/components/ProdCard.vue'


    export default {
        components:{
            ProdCard
        }
        
    }
</script>
<style>
#prodText{
    padding-top: 100px;
}

</style>

