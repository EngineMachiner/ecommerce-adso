
import { CSSProperties, FC } from 'react'
import Head from 'next/head'
import { NavBar, SideMenu } from '../ui';

interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string
}

const mainStyle: CSSProperties = {
    margin: '80px auto',    maxWidth: '1440px',
    padding: '0px 30px'
}

export const ShopLayout: FC<Props> = ( { children, title, pageDescription, imageFullUrl } ) => {
    return (
        <>
            <Head>

                <title>{title}</title>
                <meta name='description' content={pageDescription}/>
                <meta name='og:title' content={title}/>
                <meta name='og:description' content={pageDescription}/>

                { imageFullUrl && ( <meta name='og:title' content={imageFullUrl}/> ) }

            </Head>

            <nav>{ /* TODO: Navbar */ }<SideMenu/><NavBar/></nav>

            { /* TODO: Sidebar */ }

            <main style={mainStyle}>{children}</main>

            <footer>{ /* TODO: Footer */ }</footer>

        </>
    )
}
