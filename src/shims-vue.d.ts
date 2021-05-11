import { Store } from 'vuex'// path to store file
import { state } from './store'// path to store file

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<state>;
    ctx: CanvasRenderingContext2D
  }
}
