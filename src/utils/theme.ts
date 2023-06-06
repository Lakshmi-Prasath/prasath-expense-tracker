import { Google } from "@mui/icons-material";
import { colors, createTheme } from "@mui/material";
import { light } from "@mui/material/styles/createPalette";


const customTheme = createTheme({
    palette: {
        primary: {
            main: "#ffba32"
        },
        secondary: {
            main: colors.orange[500]
        },
        info: {
            main: colors.lightBlue[500]
        }

    },



})

export default customTheme;