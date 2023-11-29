<template>
  <div class="payment">
    <h1 class="payment__title">Оплатити продукцію на нашому сайті можна:</h1>
    <ul class="payment__list">
      <li class="payment__item">При отриманні у відділенні НП;</li>
      <li class="payment__item">Переказати на карту;</li>
      <li class="payment__item">Переказати на гаманець в PayPal;</li>
      <li class="payment__item">Переказати на криптогаманець.</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaymentInfo',
}
</script>

<style lang="scss" scoped>
.payment {
  // .payment__title
  &__title {
    font-size: 2.5em;
    margin-bottom: 0.9375rem;
  }
  // .payment__item
  &__item {
    font-size: 1.25em;
    &:not(:last-child) {
      margin-bottom: 0.9375rem;
    }
  }
}
</style>
