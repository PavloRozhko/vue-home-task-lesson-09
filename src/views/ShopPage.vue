<template>
  <div class="shop">
    <h1 class="shop__title">Список товарів:</h1>
    <div class="shop__container">
      <ul class="shop__list">
        <li
          v-for="category in categoriesList"
          :key="category.id"
          class="shop__item"
          @click="onCategoryClick(category.id)"
        >
          {{ category.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ShopPage',

  computed: {
    ...mapGetters(['categoriesList']),
  },

  methods: {
    onCategoryClick(id) {
      this.$router.push({
        name: 'products',
        params: {
          categoryId: id,
        },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.shop {
  // .shop__title
  &__title {
    font-size: 2.5em;
    margin-bottom: 0.9375rem;
  }
  // .shop__list
  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 0.9375em;
  }
  // .shop__item
  &__item {
    cursor: pointer;
    font-size: 1.25em;
    transition: all 0.3s ease 0s;
    &:hover {
      color: #318d31;
    }
  }
}
</style>
