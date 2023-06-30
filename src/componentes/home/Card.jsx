import userImage from '../../assets/doctor.png'
import { Link, useNavigate } from 'react-router-dom'
import { BsHeartFill, BsHeart } from 'react-icons/bs'

export default function Card(props) {
  const { medico, esFavorito, manejarFavoritos } = props

  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/Medic/${medico.id}`)
  }

  return (
    <li className='card' onClick={handleClick}>
      <img src={userImage} alt='Imagen de usuario' />
      <p>
        <span className='titulo'>Nombre:</span> {medico.name}
      </p>
      <hr></hr>
      <p>
        <span className='titulo'>Usuario:</span> {medico.username}
      </p>
      <hr></hr>
      <Link to={`/Medic/${medico.id}`}>
      </Link>
      {esFavorito ? (
        <BsHeartFill
          className='favorito'
          onClick={e => {
            e.stopPropagation()
            manejarFavoritos(medico)
          }}
        />
      ) : (
        <BsHeart
          className=''
          onClick={e => {
            e.stopPropagation() 
            manejarFavoritos(medico)
          }}
        />
      )}
    </li>
  )
}
