import {extendTheme} from '@chakra-ui/react';

export const theme =  extendTheme({
    colors: {
        white: {
           "50": "#F5F8FA",
           "100": "#DADADA",
        },
        dark: {
            "900": "#47585B",
        },
        yellow: {
            "500":"#FFBA08",
        },
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
    styles: {
        global: {
            body: {
                bg: "white.50",
                color: "dark.900",
            },
        },
    },
});