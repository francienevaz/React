const Container = ({children}) => {
  return (
    <>
    {/* A children funciona como um container que irá envolver o componente, é como no HTML, a questão de hierarquia, se não for passada dessa forma, o componente que chamamos lá no App.jsx, não irá renderizar nada, a gente usa quando precisamos passar algo diretamente pelo componente, e então chamamos o componente igual uma tag, e passamos o que queremos renderizar nesse componente */}
        {children}
    </>
  )
}

export default Container