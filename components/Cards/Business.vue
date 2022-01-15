<template>
  <div class="providerContainer" :style="{ backgroundImage: `url('${this.cover}')` }">
    <img :src="logo" class="providerImage"  alt="logotipas" />
    <div class="providerTextBox">
      <a class="providerPhone" :href="`phone:${phoneNumber}`">
        <img :src="require('~/assets/img/icons/phone.png')" />
      </a>
      <h1 class="providerHeading cursor-pointer" @click="handleClick">
        <slot />
      </h1>
      <p class="providerAddress">
        <slot name="address" />
      </p>
      <p class="providerDescription">
        <slot name="description" />
      </p>
      <Rating v-if="showRating"
              :rating="rating" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    phoneNumber: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    showRating: {
      type: Boolean,
      default: false,
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e);
    },
  },
};
</script>

<style scoped>
.providerContainer {
  width: 85%;
  height: 300px;
  border-radius: 20px;
  margin-top: 60px;
  position: relative;
  background: grey center center;
  background-size: cover;
}
.providerTextBox {
  position: absolute;
  height: 250px;
  margin-top: 25px;
  width: 70%;
  background-color: white;
  right: 2.5%;
  border-radius: 20px;
  padding: 20px 40px;
}
.providerHeading {
  font-size: 37px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.providerPhone {
  width: 32px;
  height: 32px;
  background-color: #c4c4c4;
  position: absolute;
  right: 15px;
  top: 15px;
  border-radius: 100px;
  text-align: center;
  padding-top: 5px;
  padding-left: 4px;
}
.providerAddress {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  position: relative;
  padding-left: 16px;
  margin-bottom: 10px;
}
.providerAddress:before {
  content: '';
  background: url('~/assets/img/icons/location.png');
  width: 11px;
  height: 11px;
  display: block;
  position: absolute;
  top: calc(50% - 1px);
  transform: translateY(-50%);
  left: 0;
}
.providerDescription {
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.selectContainer {
  margin: 20px;
}
.servicesSelect {
  background-color: #c4c4c4;
  width: 100%;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  padding: 10px;
  border-radius: 5px;
}
.servicesSelect:focus {
  outline: 0;
}

.providerImage {
  position: absolute;
  top: 50%;
  left: 8%;
  transform: translate(-8%, -50%);
}

@media (max-width: 1100px) {
  .providerContainer {
    height: 250px;
  }
  .providerTextBox {
    height: 200px;
  }
  .providerHeading {
    font-size: 30px;
  }
  .providerPhone {
    width: 28px;
    height: 28px;
  }
  img {
    width: 20px;
    height: 20px;
  }
  .providerAddress {
    font-size: 14px;
  }
  .providerAddress:before {
    width: 11px;
    height: 11px;
    top: calc(50% - 1px);
  }
  .providerDescription {
    font-size: 14px;
  }
}

@media (max-width: 500px) {
  .providerContainer {
    height: 200px;
  }
  .providerTextBox {
    width: 95%;
    height: 180px;
    margin-top: 10px;
    padding: 20px;
  }
  .providerHeading {
    font-size: 20px;
  }
  .providerPhone {
    width: 25px;
    height: 25px;
  }
  img {
    width: 17px;
    height: 17px;
  }
  .providerAddress {
    font-size: 12px;
  }
  .providerAddress:before {
    width: 11px;
    height: 11px;
    top: calc(50% - 1px);
  }
  .providerDescription {
    font-size: 12px;
  }
}
</style>
