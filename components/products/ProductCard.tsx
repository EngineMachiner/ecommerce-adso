
'use client'

import { FC, useMemo, useState } from "react"
import { Box, Card, CardActionArea, CardMedia, Grid, Typography } from "@mui/material"
import NextLink from "next/link"
import { IProduct } from "../../interfaces";

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

    const [ isHovered, setHover ] = useState(false)

    const productImage = useMemo( () => {

        return isHovered
          ? `products/${ product.images[1] }`
          : `products/${ product.images[0] }`

      }, [isHovered, product.images] )

    return (
        <Grid
            item xs={6} sm={4}
            onMouseEnter={ () => setHover(true) }
            onMouseLeave={ () => setHover(false) }
        >

            <Card>
                <NextLink href="/product" passHref prefetch={false} legacyBehavior>
                    <CardActionArea>
                        <CardMedia component='img' image={productImage} alt={product.title}/>
                    </CardActionArea>
                </NextLink>
            </Card>

            <Box sx={{ met: 1 }} className='fadeIn'>
                <Typography fontWeight={700}>{ product.title }</Typography>
                <Typography fontWeight={400}>{ `$${ product.price }` }</Typography>
            </Box>

        </Grid>
    )

}
