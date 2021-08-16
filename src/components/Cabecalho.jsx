import styles from '../styles/Cabecalho.module.css'
export default function Cabecalho(props) {
  return (
    <header className={styles.Cabecalho}>
      <div className={styles.titulo}>
        <h1>
          {props.titulo || 'Mais um exemplo'}
        </h1>
      </div>
      <div className={styles.links}>
        <a href="/">Início</a>
        <a href="/estilos">Estilos</a>
        <a href="/exemplo">Exemplo</a>
        <a href="/linkc">Link</a>
      </div>
    </header>
  )
}