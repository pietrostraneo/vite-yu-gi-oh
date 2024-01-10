<script>
import AppHeader from './components/AppHeader.vue'
export default {
  components: {
    AppHeader
  }
}
</script>

<template>
  <AppHeader />
</template>

<style lang="scss" scoped>
@use './styles/generals.scss';
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;
</style>
