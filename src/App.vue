<template>
  <div>
    <product-card :product="productData"></product-card>
  </div>
</template>

<script>
import ProductCard from "./components/ProductDisplay.vue";

export default {
  components: {
    ProductCard,
  },
  data() {
    return {
      productData: {
        name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
        description:
          "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        price: "$19.99",
        image: "https://via.placeholder.com/250",
      },
    };
  },
};
</script>
