import { useState } from 'react'
import Layout from '../components/Layout'
export default function integracao01() {

  const [cliente, setCliente] = useState({})
  const [codigo, setCodigo] = useState(1)
  const [codigo2, setCodigo2] = useState({})

  function obterCliente() {

    fetch(`http://localhost:3000/api/clientes`)
      .then(resp => resp.json())
      .then(dados => setCliente(dados))
  }

  async function obterExtra() {

    const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
    const data = await resp.json()

    setCliente({})
    setCodigo2(data)
  }

  function inputChange(e) {
    e.target.value < 0 ? setCodigo(0) : setCodigo(e.target.value)
  }

  return (
    <Layout titulo="Integração 01">
      <div>
        <input type="number" value={codigo} onChange={e => inputChange(e)}/>
        <button onClick={obterCliente}>OBTER</button>
        <button onClick={obterExtra}>EXTRA</button>
      </div>
      <ul>
        <li>Código: {cliente.id || codigo2.codigo}</li>
        <li>Nome: {cliente.nome}</li>
        <li>Email: {cliente.email}</li>
      </ul>
    </Layout>
  )
}