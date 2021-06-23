function Tempo(props) {
    const dataDinamica = new Date()
    const stringData = dataDinamica.toGMTString()
    
    return (
        <>
            {stringData} (dinamico)
        </>
    )
}

export default Home