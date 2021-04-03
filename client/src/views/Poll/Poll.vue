<template>
  <Header :name="poll ? poll.name : ''" />
  <main v-if="poll">
    <h1>{{ poll.name }}</h1>
    <div class="questionContainer">
      <Question v-for="question in poll.questions" :key="question.id" :id="question.id">
        {{ question.text }}
      </Question>
    </div>
  </main>
</template>

<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Poll from '../../../../server/src/types/Poll.interface';
import pollQuery from '../../graphql/pollQuery';
import Header from './Header.vue';
import Question from './Question.vue';

export default defineComponent({
  components: { Header, Question },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const { result } = useQuery<{ poll: Poll }>(pollQuery.GET_POLL, { id: Number(id) });
    const poll = useResult(result, null, (data: { poll: Poll }) => data.poll);
    return {
      id,
      poll,
    };
  },
});
</script>

<style scoped lang="scss">
main {
  padding: 1rem;
}
.questionContainer {
  display: flex;
  flex-direction: column;
  button {
    margin: 32px;
    padding: 24px;
    font-size: 1.5rem;
  }
}
</style>
