import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    "palette":{
        "common":{
          "black":"#000",
          "white":"#fff"
        },
        "background":{
          "paper":"rgb(36, 84, 89)",
          "default":"#fafafa"
        },
        "primary":{
          "light":"#cc9999",
          "main":"#996666",
          "dark":"rgba(0, 0, 0, 1)",
          "contrastText":"#fff"
        },
        "secondary":{
          "light":"#cc9999",
          "main":"#663333",
          "dark":"rgb(36, 84, 89)",
          "contrastText":"#fff"
        },
        "error":{
          "light":"#e57373",
          "main":"#f44336",
          "dark":"#d32f2f",
          "contrastText":"#fff"
        },
        "text":{
          "primary":"rgba(0, 0, 0, 0.87)",
          "secondary":"rgba(0, 0, 0, 0.54)",
          "disabled":"rgba(0, 0, 0, 0.38)",
          "hint":"rgba(0, 0, 0, 0.38)"
        }
      },
})

export default theme