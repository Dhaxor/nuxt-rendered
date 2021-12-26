<!-- Please remove this file from your project -->
<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="incre">Increment</button>
    <button @click="decre"> Decrement</button>
  </div>
</template>

<script lang="ts">

import { Component, Vue } from 'nuxt-property-decorator'
import { counterStore } from '~/store'

@Component({})
export default class Tutorial extends Vue {
  get count () {
    return counterStore.counter
  }

  incre () {
    counterStore.increment()
  }

  decre () {
    counterStore.decrement()
  }
}
</script>
