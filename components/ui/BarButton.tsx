
import NextLink from 'next/link'
import { Box, Link, Button } from "@mui/material";

interface BarButton { name: string;     category: string }

export function BarButton( { name, category }: BarButton ) {
    return <>
        <Box flex={1}/>
        <Box sx={ { display: { xs: 'none', sm: 'block' } } }>
            <NextLink href={ '/category/' + category.toLowerCase() } passHref legacyBehavior>
                <Link><Button>{name}</Button></Link>
            </NextLink>
        </Box>
    </>
}