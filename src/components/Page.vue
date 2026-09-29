<template>
  <div class="page">
    <main class="page__content">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
@import '../styles/breakpoints.scss';

.page {
  display: flex;
  justify-content: center;

  &__content {
    padding: 24px;

    @media #{$sm-and-up} {
      padding: 32px;
    }

    @media #{$lg-and-up} {
      max-width: 1400px;
    }
  }
}
</style>
