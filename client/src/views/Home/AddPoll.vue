<template>
  <div id="addForm">
    <el-input
      placeholder="Create new poll"
      v-model="name"
      @keyup.enter="createPoll"
    ></el-input>
    <el-button type="primary" icon="el-icon-plus" @click="createPoll">Add</el-button>
  </div>
</template>

<script lang="ts">
import { useMutation } from '@vue/apollo-composable';
import { defineComponent, ref } from 'vue';
import mutations from '@/graphql/mutation';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();

    const name = ref('');
    const { mutate: createPollMutation } = useMutation(mutations.ADD_POLL);
    async function createPoll() {
      const { data: { addPoll } } = await createPollMutation({ name: name.value });
      if (addPoll.id) {
        router.push(`/poll/${addPoll.id}`);
      }
    }

    return { name, createPoll };
  },
});
</script>

<style scoped lang="scss">
#addForm {
  display: flex;
  justify-content: space-around;
  & > div,
  button {
    margin: 2rem;
  }
}
</style>
