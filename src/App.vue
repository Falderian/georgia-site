<template>
  <main class="wrapper">
    <section class="card">
      <header class="card__header">ALETANIUM LLC</header>
      <section class="card__body">
        <section class="item">
          <span class="item__title">Identification Number</span>
          <span class="item__text">405622081</span>
          <span class="item__title">Legal Address</span>
          <span class="item__text"
            >Georgia, Tbilisi, Saburtalo district, Bakhtrioni street, N 22</span
          >
        </section>
        <section class="item whited">
          <span class="item__title">Account</span>
          <span class="item__text">GE39BG0000000549792713</span>
          <span class="item__title">Bank</span>
          <span class="item__text">Bank of Georgia</span>
          <span class="item__title">Bank address</span>
          <span class="item__text"
            >29a Gagarin Street, Tbilisi 0160, Georgia</span
          >
          <span class="item__title">SWIFT</span>
          <span class="item__text">BAGAGE22</span>
        </section>
        <section class="item">
          <span class="item__title">Intermediary Bank USD</span>
          <span class="item__text">Citibank N.A., New York, USA;</span>
          <span class="item__title">SWIFT</span>
          <span class="item__text">CITIUS33</span>

          <span class="item__title">Director</span>
          <span class="item__text">Davit Shishmanashvili</span>
        </section>
      </section>
    </section>
  </main>
</template>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 20%;

  font-size: 16px;
  background-color: white;

  color: #1e2f51;
  font-family: Lexend;
  font-weight: 600;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  background-color: white;

  &__header {
    width: 100%;
    height: 20%;

    font-size: 48px;
    text-align: center;
    border-bottom: 1px solid white;
  }

  &__body {
    width: 80%;
    display: flex;
    flex-direction: column;

    border-radius: 16px;
    border: 1px solid #e5e7eb;

    background-color: #f2f4f7;
  }

  .item {
    height: 100%;
    display: flex;
    flex-direction: column;

    padding: 5% 10%;

    font-size: 20px;

    &__title {
      color: #6b6b6b;
    }

    &__text {
      color: black;

      &:not(:last-child) {
        margin-bottom: 25px;
      }
    }
  }

  .whited {
    background-color: white;
  }

  .margin-btm {
    margin-bottom: 25px;
  }
}

@media (max-width: 1100px) {
  .wrapper {
    padding: 0 100px;
    padding: 0 10%;

    .item {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
}

@media (max-width: 630px) {
  .wrapper {
    padding: 0;

    .card__header {
      font-size: 40px;
    }
  }
}
</style>
