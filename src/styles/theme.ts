import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "900": "#181B23",
            "800": "#1f2029",
            "700": "#353646",
            "600": "#4b4d63",
            "500": "#616480",
            "400": "#797d9a",
            "300": "#9699b0",
            "200": "#b3b5c6",
            "100": "#d1d2dc",
            "50": "#eeeef2"
        },
        primary: {
            normal: "#00D954",
            hover: "#009954"
        },
        secondary: "#172EAB",
        white: "#fff",
        black: "#000",
        red: "#D90000"
    },

    fonts: {
        heading: 'Inter',
        body: 'Inter'
    },

    styles: {
        global: {
            body: {
                bg: 'gray.50',
                color: 'gray.900'
            }
        }
    }
})