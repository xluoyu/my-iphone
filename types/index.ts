/* eslint-disable @typescript-eslint/ban-types */
import { DefineComponent } from 'vue'

/* eslint-disable no-unused-vars */
interface IApp {
  id: number,
  photo?: string,
  name?: string,
  key: IItemKey,
  component?: DefineComponent<{}, {}, any> | any,
  style?: string
}

enum IItemKey {
  App='App',
  Weather='Weather'
}

export {
  IApp,
  IItemKey
}
