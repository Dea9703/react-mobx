// 模块化
// 场景: 一个项目有很多的业务模块，我们不能把所有的代码都写到一起，这样不好维护，提了提供可维护性，需要引入模块化机制

// 实现步骤:
// 1. 拆分模块js文件，每个模块中定义自己独立的state/action
// 2. 在store/index.js中导入拆分之后的模块，进行模块组合
// 3. 利用React的context的机制导出统一的useStore方法，供业务组件使用

import { useStore } from '../store'
import { observer } from 'mobx-react-lite'

function MoKuaiHua () {
  // 注意：解构赋值 到store实例对象就可以了
  // 防止破坏响应式 用哪个store就结构哪个store
  const { listStore, counterStore } = useStore()
  return (
    <div className="MoKuaiHua">
      <button onClick={() => counterStore.addCount()}>
        {counterStore.count}
      </button>
      <ul>
        {listStore.list.map(item =>
          <li key={item.id}>{item.name}</li>
        )}
      </ul>
      <button onClick={() => listStore.addList()}>change list</button>
      <button onClick={() => listStore.logList()}>log list</button>
    </div>
  )
}

export default observer(MoKuaiHua)