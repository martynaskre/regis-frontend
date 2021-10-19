import { Store } from 'vuex';
import { getModule } from 'nuxt-property-decorator';
import App from '~/store/App';

let AppModule: App;

function initialiseStores(store: Store<any>): void {
  AppModule = getModule(App, store);
}

export { initialiseStores, AppModule };
