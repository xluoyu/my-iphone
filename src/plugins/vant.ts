import {
  Cell,
  CellGroup,
  Icon,
  Notify,
  Popup,
  Toast,
  Picker
} from 'vant'

export default {
  install: (app: any):void => {
    app.use(Cell)
      .use(CellGroup)
      .use(Icon)
      .use(Notify)
      .use(Popup)
      .use(Picker)
      .use(Toast)
  }
}

