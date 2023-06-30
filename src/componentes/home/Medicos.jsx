import { useContext, useState } from 'react'
import { ElementosGlobales } from '../../context/ElementosGlobales'
import Card from './Card'

export default function Medicos() {
  const { medicos } = useContext(ElementosGlobales)

  const [medicosFavoritos, setMedicosFavoritos] = useState(
    JSON.parse(localStorage.getItem('medicosFavoritos') || '[]')
  )

  function agregarMedicoFavorito(medicoAgregar) {
    if (
      !medicosFavoritos.some(
        medicoFavorito => medicoFavorito.id === medicoAgregar.id
      )
    ) {
      const nuevosFavoritos = [...medicosFavoritos, medicoAgregar]
      setMedicosFavoritos(nuevosFavoritos)
      localStorage.setItem(
        'medicosFavoritos',
        JSON.stringify(nuevosFavoritos)
      )
    }
  }

  function eliminarMedicoFavorito(medicoAEliminar) {
    const nuevosFavoritos = medicosFavoritos.filter(
      medico => medico.id !== medicoAEliminar.id
    )
    setMedicosFavoritos(nuevosFavoritos)
    localStorage.setItem(
      'medicosFavoritos',
      JSON.stringify(nuevosFavoritos)
    )
  }

  const manejarFavoritos = medico => {
    if (esMedicoFavorito(medico)) {
      eliminarMedicoFavorito(medico)
    } else {
      agregarMedicoFavorito(medico)
    }
  }

  const esMedicoFavorito = medico => {
    return medicosFavoritos.some(
      medicoFavorito => medicoFavorito.id === medico.id
    )
  }

  return (
    <section className='section-cards'>
      <ul className='covers'>
        {medicos.map(medico => (
          <Card
            key={medico.id}
            medico={medico}
            manejarFavoritos={manejarFavoritos}
            esFavorito={esMedicoFavorito(medico)}
          />
        ))}
      </ul>
    </section>
  )
}
