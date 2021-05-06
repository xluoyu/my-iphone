/* eslint-disable @typescript-eslint/ban-types */
import { DefineComponent } from 'vue'

/* eslint-disable no-unused-vars */
interface IApp {
  key: string,
  photo?: string,
  name?: string,
  type: IItemKey,
  component?: DefineComponent<{}, {}, any> | any,
  style?: string
}

enum IItemKey {
  App='App',
  Weather='Weather'
}

enum IColorType {
  white='#fff',
  black='#515151'
}

export {
  IApp,
  IItemKey,
  IColorType
}
