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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const name = ref('');
    const createPoll = () => {
      console.log(name.value);
    };
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
