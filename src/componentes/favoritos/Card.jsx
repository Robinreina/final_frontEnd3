import userImage from '../../assets/doctor.png'

import { BsTrash } from 'react-icons/bs'
export default function Card(props) {
  const { medicoFavorito, eliminarMedicoFavorito } = props

  return (
    <li className='card'>
      <img src={userImage} alt='Imagen de usuario' />
      <p>
        <span className='titulo'>Nombre:</span> {medicoFavorito.name}
      </p>
      <hr></hr>
      <p>
        <span className='titulo'>Usuario:</span> {medicoFavorito.username}
      </p>
      <hr></hr>
      <BsTrash
        className='eliminar'
        onClick={() => eliminarMedicoFavorito(medicoFavorito)}
      />
      
    </li>
  )
}
