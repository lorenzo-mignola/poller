<template>
  <Header />
  <div class="card-container">
    <Card />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './Header.vue';
import Card from './Card.vue';

export default defineComponent({
  components: {
    Header,
    Card,
  },
});
</script>

<style lang="scss">
.card-container {
  padding: 2rem;
}
</style>
