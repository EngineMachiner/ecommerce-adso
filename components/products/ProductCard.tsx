
import { FC, useMemo, useState } from "react"
import { IProduct } from "../../database/products"
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material"
import ImageTemplate from "./ImageTemplate"

interface Props { product: IProduct }

// Tomado de stackoverflow.
function randomColor() {

    const letters = '0123456789ABCDEF';     let color = '#'

    for ( let i = 0; i < 6; i++ ) {
        color += letters[ Math.floor( Math.random() * 16 ) ];
    }

    return color

}

export const ProductCard: FC<Props> = ( { product } ) => {

    const colors = useMemo( () => [ randomColor(), randomColor() ], [] )
    const [isHovered, setHover] = useState(false)
    const color = useMemo( () => {

        return !isHovered ? colors[0] : colors[1]

    }, [isHovered, colors] )

    return (
        <Grid
            item xs={6} sm={4}
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
        >

            <Card>
                <CardActionArea>
                    <CardMedia component={ImageTemplate} color={color}/>
                </CardActionArea>
            </Card>

            <Box sx={{ met: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{ product.nombre }</Typography>
                <Typography fontWeight={400}>{ `$${ product.precio }` }</Typography>
            </Box>

        </Grid>
    )

}
