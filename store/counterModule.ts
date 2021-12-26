import { Module, VuexModule, Mutation } from 'vuex-module-decorators'

@Module({
  name: 'counterModule',
  stateFactory: true,
  namespaced: true
})
export default class counterModule extends VuexModule {
  counter = 0

  @Mutation
  increment () {
    this.counter += 1
  }

  @Mutation
  decrement () {
    this.counter -= 1
  }
}
