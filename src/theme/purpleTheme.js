import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const purpleTheme = createTheme({
    palette: {
        primary: {
            main: '#262254'
        },
        secondary: {
            main: '#543884'
        },
        matchone: {
            main: '#00C89B'
        },
        matchtwo: {
            main: '#00B492'
        },
        error: {
            main: red.A400
        }
    },
})


