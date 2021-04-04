<template>
  <Header :name="poll ? poll.name : ''" />
  <main v-if="poll">
    <Confirm>{{ poll.name }}</Confirm>
    <div class="questionContainer">
      <Question v-for="question in poll.questions" :key="question.id" :id="question.id">
        {{ question.text }}
      </Question>
    </div>
    <AddQuestion @questionAdded="refetch"/>
    <el-button type="primary" @click="goToResult" plain>View result</el-button>
  </main>
</template>

<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable';
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Header from '@/components/Header.vue';
import Confirm from '@/components/Confirm.vue';
import Poll from '@/types/Poll.interface';
import pollQuery from '../../graphql/pollQuery';
import Question from './Question.vue';
import AddQuestion from '../../components/AddQuestion.vue';

export default defineComponent({
  components: {
    Header, Question, Confirm, AddQuestion,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const { id } = route.params;
    const { result, refetch } = useQuery<{ poll: Poll }>(pollQuery.GET_POLL, { id: Number(id) });
    const poll = useResult(result, null, (data: { poll: Poll }) => data.poll);
    const goToResult = () => {
      router.push(`/poll/${id}/answer`);
    };
    return {
      id,
      poll,
      goToResult,
      refetch,
    };
  },
});
</script>

<style scoped lang="scss">
.questionContainer {
  display: flex;
  flex-direction: column;
  button {
    margin: 32px;
    padding: 24px;
    font-size: 1.5rem;
  }
}
button{
  margin-top: 4rem;
}
</style>
