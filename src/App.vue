<script>
import { store } from './store';
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store
    }
  },
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss" scoped>
@use './styles/generals.scss';
@use './styles/partials/variables' as *;
@use './styles/partials/mixins' as *;
</style>
