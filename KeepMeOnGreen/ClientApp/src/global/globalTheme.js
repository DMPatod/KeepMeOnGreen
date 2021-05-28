import { createMuiTheme } from "@material-ui/core";
import { purple, yellow } from "@material-ui/core/colors";

const globalTheme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: yellow,
  },
});

export default globalTheme;