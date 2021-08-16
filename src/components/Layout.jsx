import Cabecalho from './Cabecalho'
import styles from '../styles/Layout.module.css'

export default function Layout(props) {
  return (
    <div>
      <Cabecalho titulo={props.titulo}/>
      <div className={styles.conteudo}>
        {props.children}
      </div>
    </div>
  )
}