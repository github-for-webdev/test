import Vue from "vue";
import Vuex from "vuex";

import items from "@/store/items";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    items,
  },
});

export default store;
