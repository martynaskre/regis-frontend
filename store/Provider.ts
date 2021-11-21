import { Module, VuexModule, VuexAction } from 'nuxt-property-decorator';
import { $axios } from '~/utils/api';

@Module({
  name: 'App',
  stateFactory: true,
  namespaced: true,
})
export default class Provider extends VuexModule {
  @VuexAction
  async testAction() {
    const users = await $axios.$get('https://api.oceandrivers.com:443/v1.0/getWeatherDisplay/cnarenal/?period=latestdata');

    console.log('Test API response:', users);
  }
}
