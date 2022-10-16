import Counter from "./components/counter"
import Computed from "./components/computed"
import Channel from "./components/async"
import MoKuaiHua from "./components/mokuaihua"

function App () {
  return (
    <div className="App">
      <Counter />
      <Computed />
      <Channel />
      <MoKuaiHua />
    </div>
  )
}

export default App