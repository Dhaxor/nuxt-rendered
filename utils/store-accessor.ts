import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import counterModule from '~/store/counterModule'

let counterStore: counterModule

function initializeStore (store: Store<any>): void {
  counterStore = getModule(counterModule, store)
}
export { initializeStore, counterStore }
