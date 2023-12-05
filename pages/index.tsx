import { Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";
import { products } from "../database/products";
import { ProductList } from "../components/products";

export default function Home() {

    return (
        <ShopLayout title={"Ecommerce SENA - Home"} pageDescription={"Encuentra los mejores articulos para tu setup"}>
            
            <Typography variant='h1' component='h1'>Tienda</Typography>
            <Typography variant='h2' sx={ { mb: 1 } }>Articulos</Typography>

            <ProductList products={ products as any }/>

        </ShopLayout>
    )
  
}
