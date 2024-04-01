<template>
  <div :class="productContainerClasses">
    <!-- Loading Indicator -->
    <div v-if="loading">
      <SkeletonLoader />
    </div>
    <div v-else>
      <!-- Not Available Product -->
      <div v-if="!productAvailable" class="product-not-available">
        <!-- Information and Button for Not Available Product -->
        <p class="txt-not">This product is unavailable to show</p>
        <button class="btn-not-available" @click="nextProduct()">Next product</button>
      </div>
      <!-- Available Product -->
      <div v-else class="product-available">
        <!-- Left Section - Product Image -->
        <div class="product-left-image">
          <img :src="products?.image" class="product-img" />
        </div>
        <!-- Right Section - Product Details -->
        <div class="product-right-details">
          <!-- Product Title -->
          <h1 :class="productTitleClass">{{ products?.title }}</h1>
          <!-- Product Information Category and Rating -->
          <div class="product-info">
            <!-- Product Category -->
            <p>{{ products?.category }}</p>
            <div class="product-rate">
              <!-- Product Rating -->
              <p class="product-rating">{{ products?.rating?.rate }} / 5</p>
              <!-- Rating Circles -->
              <div class="product-rating-circle">
                <div :class="circleClass"></div>
                <div :class="circleClass"></div>
                <div :class="circleClass"></div>
                <div class="not-full-circle"></div>
                <div class="not-full-circle"></div>
              </div>
            </div>
          </div>
          <hr />
          <!-- Product Description -->
          <p class="product-desc">{{ products?.description }}</p>
          <!-- Product Price and Buttons -->
          <div class="bottom">
            <hr />
            <!-- Product Price -->
            <h2 :class="productPriceClass">${{ products?.price }}</h2>
            <!-- Buy and Next Product Buttons -->
            <div class="btn-container">
              <button :class="buyButtonClass">Buy Now</button>
              <button @click="nextProduct()" class="btn btn-next" :class="nextButtonClass">Next Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkeletonLoader from "../components/SkeletonLoader.vue";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "EcommerceProduct",
  components: {
    SkeletonLoader,
  },
  computed: {
    ...mapState(["loading", "productAvailable", "products"]),
    ...mapGetters(["productContainerClasses", "productTitleClass", "circleClass", "buyButtonClass", "nextButtonClass"]),
  },
  methods: {
    ...mapActions(["fetchProduct", "incrementIndex"]),
    nextProduct() {
      this.incrementIndex();
      this.fetchProduct();
    },
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>

<style>
@import url("../assets/style/page.css");
</style>
