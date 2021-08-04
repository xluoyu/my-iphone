/* eslint-disable @typescript-eslint/ban-types */
import { DefineComponent } from 'vue'

/* eslint-disable no-unused-vars */
interface IApp {
  key: string // 唯一key值
  photo?: string // 图标url
  name: string // 名称
  type: IItemKey // 展示模式
  useType?: IUseType, // 使用方式 - 用于区分本机app和微应用、特色功能
  component?: DefineComponent<{}, {}, any> | any
  style?: string
  status?: boolean // 开发状态 true: 已开发, false: 未开发
  children?: IApp[]
}

enum IItemKey {
  App = 'App', // 常规app
  Weather = 'Weather', // 天气工具
  AppArray = 'AppArray'
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
