import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import NextLink from "next/link"
import { ItemCounter } from "../ui"
import { FC } from "react"
import { initialData } from "../../database/products"

interface Props { editable?: boolean }

const products = [
    initialData.products[0],
    initialData.products[1],
    initialData.products[2],
]

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
                                            image={`/products/${product.images[0]}`}
                                            component='img'
                                            sx={{ borderRadius: '5px' }}
                                        />
                                    </CardActionArea>
                                </Link>
                            </NextLink>
                        </Grid>

                        <Grid item xs={7}>
                            <Box display='flex' flexDirection='column'>

                                <Typography variant='body1'>{ product.title }</Typography>
                                <Typography variant='body1'>Precio: <strong>{ product.price }</strong></Typography>

                                { editable ? <ItemCounter/> : <Typography variant='h5'>3 productos</Typography> }

                            </Box>
                        </Grid>

                        <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>

                                <Typography variant='subtitle1'>{ '$' + product.price }</Typography>
                                { editable && <Button color='secondary' variant='text'>Eliminar</Button> }

                        </Grid>

                    </Grid>
                ) )
            }
        </>
    )

}

export default CartList