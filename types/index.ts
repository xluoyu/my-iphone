/* eslint-disable @typescript-eslint/ban-types */
import { DefineComponent } from 'vue'

/* eslint-disable no-unused-vars */
interface IApp {
  key: string
  photo?: string
  name?: string
  type: IItemKey
  component?: DefineComponent<{}, {}, any> | any
  style?: string
}

enum IItemKey {
  App = 'App',
  Weather = 'Weather'
}

enum IColorType {
  white = '#515151',
  black = '#fff'
}

enum ILockType {
  Normal = 'normal',
  Number = 'number',
  Slide = 'slide'
}

export { IApp, IItemKey, IColorType, ILockType }
