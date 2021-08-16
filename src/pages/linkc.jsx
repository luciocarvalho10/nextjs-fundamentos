import Link from 'next/link'
import Layout from "../components/Layout"

export default function Linkc() {
  return (
    <Layout titulo="Navegando com 'next/link'">
      <h1>
        Usado para navegar entre componentes
        <Link href="/linkc"> Link </Link>
        para esta página
      </h1>
    </Layout>
  )
}