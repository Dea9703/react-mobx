import Counter from "./components/counter"
import Computed from "./components/computed"
import Channel from "./components/async"

function App () {
  return (
    <div className="App">
      <Counter />
      <Computed />
      <Channel />
    </div>
  )
}

export default App