import Chart from 'chart.js/auto';
import { AnswerForChart } from '../../utils';

const useChart = (ctx: any, answers: readonly AnswerForChart[] | null): Chart => new Chart(ctx, {
  type: 'bar',
  data: {
    labels: answers ? answers.map((i) => i.label) : [],
    datasets: [{
      label: 'Votes',
      data: answers ? answers.map((i) => i.votes) : [],
      backgroundColor: 'rgba(255, 255, 255, 0.4)', //
    }],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

export default useChart;
