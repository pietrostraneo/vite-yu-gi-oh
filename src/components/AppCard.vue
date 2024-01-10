<script>
import { store } from '../store';
export default {
    name: 'AppCard',
    props: {
        card: Object
    },
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="col-12 col-md-2">
        <div class="cards">
            <img :src="card.card_images[0].image_url" :alt="card.name" class="img-fluid">
            <div class="text-center acab">
                <h4>{{ card.name }}</h4>
                <p>{{card.archetype}}</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.acab {
    background-color: $bg_orange;
    padding: 15px;
    height: 150px;
}

h4 {
    color: white;
    font-weight: bolder;
}
</style>