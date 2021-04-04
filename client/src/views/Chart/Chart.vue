<template>
  <Header :name="name" />
  <main>
    <h1>Votes</h1>
    <canvas id="chart" width="400" height="400" ref="chart"></canvas>
  </main>
</template>

<script lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable';
import {
  defineComponent, onMounted, onUpdated, ref,
} from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Poll from '../../../../server/src/types/Poll.interface';
import pollQuery from '../../graphql/pollQuery';
import useChart from './useChart';
import { getAnswerForChart } from '../../utils';
import Question from '../../../../server/src/types/Question.interface';

export default defineComponent({
  components: {
    Header,
  },
  setup() {
    const route = useRoute();
    const { id } = route.params;
    const { result, refetch } = useQuery<{ poll: Poll }>(pollQuery.GET_ANSWERS_PER_QUESTION, {
      id: Number(id),
    });
    const questions = useResult(
      result, null, (data: { poll: Poll }) => getAnswerForChart(data.poll.questions as Question[]),
    );
    const name = useResult(result, null, (data: { poll: Poll }) => data.poll.name);
    const chart = ref(null);

    onMounted(() => {
      refetch();
    });

    onUpdated(() => {
      if (chart.value) {
        const canvas: any = chart.value;
        if (canvas.getContext('2d')) {
          const chartEl = useChart(canvas.getContext('2d'), questions.value);
        }
      }
    });
    return {
      chart,
      name,
      refetch,
    };
  },
});
</script>

<style scoped lang="scss">
canvas {
  max-height: 80vh;
}
</style>
