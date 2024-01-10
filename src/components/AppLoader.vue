<script>
import { store } from '../store';
export default {
    name: 'AppLoader',
    data() {
        return {
            store
        }
    },
}
</script>
<template lang="">
    <div class="loader" v-if="store.loading">
        <h2>{{store.app_title}}</h2>
        <div class="custom-loader"></div>
        <h3>is loading...</h3>
    </div>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.loader {
    width: 100vw;
    height: 100vh;
    position: fixed;
    background-color: rgba(200, 200, 200, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    h2 {
        font-weight: bold;
    }
}

.custom-loader {
    width: 50px;
    height: 50px;
    display: grid;
}

.custom-loader::before,
.custom-loader::after {
    content: "";
    grid-area: 1/1;
    --c: radial-gradient(farthest-side, #766DF4 92%, #0000);
    background:
        var(--c) 50% 0,
        var(--c) 50% 100%,
        var(--c) 100% 50%,
        var(--c) 0 50%;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    animation: s2 1s infinite;
}

.custom-loader::before {
    margin: 4px;
    filter: hue-rotate(45deg);
    background-size: 8px 8px;
    animation-timing-function: linear
}

@keyframes s2 {
    100% {
        transform: rotate(.5turn)
    }
}
</style>