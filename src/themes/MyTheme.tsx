import { Admin, defaultTheme } from 'react-admin';
import { deepmerge } from '@mui/utils';
import { green, purple, red } from '@mui/material/colors';

const MyTheme = deepmerge(defaultTheme, {
    palette: {
        primary: green,
        secondary: purple,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Arial', 'sans-serif'].join(','),
    },
});

export default MyTheme;