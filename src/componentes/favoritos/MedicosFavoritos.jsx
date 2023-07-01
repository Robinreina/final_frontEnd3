import { useState } from 'react'
import Card from './Card'


export default function ListarMedicosFavoritos() {
  const [medicosFavoritos, setMedicosFavoritos] = useState(
    JSON.parse(localStorage.getItem('medicosFavoritos') || '[]')
  )

  function eliminarMedicosFavorito(medicoAEliminar) {
    const nuevosFavoritos = medicosFavoritos.filter(
      medico => medico.id !== medicoAEliminar.id
    )
    setMedicosFavoritos(nuevosFavoritos)
    localStorage.setItem(
      'medicosFavoritos',
      JSON.stringify(nuevosFavoritos)
    )
  }
  return (
    <>
      {medicosFavoritos.length === 0 ? (
        <h1 className='h1'>
          No tienes medicos favoritos
          <section className='not-found'>
          </section>
        </h1>
      ) : (
        <h1 className='sin-favoritos'>
          Tus médicos favoritos
        </h1>
      )}

      <section className='section-cards-favoritos'>
        <ul className='covers'>
          {medicosFavoritos.map(medicoFavorito => (
            <Card
              key={medicoFavorito.id}
              medicoFavorito={medicoFavorito}
              eliminarMedicoFavorito={eliminarMedicosFavorito}
            />
          ))}
        </ul>
      </section>
    </>
  )
}
