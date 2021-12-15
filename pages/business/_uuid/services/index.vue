<template>
  <div>
    <Navbar />
    <div class="p-10 flex justify-end">
      <button class="button button-info" @click="() => $router.push('/business/verslas-nuo-nulio/services/create')">
        Pridėti paslaugą
      </button>
    </div>
    <div class="container container-sm">
      <CardsServicesContainer>
        <CardsService>
          <template v-slot:actions>
            <button class="button service-action" @click="() => $router.push('/business/verslas-nuo-nulio/services/1/edit')">
              <img src="~assets/img/icons/edit.png" />
            </button>
          </template>

          Kaip sukurti verslą nuo nulio?

          <template v-slot:description>
            Šiame seminare aptarsime būdus kaip pradėti verslą egzotinio pėdų masažo srityje.
          </template>

          <template v-slot:price>
            Kaina: 10-20Eur
          </template>
        </CardsService>
      </CardsServicesContainer>
    </div>
  </div>
</template>
