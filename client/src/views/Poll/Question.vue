<template>
  <el-button :type="type" @click="setSelected">
    <slot></slot>
  </el-button>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const selectedQuestion = computed(() => store.state.selectedQuestion);
    const type = computed(() => (selectedQuestion.value === props.id ? 'success' : 'info'));
    function setSelected() {
      if (selectedQuestion.value === props.id) {
        store.commit('setSelectedQuestion', null);
      } else {
        store.commit('setSelectedQuestion', props.id);
      }
    }
    return {
      selectedQuestion,
      type,
      setSelected,
    };
  },
});
</script>

<style scoped></style>
