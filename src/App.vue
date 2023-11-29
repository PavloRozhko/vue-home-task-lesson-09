<template>
  <div class="heder">
    <div class="heder__logo logo">
      <router-link class="logo__item" to="/">
        <span class="logo__icon material-symbols-outlined"> recommend </span>
        <span class="logo__text">best online shop</span>
      </router-link>
    </div>
    <nav class="heder__navigation navigation">
      <ul class="navigation__list">
        <li class="navigation__item">
          <router-link class="navigation__link" to="/">Головна</router-link>
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" to="/shop">Магазин</router-link>
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" to="/payment">Правила оплати</router-link>
        </li>
        <li class="navigation__item">
          <router-link class="navigation__link" to="/contacts">Контакти</router-link>
        </li>
      </ul>
    </nav>
  </div>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex'

export default {
  created() {
    this.loadData()
  },

  methods: {
    ...mapActions(['loadData']),
  },
}
</script>

<style lang="scss">
@import './assets/styles/index';

#app {
  max-width: 1200px;
  margin: 0 auto;
}

.heder {
  padding-top: 1.25em;
  padding-bottom: 1.25em;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  // .logo__item
  &__item {
    display: flex;
    align-items: center;
    column-gap: 0.9375em;
  }
  // .logo__icon
  &__icon {
    font-size: 3em;
    color: #318d31;
  }
  // .logo__text
  &__text {
    font-size: 1.5em;
    text-transform: uppercase;
    font-weight: 700;
  }
}

.navigation {
  // .navigation__list
  &__list {
    display: flex;
    column-gap: 0.9375em;
  }
  // .navigation__link
  &__link {
    font-weight: 700;
    font-size: 1.5em;
    &:hover {
      text-decoration: underline;
    }
    &.router-link-exact-active {
      color: #318d31;
    }
  }
}
</style>
