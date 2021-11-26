<template>
  <div class="cardContainer">
    <div class="cardContainerInside">
      <button
        v-for="card in cards"
        :key="card"
        class="card"
        :style="card.image"
      >
        <div class="cardName">
          {{ card.name }}
        </div>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      cards: [
        {
          name: 'Kirpėjai',
          image: {
            backgroundImage:
              'url(https://www.pngitem.com/pimgs/m/150-1503941_user-windows-10-user-icon-png-transparent-png.png)',
          },
        },
        {
          name: 'Mechanikai',
          image: {
            backgroundImage:
              'url(https://www.pngitem.com/pimgs/m/150-1503941_user-windows-10-user-icon-png-transparent-png.png)',
          },
        },
        {
          name: 'Dantistai',
          image: {
            backgroundImage:
              'url(https://www.pngitem.com/pimgs/m/150-1503941_user-windows-10-user-icon-png-transparent-png.png)',
          },
        },
        {
          name: '',
          image: {
            backgroundImage:
              'url(https://www.pngitem.com/pimgs/m/150-1503941_user-windows-10-user-icon-png-transparent-png.png)',
          },
        },
        {
          name: '5',
          image: {
            backgroundImage:
              'url(https://www.pngitem.com/pimgs/m/150-1503941_user-windows-10-user-icon-png-transparent-png.png)',
          },
        },
        {
          name: '6',
          image: {
            backgroundImage:
              'url(https://www.pngitem.com/pimgs/m/150-1503941_user-windows-10-user-icon-png-transparent-png.png)',
          },
        },
      ],
    };
  },
};
</script>

<style scoped>
.cardContainer {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
.cardContainerInside {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
.card {
  display: flex;
  justify-content: left;
  align-items: flex-end;
  width: 350px;
  height: 300px;
  margin: 50px 80px;
  background: gray;
  border-radius: 20px;
  background-size: cover;
  box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
}
.cardName {
  font-size: 40px;
  background: white;
  height: 80px;
  width: 100%;
  border-radius: 0 0 20px 20px;
  text-align: center;
}
button:hover {
  transform: scale(0.98);
}
</style>
