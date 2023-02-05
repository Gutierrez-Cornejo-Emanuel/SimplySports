import { createTheme } from '@mui/material/styles';

export const dashboardTheme = createTheme({
    components: {
        // Name of the component
        MuiButton: {
            styleOverrides: {
            // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '1rem',
                },
            },
        },
    },
    palette: {
        primary: {
          main: '#b71c1c',
        },
        secondary: {
          main: '#ff8a80',
        },
      },
    typography: {
      h4: {
        fontWeight:'12',
        textAlign:'center'
      }
    }
    });