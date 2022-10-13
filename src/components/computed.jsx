// 导入computedStore
import computedStore from '../store/computed'
// 导入observer方法
import { observer } from 'mobx-react-lite'
function ComputedStore () {
  return (
    <div>
      {/* 原数组 */}
      {JSON.stringify(computedStore.list)}
      {/* 计算属性 */}
      {JSON.stringify(computedStore.filterList)}
      <button onClick={() => computedStore.changeList()}>change list</button>
    </div>
  )
}
// 包裹组件让视图响应数据变化
export default observer(ComputedStore)