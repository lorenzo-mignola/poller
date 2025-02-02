import { createStore } from 'vuex';

interface Store {
  selectedQuestion: string | null
}

export default createStore<Store>({
  state: {
    selectedQuestion: null,
  },
  mutations: {
    setSelectedQuestion(state, payload: string) {
      state.selectedQuestion = payload;
    },
    cleanSelection(state) {
      state.selectedQuestion = null;
    },
  },
  actions: {},
  modules: {},
});
