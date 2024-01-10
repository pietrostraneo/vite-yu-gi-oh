<script>
export default {
    name: 'AppHeader',
    data() {
        return {

        }
    },
}
</script>
<template lang="">
    <header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 d-flex p-3 ms-5 align-items-center gap-4">
                    <img src="/public/logo.png" alt="" class="img-fluid">
                    <h2>Yu-Gi-Oh API</h2>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss';
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

img {
    width: 5%;
}
</style>