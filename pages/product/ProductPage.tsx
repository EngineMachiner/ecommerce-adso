
import { Box, Button, Chip, Grid, Typography } from '@mui/material'
import { ShopLayout } from '../../components/layouts'
import { productTypes1, products } from '../../database/products'
import { ProductSlideShow, TypeSelector } from '../../components/products'
import { ItemCounter } from '../../components/ui'

const i = 0
const product = products[i]
const productTypes = productTypes1

const ProductPage = () => {

    const selectedType = productTypes[i]

    return (
        <ShopLayout title={ product.nombre } pageDescription={ product.descripcion }>
            <Grid container spacing={3}>

                <Grid item xs={12} sm={7}>
                    <ProductSlideShow colores={ product.colores }/> 
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Box display='flex' flexDirection='column'>

                        { /* titulos */ }

                        <Typography variant='h1' component='h1'>{ product.nombre }</Typography>
                        <Typography variant='subtitle1' component='h2'>{ `$${product.precio}` }</Typography>

                        { /* cantidades */ }
                        <Box sx={{ my: 2 }}>
                            <Typography variant='subtitle2'>Cantidad</Typography>
                            { /* itemCounter */ }
                            <ItemCounter/>
                            <TypeSelector selectedType={selectedType} types={productTypes}/>
                        </Box>

                        <Button color='secondary' className='circular-btn'>Agregar a carrito</Button>

                        { /* <Chip label='No hay disponibles.' color='error' variant='outlined'/> */ }
                        {/* Descripción */}

                        <Box sx={{ mt: 3 }}>
                            <Typography variant='subtitle2'>Descripción</Typography>
                            <Typography variant='body2'>{ product.descripcion }</Typography>
                        </Box>

                    </Box>
                </Grid>

            </Grid>
        </ShopLayout>
    )
}

export default ProductPage