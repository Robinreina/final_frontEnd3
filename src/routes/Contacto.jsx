import FormContacto from '../componentes/contacto/FormContacto'
export default function contacto() {
  return (
    <section classname='section-contact'>
      <h1 className='h1'>
        Contáctanos
      </h1>
      <div className='contenedor-contact'>
        <FormContacto />
      </div>
    </section>
  )
}