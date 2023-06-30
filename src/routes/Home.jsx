import { useContext, useState } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'
import Medicos from '../componentes/home/Medicos'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('')

  const { medicos } = useContext(ElementosGlobales)

  return (
    <>
      <section className='home'>
        {console.log(medicos)}
        <h1>
          Nuestros Médicos
        </h1>
        {loading ? <p>loading...</p> : <p>{title}</p>}
        <Medicos />
      </section>
    </>
  )
}