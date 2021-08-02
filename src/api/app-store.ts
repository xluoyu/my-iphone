import { IApp, IItemKey, IUseType } from '#/index'

const appStore: IApp[] = [
  {
    key: 'alipay',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/alipay.jpg',
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
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/settings.png',
    name: '设置',
    status: true
  },
  {
    key: 'safari',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/safari.png',
    name: 'Safari 浏览器',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'photos',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/photos.png',
    name: 'photos',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'phone',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/phone.png',
    name: 'phone',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'appStore',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/appStore.png',
    name: 'App Store',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'music',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/music.png',
    name: '音乐',
    useType: IUseType.customApp,
    status: true
  },
  {
    key: 'camera',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/camera.png',
    name: 'camera',
    useType: IUseType.camera,
    status: true
  },
  {
    key: 'calculator',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/calculator.png',
    name: 'calculator',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'messages',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/messages.png',
    name: 'messages',
    useType: IUseType.defaultApp,
    status: false
  },
  {
    key: 'clock',
    type: IItemKey.App,
    photo: 'https://xluoyu.github.io/image-riverbed/iphone/clock.png',
    name: '锁屏',
    useType: IUseType.clock,
    status: true
  }
]

export default appStore
