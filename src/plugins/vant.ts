import {
  Cell, CellGroup
} from 'vant'

export default (app: any):void => {
  app.use(Cell)
    .use(CellGroup)
}
