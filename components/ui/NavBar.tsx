
import NextLink from 'next/link'
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { BarButton } from './BarButton'

export const NavBar = () => {
    return (
        <AppBar>
            <Toolbar>

                <NextLink href='' passHref legacyBehavior>
                    <Link display='flex' alignItems='center'>
                        <Typography variant='h6'>Ecommerce |</Typography>
                        <Typography sx={ { ml: 0.5 } }>Shop</Typography>
                    </Link>
                </NextLink>

                <BarButton name='Hombres' category='Hombre'/>
                <BarButton name='Mujeres' category='Mujer'/>
                <BarButton name='Unisex' category='Unisex'/>

                <Box flex={1}/>
                <IconButton><SearchOutlined/></IconButton>
                
                <NextLink href='/cart' passHref legacyBehavior>
                    <Link>
                        <IconButton>
                            <Badge badgeContent={5} color='secondary'>
                                <ShoppingCartOutlined/>
                            </Badge>
                        </IconButton>
                    </Link>
                </NextLink>

                <Button>Menú</Button>

            </Toolbar>
        </AppBar>
    )
}
