import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function DoctorId() {
  const navigate = useNavigate()
  const params = useParams()
  const [doctor, setDoctor] = useState()
  const [loading, setLoading] = useState(true)

  const volverALosMedicos = () => {
    navigate(-1)
  }

  async function getDoctor() {
    setLoading(true)
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    )
    const data = await response.json()
    setDoctor(data)
    setLoading(false)
  }
  useEffect(() => {
    getDoctor()
  }, [])

  return (
    <section className='section-doctor'>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1> Número: {doctor.id}</h1>
          <article>
            <h1> Nombre: {doctor.name}</h1>
            <h1>Usuario: {doctor.username}</h1>
            <h1>Matricula: {doctor.id}</h1>
          </article>
        </>
      )}
      <button onClick={volverALosMedicos}>
       Volver al Home
      </button>
    </section>
  )
}