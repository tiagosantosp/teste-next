import React, { useState } from 'react'

function Home() {
    const [cont, setCont] = useState(0)




    return (
        <>
        <h1>Hello</h1>

        <p>Numero: {cont}</p>
        <button onClick={()=> setCont(cont + 1)}>Add</button>
        <br/>
        <a href="/sobre">Sobre</a>
        </>
    )
}

export default Home