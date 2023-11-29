<template>
  <div class="contacts">
    <h1 class="contacts__title">Наші контакти:</h1>
    <ul class="contacts__list">
      <li class="contacts__item">
        <span class="contacts__icon material-symbols-outlined"> call </span>
        <a class="contacts__link" href="tel:+3800500077007">+380 (050) 007 70 07</a>
      </li>
      <li class="contacts__item">
        <span class="contacts__icon material-symbols-outlined"> mail </span>
        <a class="contacts__link" href="mailto:best-online-shop@com.ua">best-online-shop@com.ua</a>
      </li>
      <li class="contacts__item">
        <span class="contacts__icon material-symbols-outlined"> location_on </span>
        <span>Наша адреса: м. Гріхів, вул. Бажана, 15</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
}
</script>

<style lang="scss" scoped>
.contacts {
  &__title {
    font-size: 2.5em;
    margin-bottom: 0.9375rem;
  }
  // .contacts__item
  &__item {
    display: flex;
    align-items: center;
    column-gap: 0.9375rem;
    font-size: 1.25em;
    &:not(:last-child) {
      margin-bottom: 0.9375rem;
    }
  }
  // .contacts__icon
  &__icon {
    color: #318d31;
  }
  // .contacts__link
  &__link {
    transition: all 0.3s ease 0s;
    &:hover {
      color: #318d31;
    }
  }
}
</style>
