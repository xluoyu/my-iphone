/* eslint-disable no-unused-vars */
interface IApp {
  id: number,
  photo?: string,
  name?: string,
  key: IItemKey
}

enum IItemKey {
  App='App',
  Weather='Weather'
}

export {
  IApp,
  IItemKey
}
