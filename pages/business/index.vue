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
        Edit business info
      </button>
      <button class="button button-warning" @click="() => $router.push('/business/verslas-nuo-nulio/services')">
        Edit services info
      </button>
      <button class="button button-warning" @click="() => $router.push('/business/verslas-nuo-nulio/schedule')">
        Edit schedule info
      </button>
    </div>
  </div>
</template>
