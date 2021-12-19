<template>
  <div v-if="showing" class="modal-backdrop">
    <div class="modal" v-click-outside="toggleShowing">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showing: this.show,
    }
  },
  watch: {
    show(showing) {
      this.showing = showing;
    },
    showing(value) {
      if (value) {
        document.body.classList.add('modal-parent');
      } else {
        document.body.classList.remove('modal-parent');
      }
    },
  },
  methods: {
    toggleShowing() {
      this.showing = !this.showing;
    }
  }
};
</script>

<style lang="scss">
.modal-parent {
  overflow-y: hidden;
}

.modal-backdrop {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, .4);

  .modal {
    position: absolute;
    width: 40%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 2rem;
    border-radius: 0.5rem;
    text-align: center;
  }
}
</style>
