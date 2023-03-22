import { defineStore } from "pinia";

interface IMainStoreState {
  count: number;
}

export const useMainStore = defineStore('main', {
  state: (): IMainStoreState => ({
    count: 0
  }),
  getters: {
    getCount: (state) => {
      return state.count;
    }
  },
  actions: {
    addCount() {
      this.count += 1;
    }
  }
})