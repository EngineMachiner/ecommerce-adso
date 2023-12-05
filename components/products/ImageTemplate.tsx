export default function ImageTemplate( props: { color: string } ) {
    
    const { color } = props

    return <div style={{ backgroundColor: color, width: '350px', height: '350px' }}/>

}