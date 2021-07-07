import { Cell, CellGroup, Icon, Notify, Popup, Toast, Picker, Dialog } from 'vant'

export default {
  install: (app: any): void => {
    app.use(Cell).use(CellGroup).use(Icon).use(Notify).use(Popup).use(Picker).use(Toast).use(Dialog)
  }
}
