import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "/api"
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cars: []
  },
  mutations: {
    addCar(state, car) {
      state.cars.push(car);
    }
  },
  actions: {
    async createCar({ commit, dispatch }, car) {
      let res = await _api.post("cars", car);
      commit("addCar", res.data);
    }
  }
});
