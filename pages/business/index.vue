<template>
  <div>
    <Navbar />
    <CardsBusinessesContainer>
      <CardsBusiness :phoneNumber="'test'">
        Verslas nuo cibulio

        <template v-slot:address> Adresas </template>

        <template v-slot:description> Lorem ipsum. </template>
      </CardsBusiness>
    </CardsBusinessesContainer>
    <div class="container container-sm grid-rows grid-of-3">
      <button
        class="button button-warning text"
        @click="() => $router.push('/business/verslas-nuo-nulio/edit')"
      >
        Redaguoti bazinę informaciją
      </button>
      <button
        class="button button-warning text"
        @click="() => $router.push('/business/verslas-nuo-nulio/services')"
      >
        Redaguoti paslaugas
      </button>
      <button
        class="button button-warning text"
        @click="() => $router.push('/business/verslas-nuo-nulio/schedule')"
      >
        Redaguoti darbo laiką
      </button>
    </div>
  </div>
</template>

<style lang="scss">
@media (max-width: 1100px) {
  button {
    height: 50px;
    font-size: calc(13px + 0.1vw);
    padding: 0;
    margin: 1rem;
  }
}
@media (max-width: 500px) {
  .text {
    font-size: 0.9rem !important;
    padding: 0;
  }
}
</style>
