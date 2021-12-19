<template>
  <div>
    <Navbar />
    <div class="container container-sm business">
      <div class="business-header" :style="{ backgroundImage: `url('https://wallpaperaccess.com/full/1900672.jpg')` }">
        <img src="https://autoplius-static.dgn.lt/static/images/svg/autoplius-logo.svg?v=c2" class="business-logo" />
      </div>
      <p class="business-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <CardsServicesContainer>
        <CardsService @click="() => $router.push('/business/verslas-nuo-nulio/services/1/book')">
          Ratų keitimas

          <template v-slot:description>
            Profesionaliai išmontuosime ratus.
          </template>

          <template v-slot:price>
            Kaina: 10-20Eur
          </template>
        </CardsService>
        <CardsService @click="() => $router.push('/business/verslas-nuo-nulio/services/2/book')">
          Ratų balansavimas

          <template v-slot:description>
            Išbalansuosim Jūsų ratus.
          </template>

          <template v-slot:price>
            Kaina: 10-100Eur
          </template>
        </CardsService>
      </CardsServicesContainer>
    </div>
  </div>
  </div>
</template>
