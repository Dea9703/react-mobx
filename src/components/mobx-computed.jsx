// 导入counterStore
import listStore from '../store/computed'
// 导入observer方法
import { observer } from 'mobx-react-lite'
function ListStore () {
  return (
    <div>
      {/* 原数组 */}
      {JSON.stringify(listStore.list)}
      {/* 计算属性 */}
      {JSON.stringify(listStore.filterList)}
      <button onClick={() => listStore.changeList()}>change list</button>
    </div>
  )
}
// 包裹组件让视图响应数据变化
export default observer(ListStore)