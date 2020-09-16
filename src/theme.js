import { createMuiTheme }  from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
          main: '#152540',
        },
        secondary: {
            main: '#E87867',
            contrastText: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Kumbh Sans, sans-serif',

        h1: {
            letterSpacing: 0,   
            fontWeight: 400,
            fontSize: 50,
            color: 'rgb(80, 82, 93)',
        },
        h4: {
            color: 'rgb(132 134 144)',
        },
        body1: {
            fontSize: 16,
            fontWeight: 300,
            color: 'rgb(80, 82, 93)',
        }
    },
    overrides: {
        MuiButton: {
            contained: {
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
            outlined: {
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            },
            label: {
                textTransform: 'none',
                paddingTop: 2,
                fontFamily: 'Roboto',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: 15,
                letterSpacing: '-0.015em',
            },
        },
    },
})
export default theme