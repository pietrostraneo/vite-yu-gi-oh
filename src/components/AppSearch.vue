<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
}
</script>
<template lang="">
    <section id="filters">
            <div class="container-fluid">
                <div class="row mb-3 text-center">
                    <div class="col-auto">
                        <label for="search" class="mb-1">Search</label>
                        <input type="text" name="search" id="search" class="form-control" placeholder="Search a card.." v-model="store.search">
                    </div>
                    <div class="col-auto">
                        <label for="type" class="mb-1">Archetype</label>
                        <select name="type" id="type" class="form-select" v-model="store.type">
                            <option value="">Choose the archetype..</option>
                            <option :value="type.archetype_name" v-for="type, index in store.archetypes" :key="index">{{type.archetype_name}}</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-success" @click="$emit('searchCard')">Search</button>
                    </div>
                    <div class="col-auto">
                        <button class="btn btn-danger"@click="">Reset</button>
                    </div>
                </div>
            </div>
        </section>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

#search,
#type {
    background-color: white;
}
</style>