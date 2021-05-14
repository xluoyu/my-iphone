import { Store } from 'vuex'// path to store file
import { state } from './store'// path to store file

export {}
declare module '@vue/runtime-core' {
  // Declare your own store states.
  interface ComponentCustomProperties {
    $store: Store<state>
    ctx: CanvasRenderingContext2D
  }
}
