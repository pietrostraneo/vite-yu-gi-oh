<script>
import { store } from '../store.js';
import axios from 'axios'
import AppCard from './AppCard.vue';
import AppSearch from './AppSearch.vue';
export default {
    name: 'AppMain',
    components: {
        AppCard,
        AppSearch
    },
    data() {
        return {
            store,
        }
    },
    created() {
        this.getCards()
        this.getArchetypes()
    },
    methods: {
        getCards() {

            store.loading = true

            setTimeout(() => {
                this.store.loading = false
            }, 1000);

            let cardApi = store.endpoint

            if (store.search !== '') {
                cardApi += `&fname=${store.search}`
            }

            if (store.type !== '') {
                cardApi += `&archetype=${store.type}`
            }

            axios.get(cardApi).then((response) => {
                this.store.cards = response.data.data
            })
        },

        getArchetypes() {
            axios.get(store.archPoint).then((response) => {
                this.store.archetypes = response.data
            })
        },

        resetApi() {
            store.search = ''
            store.type = ''
            this.getCards()
        }
    },
}
</script>
<template lang="">
    <main>

        <AppSearch @searchCard="getCards" @resetCard="resetApi" />
        
        <section id="card-container">
            <div class="container-fluid">
                <div class="row">
                    <div id="counter" class="col-12">
                        <p>Found {{store.cards.length}} cards</p>
                    </div>
                    <div class="cards d-flex flex-wrap gap-5 justify-content-center">
                        <AppCard v-for="card, index in store.cards" :key="index" :card="card"/>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

#counter {
    background-color: black;
    color: white;
    font-weight: bold;
    font-size: 1rem;
    padding: 20px 10px;

    p {
        margin: 0;
    }
}

#card-container {
    background-color: white;
    padding: 50px;
}
</style>