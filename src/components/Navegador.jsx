import Link from 'next/link'
import styles from '../styles/Navegador.module.css'

export default function Navegador(props) {
  return (
    <div className={styles.link}>
      <Link href={props.destino} passHref>
        {props.texto}
      </Link>
    </div>
  )
}