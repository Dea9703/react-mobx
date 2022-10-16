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

const rootStore = new RootStore()

// context机制的数据查找链  Provider如果找不到 就找createContext方法执行时传入的参数
const context = React.createContext(rootStore)
const useStore = () => React.useContext(context)

export { useStore }