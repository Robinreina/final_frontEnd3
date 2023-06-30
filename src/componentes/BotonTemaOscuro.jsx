import { BsFillBrightnessAltHighFill, BsFillMoonStarsFill } from 'react-icons/bs'
import { useContext, useEffect } from 'react'
import { ElementosGlobales } from '../context/ElementosGlobales'

export default function BotonTemaOscuro() {
  const { tema, cambiarTema } = useContext(ElementosGlobales)

  {
    console.log(tema)
  }

  return (
    <>
      <button onClick={cambiarTema}>
        {tema === 'claro' ? (
          <BsFillBrightnessAltHighFill />
        ) : (
          <BsFillMoonStarsFill/>
        )}
        Cambiar Tema
      </button>
    </>
  )
}
