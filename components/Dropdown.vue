<template>
  <div class="dropdown"
       v-bind:class="{ 'dropdown-opened': opened }"
  >
    <div class="dropdown-header"
         @click="toggleDropdown">
      <slot/>
    </div>
    <div class="dropdown-content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
import mitt from 'mitt';

const emitter = mitt();
const closeEvent = 'closeDropdowns'

export default {
  data() {
    return {
      id: Math.floor(Math.random() * 100),
      opened: false,
    };
  },
  mounted() {
    emitter.on(closeEvent, ({ exclude }) => {
      if (this.id !== exclude) {
        this.opened = false;
      }
    });
  },
  methods: {
    toggleDropdown() {
      this.opened = !this.opened;

      if (this.opened) {
        emitter.emit(closeEvent, {
          exclude: this.id,
        });
      }
    }
  },
}
</script>

<style lang="scss">
.dropdown {
  position: relative;
  width: 378px;
  padding: 20px;

  &.dropdown-opened {
    background-color: #4059AD;
    border-top-right-radius: 50px;
    border-top-left-radius: 50px;

    .dropdown-header {
      background-color: #4059AD;

      & > * {
        z-index: 9998;
        position: relative;
      }
    }

    .dropdown-content {
      display: block;
      position: absolute;
    }
  }

  .dropdown-header {
    cursor: pointer;
    user-select: none;
  }

  .dropdown-content {
    background-color: #4059AD;
    display: none;
    width: 100%;
    left: 0;
    padding: 20px;
    z-index: 9997;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
  }
}
</style>
