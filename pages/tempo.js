function Tempo(props) {
    const dataDinamica = new Date()
    const stringData = dataDinamica.toGMTString()
    
    return (
        <>
            {stringData} (dinamico)<br/>
            
            {props.stringData} (estatico)
        </>
    )
}

export function getStaticProps () {
    
    const novaDinamica = new Date()
    const stringData = novaDinamica.toGMTString()

    return {
        props: {
            stringData,
            
        },
        revalidate: 5
    }
}

export default Tempo