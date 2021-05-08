import {
  Cell,
  CellGroup,
  Icon
} from 'vant'

export default (app: any):void => {
  app.use(Cell)
    .use(CellGroup)
    .use(Icon)
}
