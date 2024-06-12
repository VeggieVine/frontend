import { IBM_Plex_Sans } from "next/font/google"

const ibm_plex_sans = IBM_Plex_Sans({
    subsets: ["cyrillic-ext", "cyrillic", "latin-ext", "latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
})

export { ibm_plex_sans }
