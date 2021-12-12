<template>
  <div class="dropdown"
       v-bind:class="{ 'dropdown-opened': opened }"
  >
    <div class="dropdown-header"
         @click="toggleDropdown">
      <slot/>
    </div>
    <div class="dropdown-content">
      content
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.opened = !this.opened;
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
