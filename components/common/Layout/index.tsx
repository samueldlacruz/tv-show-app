import Head from "next/head"
import { Fragment } from "react"
import Footer from "./Footer"
import Header from "./Header"
import { ILayout } from "./Layout"

const Layout = ({ children, title, withoutSearch = false }: ILayout) => {

    return (
        <Fragment>
            <Head>
                {title && <title>{`${title} | TV Show App`}</title>}
                <link rel="icon" type="image/png" href="favicon.png" />
            </Head>

            <div className="flex flex-col min-h-screen">
                <Header hiddenSearch={withoutSearch} />
                
                <main className="flex-1 mt-16">
                    {children}
                </main>

                <Footer />
            </div>
        </Fragment>
    )
}

export default Layout