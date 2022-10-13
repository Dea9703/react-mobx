# 创建项目
$ yarn create vite react-mobx --template react

# 安装mobx和中间件工具 mobx-react-lite  只能函数组件中使用
$ yarn add  mobx  mobx-react-lite

一. 初始化mobx
初始化步骤
1. 定义数据状态state
2. 在构造器中实现数据响应式处理 makeAutoObservble
3. 定义修改数据的函数action
4. 实例化store并导出

二. React使用store
实现步骤
1. 在组件中导入counterStore实例对象
2. 在组件中使用storeStore实例对象中的数据
3. 通过事件调用修改数据的方法修改store中的数据
4. 让组件响应数据变化