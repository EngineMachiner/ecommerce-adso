import { createTheme } from "@mui/material";

export const lightTheme = createTheme( {
    
    palette: { 
        mode: 'light', primary: { main: '#1E1E1E' },
        secondary: { main: '#30D680' },
        info: { main: '#fff' }
    },

    components: {

        MuiButton: { 
            defaultProps: { 
                variant: 'contained',   size: 'small',
                disableElevation: true,
                color: 'info' 
            } 
        },

        MuiLink: { defaultProps: { underline: 'none' } },

        MuiAppBar: {
            defaultProps: {
                style: { 
                    boxShadow: 'none', 
                    backgroundColor: 'white', color: 'black' 
                }
            } 
        }

    }

} )