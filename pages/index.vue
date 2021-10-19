<template>
  <Tutorial/>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { AppModule } from '~/store';

@Component
export default class Index extends Vue {
  mounted() {
    AppModule.testAction();
  }
}
</script>
