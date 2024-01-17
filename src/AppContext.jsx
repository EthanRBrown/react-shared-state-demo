import { useRef, useState, createContext, useContext } from 'react'

const XContext = createContext()

export default function AppContext() {
  const [x, setX] = useState(0)
  return (
    <XContext.Provider value={x}>
      <div className="flex flex-col gap-2">
        <button onClick={() => setX(x => x + 1)} className="bg-sky-700 text-white font-bold px-2 py-1 rounded-md">Increment x</button>
        <Middle />
      </div>
    </XContext.Provider>
  )
}

function Middle() {
  const renderCountRef = useRef(0)
  renderCountRef.current++
  return (
    <div className="p-8 bg-sky-200 text-center">
      <Innermost />
      <p className="text-sm pt-6">&lt;Middle&gt; render count:</p>
      <p className="text-4xl font-bold">{renderCountRef.current}</p>
    </div>
  )
}

function Innermost() {
  const x = useContext(XContext)
  return (
    <div className="bg-white p-4">
      <span>x = {x}</span>
    </div>
  )
}