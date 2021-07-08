/* eslint-disable @typescript-eslint/ban-types */
import { DefineComponent } from 'vue'

/* eslint-disable no-unused-vars */
interface IApp {
  key: string // 唯一key值
  photo?: string // 图标url
  name: string // 名称
  type: IItemKey // 应用模式
  useType?: IUseType,
  component?: DefineComponent<{}, {}, any> | any
  style?: string
  status: boolean // 开发状态 true: 已开发, false: 未开发
}

enum IItemKey {
  App = 'App', // 常规app
  Weather = 'Weather' // 天气工具
}

enum IUseType {
  defaultApp = 'defaultApp', // 默认
  customApp = 'customApp', // 自定义
  clock = 'clock', // 锁屏
  camera = 'camera' // 相机
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

export { IApp, IItemKey, IColorType, ILockType, IUseType }
