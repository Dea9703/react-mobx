// 计算属性（衍生状态）
// 概念: 有一些状态根据现有的状态计算（衍生）得到，我们把这种状态叫做计算属性。

// 实现步骤
// 1. 声明一个存在的数据
// 2. 通过get关键词 定义计算属性
// 3. 在 makeAutoObservable 方法中标记计算属性

import { computed, makeAutoObservable } from 'mobx'

class ComputedStore {
  // 1. 声明一个存在的数据
  list = [1, 2, 3, 4, 5, 6]
  constructor() {
    // 3. 在 makeAutoObservable 方法中标记计算属性
    makeAutoObservable(this, {
      filterList: computed
    })
  }
  // 修改原数组
  changeList = () => {
    this.list.push(7, 8, 9)
  }
  // 2. 通过get关键词 定义计算属性
  get filterList () {
    return this.list.filter(item => item > 4)
  }
}

const computedStore = new ComputedStore()
export default computedStore