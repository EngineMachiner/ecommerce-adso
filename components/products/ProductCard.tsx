
'use client'

import { FC, useMemo, useState } from "react"
import { IProduct } from "../../database/products"
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material"
import ImageTemplate from "./ImageTemplate"
import NextLink from "next/link"

// Tomado de stackoverflow.
function randomColor() {

    const letters = '0123456789ABCDEF';     let color = '#'

    for ( let i = 0; i < 6; i++ ) {
        color += letters[ Math.floor( Math.random() * 16 ) ];
    }

    return color

}

interface Props { product: IProduct }

export const ProductCard: FC<Props> = ( { product } ) => {

    const [isHovered, setHover] = useState(false)

    const color = useMemo( () => {

        const colores = product.colores

        return !isHovered ? colores[0] : colores[1]

    }, [ isHovered, product.colores ] )

    return (
        <Grid
            item xs={6} sm={4}
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
        >

            <Card>
                <NextLink href="/product" passHref prefetch={false} legacyBehavior>
                    <CardActionArea>
                        <CardMedia component={ImageTemplate} color={color}/>
                    </CardActionArea>
                </NextLink>
            </Card>

            <Box sx={{ met: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{ product.nombre }</Typography>
                <Typography fontWeight={400}>{ `$${ product.precio }` }</Typography>
            </Box>

        </Grid>
    )

}
