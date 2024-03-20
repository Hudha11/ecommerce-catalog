<template>
  <div>
    <product-card :products="productData"></product-card>
  </div>
</template>

<script>
import ProductCard from "./components/ProductDisplay.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>
