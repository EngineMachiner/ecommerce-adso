import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { products } from "../../database/products"
import NextLink from "next/link"
import ImageTemplate from "../products/ImageTemplate"
import { ItemCounter } from "../ui"
import { FC } from "react"

interface Props { editable?: boolean }

const CartList: FC<Props> = ( { editable } ) => {

    return (
        <>
            {
                products.map( ( product, key ) => (
                    <Grid container spacing={2} key={key} sx={{ mb: 1 }}>

                        <Grid item xs={3}>
                            <NextLink href={'/product'} passHref legacyBehavior>
                                <Link>
                                    <CardActionArea style={{ overflow: 'hidden' }}>
                                        <CardMedia 
                                            component={ImageTemplate} 
                                            color={ product.colores[0] }
                                            sx={{ borderRadius: '5px' }}
                                        />
                                    </CardActionArea>
                                </Link>
                            </NextLink>
                        </Grid>

                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>

                                <Typography variant='body1'>{ product.nombre }</Typography>
                                <Typography variant='body1'>Color: <strong>{ product.colores[0].toUpperCase() }</strong></Typography>

                                { editable ? <ItemCounter/> : <Typography variant='h5'>3 productos</Typography> }

                            </Box>
                        </Grid>

                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>

                                <Typography variant='subtitle1'>{ '$' + product.precio }</Typography>
                                { editable && <Button color='secondary' variant='text'>Eliminar</Button> }

                        </Grid>

                    </Grid>
                ) )
            }
        </>
    )

}

export default CartList