import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#4CAF50', // Custom green
        },
        secondary: {
            main: '#FF9800', // Custom orange
        },
    },
    typography: {
        fontFamily: "'Poppins', sans-serif", // Custom font
    },
});

export default theme;
