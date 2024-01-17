import { useRef } from 'react'
import { atom, useAtomValue, useSetAtom } from 'jotai'

const xAtom = atom(0)

export default function AppJotai() {
  const setX = useSetAtom(xAtom)
  return (
    <div className="flex flex-col gap-2">
      <button onClick={() => setX(x => x + 1)} className="bg-violet-700 text-white font-bold px-2 py-1 rounded-md">Increment x</button>
      <Middle />
    </div>
  )
}

function Middle({ x }) {
  const renderCountRef = useRef(0)
  renderCountRef.current++
  return (
    <div className="p-8 bg-violet-200 text-center">
      <Innermost />
      <p className="text-sm pt-6">&lt;Middle&gt; render count:</p>
      <p className="text-4xl font-bold">{renderCountRef.current}</p>
    </div>
  )
}

function Innermost() {
  const x = useAtomValue(xAtom)
  return (
    <div className="bg-white p-4">
      <span>x = {x}</span>
    </div>
  )
}