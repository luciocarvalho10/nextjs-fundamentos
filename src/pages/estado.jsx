import { useState } from "react"
import Layout from "../components/Layout"

export default function Estado() {
  let [numero, setNumero] = useState(0)
  return (
    <Layout titulo="Componente com estado">
      <div>
        <p>{numero}</p>
        <button onClick={() => setNumero(numero + 1)}>+1</button>
      </div>
    </Layout>
  )
}