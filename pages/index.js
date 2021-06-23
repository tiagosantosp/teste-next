import React, { useState } from 'react'
import Link from 'next/link'
function Home() {
    const [cont, setCont] = useState(0)




    return (
        <>
        <h1>Hello</h1>

        <p>Numero: {cont}</p>
        <button onClick={()=> setCont(cont + 1)}>Add</button>
        <br/>
        <Link href="/sobre">
            <a >Sobre</a>
        </Link>
        </>
    )
}

export default Home