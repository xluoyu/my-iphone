import { IApp, IItemKey, IUseType } from '#/index'

const appStore: IApp[] = [
  {
    key: 'alipay',
    type: IItemKey.App,
    photo: 'https://imgsrc.baidu.com/forum/pic/item/203fb80e7bec54e78571908cb7389b504ec26a87.jpg',
    name: '支付宝',
    useType: IUseType.customApp,
    status: true
  },
  {
    key: 'weather',
    type: IItemKey.Weather,
    name: '天气',
    status: true
  },
  {
    key: 'settings',
    type: IItemKey.App,
    useType: IUseType.defaultApp,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZGRI.png',
    name: '设置',
    status: true
  },
  {
    key: 'safari',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZ8JA.png',
    name: 'Safari 浏览器',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'photos',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZ3id.png',
    name: 'photos',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'phone',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZlIH.png',
    name: 'phone',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'appStore',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZQde.png',
    name: 'App Store',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'music',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZMZD.png',
    name: '音乐',
    useType: IUseType.customApp,
    status: true
  },
  {
    key: 'camera',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZuqO.png',
    name: 'camera',
    useType: IUseType.camera,
    status: true
  },
  {
    key: 'calculator',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZnsK.png',
    name: 'calculator',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'messages',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/gQZmM6.png',
    name: 'messages',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'clock',
    type: IItemKey.App,
    photo: 'https://z3.ax1x.com/2021/05/06/glUSTH.png',
    name: '锁屏',
    useType: IUseType.clock,
    status: true
  }
]

export default appStore
