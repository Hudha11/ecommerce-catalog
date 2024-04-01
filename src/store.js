import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    index: 0,
    products: {},
    loading: false,
    productAvailable: false,
  },
  mutations: {
    SET_INDEX(state, index) {
      state.index = index;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_PRODUCT_AVAILABLE(state, productAvailable) {
      state.productAvailable = productAvailable;
    },
  },
  actions: {
    async fetchProduct({ commit, state }) {
      commit("SET_LOADING", true);
      try {
        const url = `https://fakestoreapi.com/products/${state.index}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Request Failed");
        }
        const result = await response.json();
        commit("SET_PRODUCTS", result);
        commit("SET_PRODUCT_AVAILABLE", result.category === "men's clothing" || result.category === "women's clothing");
      } catch (error) {
        console.error(error);
        throw new Error("Error fetching data");
      } finally {
        commit("SET_LOADING", false);
      }
    },
    incrementIndex({ commit, state }) {
      const newIndex = state.index !== 20 ? state.index + 1 : 1;
      commit("SET_INDEX", newIndex);
    },
  },
  getters: {
    productContainerClasses(state) {
      return {
        "product-container": true,
        "bg-gray": !state.productAvailable,
        "bg-lightBlue": state.productAvailable && state.products.category === "men's clothing",
        "bg-lightPurple": state.productAvailable && state.products.category !== "men's clothing",
      };
    },
    productTitleClass(state) {
      return state.products?.category === "men's clothing" ? "color-navyBlue" : "color-magentaPurple";
    },
    circleClass(state) {
      return {
        "full-circle-navyBlue": state.products?.category === "men's clothing",
        "full-circle-magentaPurple": state.products?.category !== "men's clothing",
      };
    },
    buyButtonClass(state) {
      return state.products?.category === "men's clothing" ? "color-white bg-navyBlue" : "color-white bg-magentaPurple";
    },
    nextButtonClass(state) {
      return state.products?.category === "men's clothing" ? "border-navyBlue" : "border-magentaPurple";
    },
  },
});
