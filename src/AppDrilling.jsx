import { useState, useRef } from 'react'

export default function AppDrilling() {
  const [x, setX] = useState(0)
  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => setX(x => x + 1)} className="bg-lime-700 text-white font-bold px-2 py-1 rounded-md">Increment x</button>
      <Middle x={x} />
    </div>
  )
}

function Middle({ x }) {
  const renderCountRef = useRef(0)
  renderCountRef.current++
  return (
    <div className="p-8 bg-lime-100 text-center">
      <Innermost x={x} />
      <p className="text-sm pt-6">&lt;Middle&gt; render count:</p>
      <p className="text-4xl font-bold">{renderCountRef.current}</p>
    </div>
  )
}

function Innermost({ x }) {
  return (
    <div className="bg-white p-4">
      <span>x = {x}</span>
    </div>
  )
}