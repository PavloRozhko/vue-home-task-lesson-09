<template>
  <div class="home">
    <h1 class="home__tile">Вітаємо в нашому інтернет-магазині!</h1>
    <div class="home__info">
      <p class="home__text">Наш магазин спеціалізується на продажу:</p>
      <ul class="home__list">
        <li class="home__item">
          <span class="home__icon material-symbols-outlined"> check </span>
          Ноутбуків
        </li>
        <li class="home__item">
          <span class="home__icon material-symbols-outlined"> check </span>
          Телефонів
        </li>
        <li class="home__item">
          <span class="home__icon material-symbols-outlined"> check </span>
          Аксесуарів до ноутбуків та телефонів
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
.home {
  // .home__tile
  &__tile {
    font-size: 2.5em;
    margin-bottom: 0.9375rem;
  }
  // .home__text
  &__text {
    margin-bottom: 0.9375em;
    font-size: 1.25em;
  }
  // .home__item
  &__item {
    display: flex;
    align-items: center;
    column-gap: 15px;
  }
  // .home__icon
  &__icon {
    color: #318d31;
  }
}
</style>
