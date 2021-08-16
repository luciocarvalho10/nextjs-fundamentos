import Layout from '../components/Layout'
import styles from '../styles/Estilos.module.css'

export default function Estilos () {
  return (
    <Layout titulo="CSS Módulo">
      <div className={styles.blue}>
        <h1>Background</h1>
        <h3>Estilzado </h3>
      </div>
    </Layout>
  )
}