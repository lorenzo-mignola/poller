<template>
  <div class="confirmContainer">
    <h1><slot></slot></h1>
    <div v-if="!!questionSelected">
      <el-tooltip class="item" effect="dark" content="Confirm" placement="left">
        <el-button
          type="success"
          icon="el-icon-check"
          circle
          @click="confirm"
        ></el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script lang="ts">
import { useMutation } from '@vue/apollo-composable';
import { computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import mutations from '@/graphql/mutation';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const { id } = route.params;
    const questionSelected = computed(() => store.state.selectedQuestion);
    const { mutate: addAnswerMutation } = useMutation(mutations.ADD_ANSWER);
    const confirm = async () => {
      const {
        data: { addAnswer },
      } = await addAnswerMutation({
        questionId: Number(questionSelected.value),
      });
      if (addAnswer.id) {
        router.push(`/poll/${id}/answer`);
        store.commit('cleanSelection');
      }
    };
    return {
      questionSelected,
      router,
      confirm,
    };
  },
});
</script>

<style scoped lang="scss">
.confirmContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
