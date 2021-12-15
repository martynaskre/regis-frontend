<template>
  <div>
    <Navbar/>
    <CardsBusinessesContainer>
      <CardsBusiness :phoneNumber="'test'">
        Test

        <template v-slot:address>
          Adresas
        </template>

        <template v-slot:description>
          Lorem ipsum.
        </template>
      </CardsBusiness>
    </CardsBusinessesContainer>
    <div class="container container-sm grid-rows grid-of-3">
      <button class="button button-warning" @click="() => $router.push('/business/verslas-nuo-nulio/edit')">
        Redaguoti bazinę informaciją
      </button>
      <button class="button button-warning" @click="() => $router.push('/business/verslas-nuo-nulio/services')">
        Redaguoti paslaugas
      </button>
      <button class="button button-warning" @click="() => $router.push('/business/verslas-nuo-nulio/schedule')">
        Redaguoti darbo laiką
      </button>
    </div>
  </div>
</template>
