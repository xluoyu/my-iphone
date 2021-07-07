// import { IItem, StatusObj } from '#/index'
// import { Ref, ref } from 'vue'

// interface IUseTodoList {
//   todoList: Ref<IItem[]>
//   createItem: (str: string) => void
//   setItem: (str: string) => void
//   removeItem: (id: number) => void
//   getTodoList: (str: string) => void
// }

// const handleUseTodoList = (): IUseTodoList => {
//   // const todoList = ref<IItem[]>([])

//   const createItem = (str: string): void => {
//     let item: IItem = {
//       id: new Date().getTime(),
//       content: str,
//       status: StatusObj['Start']
//     }
//     todoList.value.push(item)
//     console.log(todoList.value)
//   }
//   const setItem = () => {
//     console.log('set')
//   }
//   const removeItem = (id: number) => {
//     todoList.value.splice(
//       todoList.value.findIndex((e) => e.id == id),
//       1
//     )
//   }
//   const getTodoList = () => {
//     console.log('get')
//   }

//   return {
//     todoList,
//     createItem,
//     setItem,
//     removeItem,
//     getTodoList
//   }
// }

// export default {
//   ...handleUseTodoList()
// }
