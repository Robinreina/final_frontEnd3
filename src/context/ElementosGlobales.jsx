import { createContext, useState, useEffect } from 'react'

export const ElementosGlobales = createContext({})
export default function ElementosGlobalesProvider(props) {
  const { children } = props
  const [medicos, setMedicos] = useState([])

  const [tema, setTema] = useState('oscuro')

  async function getMedicos() {
    const response = await (
      await fetch('https://jsonplaceholder.typicode.com/users')
    ).json()
    setMedicos(response)
  }

  function cambiarTema() {
    const root = document.documentElement
    if (tema === 'claro') {
      root.classList.remove('oscuro')
      setTema('oscuro')
    } else {
      root.classList.add('oscuro')

      setTema('claro')
    }
  }

  const valoresGlobales = {
    medicos,
    tema,
    cambiarTema
  }

  useEffect(() => {
    getMedicos()
  }, [])

  return (
    <ElementosGlobales.Provider value={valoresGlobales}>
      {children}
    </ElementosGlobales.Provider>
  )
}
