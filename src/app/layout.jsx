import "./globals.css"

import { ibm_plex_sans } from "./font"

import { Analytics } from '@vercel/analytics/react'

import { Providers } from "@/src/app/__components__/Providers"

const siteTitle = "VeggieVine"

const siteDesc =
    "VeggieVine adalah platform online shop yang menyediakan berbagai macam sayuran segar dan buah-buahan yang dijual langsung oleh petani."

const siteKey =
    "veggievine, sayur, buah, petani, online shop, sayuran segar, buah-buahan, petani lokal, petani indonesia, petani lokal indonesia, petani lokal jakarta, petani lokal bogor, petani lokal depok, petani lokal tangerang, petani lokal bekasi"

export default function RootLayout({ children }) {
    return (
        <html lang="id" data-theme="emerald">
            <head>
                <meta charSet="UTF-8" />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover"
                />

                <title>{siteTitle}</title>

                <meta property="title" content={siteTitle} />

                <meta property="og:title" content={siteTitle} />

                <meta name="description" content={siteDesc} />

                <meta property="og:description" content={siteDesc} />

                <meta name="keywords" content={siteKey} />

                <link rel="icon" href="./assets/image/logo2.png" sizes="any" />

                <meta property="og:url" content="" />

                <meta property="og:site_name" content={siteTitle} />

                <meta property="og:type" content="website" />
            </head>

            <body
                className={
                    ibm_plex_sans.className + " bg-base-100 text-base-content"
                }
            >
                <Providers>{children}</Providers>

                <Analytics />
            </body>
        </html>
    )
}
