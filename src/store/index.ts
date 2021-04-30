import { IApp } from '#/index'
import { createStore } from 'vuex'
import appStore from '@/api/app-store'

interface state {
  myAppIds: number[]
}

// interface handle {
//   type: handleType;
//   value: string | number | IItem
// }

// enum handleType {
//   Add = 'add',
//   Set = 'set',
//   Remove = 'remove',
//   Replace = 'replace'
// }

const store = createStore({
  state() {
    return {
      myAppIds: [5451, 16546751]
    }
  },
  getters: {
    myAppList({ myAppIds }: state):IApp[] {
      return myAppIds.map(e => appStore.find(a => a.id == e) as IApp)
    }
  },
  mutations: {
    // handleTodoList({ todoList }: state, handle: handle) {
    //   switch (handle.type) {
    //     // 增
    //     case handleType.Add:
    //       todoList.push({
    //         id: new Date().getTime(),
    //         content: handle.value as string,
    //         status: StatusObj.Start
    //       })
    //       break
    //     // 删
    //     case handleType.Remove:
    //       todoList.splice(todoList.findIndex(e => e.id == handle.value), 1)
    //       break
    //     // 改
    //     case handleType.Set:
    //       let curItem = todoList.find(e => e.id == (handle.value as IItem).id)
    //       if (!curItem) return
    //       (handle.value as IItem).status ? curItem.status = (handle.value as IItem).status : '';
    //       (handle.value as IItem).content = (handle.value as IItem).content
    //       break
    //     default:
    //       break
    //   }
    // }
  }
})

export default store
