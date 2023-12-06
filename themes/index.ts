import { createTheme } from "@mui/material";

export const lightTheme = createTheme( {
    
    palette: { mode: 'light', primary: { main: '#1E1E1E' } },

    components: {

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