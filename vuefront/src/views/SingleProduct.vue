<template>
    <div>
        <h1 id="svP">SINGLE VIEW PAGE</h1>

        <SingleView/>

    </div>
</template>

<script>
import SingleView from '@/components/SingleView.vue';

    export default {
    components: { SingleView }
}
</script>

<style>
#svP{
    padding-top: 200px;
}

</style>