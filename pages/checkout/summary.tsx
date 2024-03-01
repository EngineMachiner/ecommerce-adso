import NextLink from 'next/link'
import { Typography, Grid, Card, CardContent, Divider, Button, Box, Link } from "@mui/material"
import CartList from "../../components/cart/CartList"
import OrderSummary from "../../components/cart/OrderSummary"
import { ShopLayout } from "../../components/layouts"

const SummaryPage = () => {

    return (

        <ShopLayout title='Resumen de la orden' pageDescription='Resumen de la orden'>
        
            <Typography>Resumen de la orden</Typography>
            
            <Grid container>

                <Grid item xs={12} sm={7}><CartList/></Grid>

                <Grid item xs={12} sm={5}>

                    <Card className='summary-card'>
                        <CardContent>

                            <Typography variant='h2' style={{ fontSize: '40px' }}>Resumen (3 productos)</Typography>

                            <Divider sx={{ my: 2 }}/>

                            <Box display='flex' justifyContent='space-between'>
                                <Typography variant="subtitle1">Dirección de entrega</Typography>
                                <NextLink href='/checkout/address' passHref legacyBehavior>
                                    <Link underline='always'>Editar</Link>
                                </NextLink>
                            </Box>

                            <Typography>Nombre registrado</Typography>
                            <Typography>Dirección registrada</Typography>
                            <Typography>Ciudad registrada</Typography>
                            <Typography>Teléfono registrado</Typography>

                            <Divider sx={{ my: 1 }}/>

                            <Box display='flex' justifyContent='end'>
                                <NextLink href='/cart' passHref legacyBehavior>
                                    <Link underline='always'>Editar</Link>
                                </NextLink>
                            </Box>

                            <OrderSummary/>

                            <Button color='secondary' className='circular-btn' fullWidth>Confirmar orden</Button>
                        
                        </CardContent>
                    </Card>

                </Grid>

            </Grid>

        </ShopLayout>
        
    )
}

export default SummaryPage