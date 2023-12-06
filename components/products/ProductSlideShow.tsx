import { CSSProperties, FC } from "react"
import { Slide } from "react-slideshow-image"

import 'react-slideshow-image/dist/styles.css'
import styles from './ProductSlideShow.module.css'

interface Props { colores: string[] }

function style( color: string ): CSSProperties {
    return { backgroundColor: color, backgroundSize: 'cover' }
}

export const ProductSlideShow: FC<Props> = ( { colores } ) => {
    return (
        <Slide easing="ease" duration={7000} indicators>
            { 
                colores.map( color => { 
                    return <div className={ styles['each-slide'] } key={color}>
                        <div style={ style(color) }/>
                    </div> 
                } )
            }
        </Slide>
    )
}
