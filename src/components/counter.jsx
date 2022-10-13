// React组件使用store
// 实现步骤
// 1. 在组件中导入counterStore实例对象
// 2. 在组件中使用storeStore实例对象中的数据
// 3. 通过事件调用修改数据的方法修改store中的数据
// 4. 让组件响应数据变化

// 1. 在组件中导入counterStore实例对象
import counter from "../store/counter"

// 4. 让组件响应数据变化 - 导入observer方法
import { observer } from 'mobx-react-lite'

function Counter () {
  return (
    <div className="App">
      {/* 2. 在组件中使用storeStore实例对象中的数据 */}
      {counter.count}
      {/* 3. 通过事件调用修改数据的方法修改store中的数据 */}
      <button onClick={counter.addCount}>+</button>
    </div>
  )
}

// 4. 让组件响应数据变化 - 包裹组件让视图响应数据变化
export default observer(Counter)