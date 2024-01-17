import AppContext from "./AppContext"
import AppDrilling from "./AppDrilling"
import AppJotai from "./AppJotai"

function App() {
  return (
    <div className="container flex flex-row px-2 mx-auto lg:max-w-4xl gap-4 mt-8">
      <div className="p-8 border border-gray-300">
        <h1 className="mb-4 text-xl font-bold">App w/ <span className="text-lime-800">Prop Drilling</span></h1>
        <AppDrilling />
      </div>
      <div className="p-8 border border-gray-300">
        <h1 className="mb-4 text-xl font-bold">App w/ <span className="text-sky-700">Context</span></h1>
        <AppContext />
      </div>
      <div className="p-8 border border-gray-300">
        <h1 className="mb-4 text-xl font-bold">App w/ <span className="text-violet-700">Jotai</span></h1>
        <AppJotai />
      </div>
    </div>
  )
}

export default App
