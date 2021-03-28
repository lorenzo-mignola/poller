<template>
  <Header />
  <AddPoll />
  <span v-if="result && result.polls">
    <h3>Existing poll</h3>
    <div class="card-container" v-for="poll in result.polls" :key="poll.id">
      <Card :name="poll.name" />
    </div>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import pollQuery from '@/graphql/pollQuery';
import Header from './Header.vue';
import Card from './Card.vue';
import Poll from '../../../../types/Poll.interface';
import AddPoll from './AddPoll.vue';

export default defineComponent({
  components: {
    Header,
    Card,
    AddPoll,
  },
  setup() {
    const { result } = useQuery<Poll[]>(pollQuery.GET_ALL_POLLS);
    return { result };
  },
});
</script>

<style lang="scss">
.card-container, h3 {
  padding: 0 2rem;
}
</style>
