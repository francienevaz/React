import { useState } from "react"

const Conditional = () => {

    const [condicao, setCondicao] = useState(false);


  return (

    <div>
        <p>I cant believe that! Isn't real?</p>
        {condicao ? (<p>It's true, I swear!</p>) : (<p>No, of course!</p>)}
    </div>

  )
}

export default Conditional