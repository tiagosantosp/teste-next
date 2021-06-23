function Tempo(props) {
    const dataDinamica = new Date()
    const stringData = dataDinamica.toGMTString()
    
    return (
        <>
            {stringData} (dinamico)
            {props} (dinamico)
        </>
    )
}

export function getStaticProps () {
    
    const dataDinamica = new Date()
    const stringData = dataDinamica.toGMTString()

    return {
        props: {
            stringData,
            revalidate: 5
        }
    }
}

export default Tempo