import { Link } from 'react-router-dom'
import BotonTemaOscuro from './BotonTemaOscuro'
export default function Header() {
  return (
    <header>
      <nav>
        <Link to='/'>Home </Link>
        <Link to='/Contacto'>Contacto </Link>
        <Link to='/Fav'>Favoritos </Link>
        <BotonTemaOscuro />
      </nav>
    </header>
  )
}
