// 组合子模块
// 封装统一导出供业务组件使用

import React from 'react'
import { ListStore } from './list-store'
import { CounterStore } from './counter-store'

// 声明一个rootStore
class RootStore {
  constructor() {
    // 对子模块进行实例化操作
    this.listStore = new ListStore()
    this.counterStore = new CounterStore()
  }
}
// 实例化操作根store
const rootStore = new RootStore()

// 使用 react context机制的数据查找链完成统一方法封装
// Provider value={传递的数据}
// 查找机制：useContext优先从provider value查找；如果找不到，就会找createContext方法传递过来的默认参数
const context = React.createContext(rootStore)
//这个方法的作用：通过useContext拿到rootStore实例对象 然后返回
// 只需在业务组件中 调用useStore -> rootStore
const useStore = () => React.useContext(context)

export { useStore }