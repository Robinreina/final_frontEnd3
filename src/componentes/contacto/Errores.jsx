export default function Errores(props) {
    const { errores } = props
    return (
      <div className='errores'>
        <h2>Hay algún error</h2>
        <ol>
          {errores.map(error => (
            <li key={error.id}>{error.nombreError}</li>
          ))}
        </ol>
      </div>
    )
  }
  