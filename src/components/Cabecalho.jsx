import styles from '../styles/Cabecalho.module.css'
import Navegador from './Navegador'
export default function Cabecalho(props) {
  return (
    <header className={styles.Cabecalho}>
      <div className={styles.titulo}>
        <h1>
          {props.titulo || 'Mais um exemplo'}
        </h1>
      </div>
      <div className={styles.links}>
        <Navegador texto="Início" destino="/" />
        <Navegador texto="Estilos" destino="/estilos" />
        <Navegador texto="Exemplo" destino="/exemplo" />
        <Navegador texto="Link" destino="/linkc" />
      </div>
    </header>
  )
}