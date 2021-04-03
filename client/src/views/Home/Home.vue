<template>
  <Header />
  <AddPoll />
  <span v-if="polls">
    <h3>Existing poll</h3>
    <div class="card-container" v-for="poll in polls" :key="poll.id">
      <Card :name="poll.name" :id="poll.id" />
    </div>
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useQuery, useResult } from '@vue/apollo-composable';
import pollQuery from '@/graphql/pollQuery';
import Header from './Header.vue';
import Card from './Card.vue';
import AddPoll from './AddPoll.vue';
import Poll from '../../../../server/src/types/Poll.interface';

export default defineComponent({
  components: {
    Header,
    Card,
    AddPoll,
  },
  setup() {
    const { result } = useQuery<{ polls: Poll[] }>(pollQuery.GET_ALL_POLLS);
    const polls = useResult(result, null, (data: { polls: Poll[] }) => data.polls);

    return { polls };
  },
});
</script>

<style lang="scss">
.card-container,
h3 {
  padding: 0 2rem;
}
</style>
