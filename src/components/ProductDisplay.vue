<template>
  <div class="container">
    <div class="page-bg-women">
      <div v-if="currentProduct" :key="currentProduct.id" class="product-card">
        <img :src="currentProduct.image" :alt="currentProduct.title" class="product-image" />
        <div class="product-details">
          <h2 class="product-title">{{ currentProduct.title }}</h2>
          <p class="product-category">{{ currentProduct.category }}</p>
          <div class="vektor-top"></div>
          <p class="product-description">{{ currentProduct.description }}</p>
          <div class="vektor-bottom"></div>
          <p class="product-price">{{ "$" + currentProduct.price }}</p>
          <button class="buy-now-btn">Buy now</button>
          <button @click="getNextProduct" class="next-product-btn">Next product</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
      currentProductIndex: 0,
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          this.products = response.data;
          this.setCurrentProduct();
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    setCurrentProduct() {
      this.currentProduct = this.products[this.currentProductIndex];
    },
    getNextProduct() {
      if (this.currentProductIndex < this.products.length - 1) {
        this.currentProductIndex++;
      } else {
        this.currentProductIndex = 0; // Jika sudah di akhir, kembali ke awal
      }
      this.setCurrentProduct();
    },
  },
  computed: {
    currentProduct() {
      return this.products[this.currentProductIndex];
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.page-bg-women {
  position: relative;
  width: 100%;
  height: 548px;
  left: -3px;
  top: 0px;
  z-index: 0;
  background: #fde2ff;
}

.product-card {
  position: absolute;
  width: 1034px;
  height: 580px;
  left: 147px;
  top: 126px;
  z-index: 1;
  background-color: aliceblue;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.product-image {
  position: absolute;
  width: 30%;
  height: 80%;
  top: 60px;
  padding-left: 5%;
  border-radius: 5px;
}

.product-details {
  position: absolute;
  width: 548px;
  height: 484px;
  left: 450px;
  top: 40px;
}

.product-title {
  position: absolute;
  width: 548px;
  height: 68px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  color: #720060;
}

.product-description {
  position: absolute;
  width: 517px;
  height: 163px;
  left: 0px;
  top: 150px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: #1e1e1e;
}

.product-category {
  position: absolute;
  width: 149px;
  height: 22px;
  left: 0px;
  top: 100px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  color: #3f3f3f;
}

.product-price {
  position: absolute;
  width: 97px;
  height: 34px;
  left: 0px;
  top: 370px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;
  /* identical to box height */

  color: #720060;
}

.buy-now-btn {
  box-sizing: border-box;
  position: absolute;
  width: 259px;
  height: 42px;
  left: 0px;
  top: 442px;
  background: #720060;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;
}

.next-product-btn {
  box-sizing: border-box;
  position: absolute;
  width: 259px;
  height: 42px;
  left: 280px;
  top: 442px;
  background: #ffffff;
  border: 3px solid #720060;
  border-radius: 4px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #720060;
}

.buy-now-btn:hover {
  background-color: #5c024e;
}

.vektor-top {
  position: absolute;
  width: 542.5px;
  height: 0px;
  left: 0px;
  top: 150px;

  border: 1px solid rgba(0, 0, 0, 0.2);
}

.vektor-bottom {
  position: absolute;
  width: 542.5px;
  height: 0px;
  left: 0px;
  top: 380px;

  border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
