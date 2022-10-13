// 使用mobx实现一个计数器的案例

// 初始化步骤：
// 1. 定义数据状态state
// 2. 在构造器中实现数据响应式处理 makeAutoObservble
// 3. 定义action函数修改数据
// 4. 实例化store并导出

import { makeAutoObservable } from 'mobx'

class CounterStore {
  // 1. 定义数据状态state
  count = 0
  constructor() {
    // 2. 在构造器中实现数据响应式处理 makeAutoObservble
    makeAutoObservable(this)
  }
  // 3. 定义action函数修改数据
  addCount = () => {
    this.count++
  }
}

// 4. 实例化store并导出
const counter = new CounterStore()
export default counter