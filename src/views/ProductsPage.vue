<template>
  <div class="products">
    <h1 class="products__title">{{ currentProductsCategory.categoryTitle }}</h1>
    <div class="products__items items-list">
      <div class="items-list__container">
        <div
          v-for="product in currentProductsCategory.productsList"
          :key="product.id"
          class="items-list__product product"
        >
          <div class="product__wrapper">
            <div class="product__img"><img :src="product.imgSrc" :alt="product.title" /></div>
            <div class="product__info">
              <div class="product__title">{{ product.title }}</div>
              <div class="product__price">
                <span class="product__new-price">{{ product.price }}</span>
                <span class="product__old-price">{{ product.price }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="products__action">
      <router-link to="/">На головну</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProductsPage',

  data() {
    return {
      currentProductsCategory: {},
    }
  },
  computed: {
    ...mapGetters(['getProductsById']),
    categoryId() {
      return this.$route.params.categoryId
    },
  },

  created() {
    this.currentProductsCategory = this.getProductsById(this.categoryId)
  },
}
</script>

<style lang="scss" scoped>
.products {
  padding-bottom: 1.25rem;
  // .products__title
  &__title {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 1.5625rem;
  }
  // .products__items
  &__items {
    margin-bottom: 1rem;
  }
  // .products__action
  &__action {
    padding: 0.9375rem 1.5625rem;
    background-color: #b99e43;
    color: #fff;
    display: inline-block;
    font-size: 1.125em;
    border-radius: 0.3125rem;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    &:hover {
      background-color: #318d31;
    }
  }
}
.items-list {
  // .items-list__container
  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.9375em;
  }
}
.product {
  border: 2px solid #318d31;
  border-radius: 5px;
  padding: 0.625rem;
  background-color: #fff;
  // .product__img
  &__img {
    margin-bottom: 0.9375rem;
    text-align: center;
    img {
      width: 75%;
      aspect-ratio: 3/2;
      object-fit: contain;
    }
  }
  // .product__title
  &__title {
    font-size: 1.25em;
    margin-bottom: 0.625rem;
    font-weight: 700;
    text-align: center;
  }
  // .product__price
  &__price {
    text-align: center;
    display: flex;
    flex-direction: column;
    row-gap: 0.625rem;
  }
  // .product__new-price
  &__new-price {
    color: #318d31;
    font-size: 1.125em;
    font-weight: 700;
  }
  &__old-price {
    font-size: 0.875em;
    position: relative;
    color: #a8a4a4;
    &::after {
      content: '';
      position: absolute;
      display: inline-flex;
      height: 2px;
      width: 50px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, 0);
      background-color: #a8a4a4;
    }
  }
}
</style>
