import { useState } from 'react'
import Errores from './Errores'
import generarId from './Autoid.js'
export default function FormContacto() {
  const [nombre, setNombre] = useState('')
  const [mail, setMail] = useState('')
  const [error, setError] = useState([])
  const [exito, setExito] = useState(false)

  const agregarError = errorNuevo => {
    setError(prevErrors => [
      ...prevErrors,
      { nombreError: errorNuevo, id: generarId() }
    ])
  }
  function esCorreoElectronico(cadena) {
    var patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return patron.test(cadena)
  }

  const validarFormulario = () => {
    let resultado = true
    setError([])

    if (nombre.trim().length < 5) {
      agregarError('El nombre debe tener 5 o mas caracteres')
      resultado = false
    }
    if (!esCorreoElectronico(mail)) {
      agregarError('El e-mail no es valido')
      resultado = false
    }
    setExito(resultado)
    return resultado
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validarFormulario()) {
      setExito(true)
      setMail('')
      setNombre('')
    }
  }

  const changeNombre = e => {
    setNombre(e.target.value)
  }

  const changeMail = e => {
    setMail(e.target.value)
  }

  return (
    <section className='section-formulario'>

      <form onSubmit={handleSubmit}>
        {' '}
        {error.length === 0 ? undefined : <Errores errores={error} />}
        <label htmlFor='nombre'>Nombre </label>
        <input type='text' id='nombre' value={nombre} onChange={changeNombre} />
        <label htmlFor='mail'>E-Mail </label>
        <input type='text' id='mail' value={mail} onChange={changeMail} />
        <button type='submit'>Enviar</button>
        {exito && (
          <p className='exito'>
          Gracias, te contactaremos cuanto antes vía e-mail.
          </p>
        )}
      </form>
      
    </section>
  )
}
