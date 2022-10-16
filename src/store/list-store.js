import { makeAutoObservable } from "mobx"
import { v4 as uuidv4 } from 'uuid'

class ListStore {

  list = [{ id: uuidv4(), name: 'vue' }, { id: uuidv4(), name: 'react' }]
  constructor() {
    makeAutoObservable(this)
  }
  addList = () => {
    this.list.push({ id: uuidv4(), name: 'angular' })
  }
  logList = () => {
    console.log(this.list)
  }
}

export { ListStore }