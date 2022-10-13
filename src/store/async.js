// 异步数据处理
// 测试接口: http://geek.itheima.net/v1_0/channels
// 实现步骤:
// 1. 在mobx中编写异步请求方法 获取数据 存入state中
// 2. 组件中通过 useEffect + 空依赖  触发action函数的执行

import { makeAutoObservable } from 'mobx'
import axios from 'axios'

class ChannelStore {
  channelList = []
  constructor() {
    makeAutoObservable(this)
  }
  // 只要调用这个方法 就可以从后端拿到数据并且存入channelList
  setChannelList = async () => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    this.channelList = res.data.data.channels
  }
}
const channlStore = new ChannelStore()
export default channlStore