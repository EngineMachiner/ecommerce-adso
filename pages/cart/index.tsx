import React from 'react'
import { ShopLayout } from '../../components/layouts'
import { Button, Card, CardContent, Divider, Grid, Typography } from '@mui/material'
import CartList from '../../components/cart/CartList'
import OrderSummary from '../../components/cart/OrderSummary'

const CartPage = () => {

  return (

    <ShopLayout title='Carrito' pageDescription='Carrito de compras de la tienda'>
        
        <Typography>Carrito</Typography>
        
        <Grid container>

            <Grid item xs={12} sm={7}>
                <CartList editable/>
            </Grid>

            <Grid item xs={12} sm={5}>

                <Card className='summary-card'>
                    <CardContent>
                        <Typography variant='h2'>Orden</Typography>
                        <Divider sx={{ my: 2 }}/>
                        <OrderSummary/>
                        <Button color='secondary' className='circular-btn' fullWidth>Pagar</Button>
                    </CardContent>
                </Card>

            </Grid>

        </Grid>

    </ShopLayout>

  )

}

export default CartPage