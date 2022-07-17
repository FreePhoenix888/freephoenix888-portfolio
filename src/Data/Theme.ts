import {createTheme} from "@mui/material";

export const THEME = createTheme({
    palette: {
        mode: "dark",
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#fff',
        },
        text: {
            primary: '#fff',
            secondary: '#fff',
        }
    },
    typography: {
        fontFamily: [
            "Roboto Mono",
            "monospace"
        ].join(","),
        h1: {
            fontSize: "3rem",
        },
        h2: {
            fontSize: "2.5rem",
        },
        h3: {
            fontSize: "2.2rem",
        },
        h4: {
            fontSize: "1.8rem",
        },
        h5: {
            fontSize: "1.5rem",
        },
        h6: {
            fontSize: "1.3rem",
        }
    }
});
