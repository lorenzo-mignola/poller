<template>
  <div class="addQuestion">
    <el-input
      placeholder="Add option"
      v-model="text"
      @keyup.enter="addQuestionMutation"
    ></el-input>
    <el-button type="primary" icon="el-icon-plus" @click="addQuestionMutation">Create</el-button>
  </div>
</template>

<script lang="ts">
import { useMutation } from '@vue/apollo-composable';
import { defineComponent, ref } from 'vue';
import { useRoute } from 'vue-router';
import mutations from '@/graphql/mutation';

export default defineComponent({
  setup(_, { emit }) {
    const route = useRoute();
    const { id } = route.params;
    const text = ref('');
    const { mutate: createQuestionMutation } = useMutation(mutations.ADD_QUESTION);
    const addQuestionMutation = async () => {
      const { data: { addQuestion } } = await createQuestionMutation({
        text: text.value,
        pollId: Number(id),
      });
      if (addQuestion.id) {
        emit('questionAdded');
        text.value = '';
      }
    };
    return {
      text,
      addQuestionMutation,
    };
  },
});
</script>

<style scoped lang="scss">
.addQuestion {
  padding: 0 calc(1rem + 16px);
  margin-top: 16px;
  display: flex;
  button{
    margin-left: 1rem;
  }
}
</style>
