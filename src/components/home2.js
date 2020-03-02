import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, ThemeProvider, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BG from '../assets/img/v.jpg'
import Blur from 'react-blur'
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Logo from '../assets/img/logo.png'
import LottieControl from './homelottie.js'

const theme = createMuiTheme({
  direction: 'rtl', // Both here and <body dir="rtl">
  palette: {
    primary: {
      light: '#14ffec',
      main: '#000000',
      dark: '#ffb',
      contrastText: '#000000',
    },
    secondary: {
      light: '#14ffec',
      main: '#000000',
      dark: '#ffb',
      contrastText: '#000000',
    },
    contrastThreshold: 3,    
    tonalOffset: 0.2,
  },

 
});

const useStyles = makeStyles(theme => ({
  paper: {
    height: '100%',
    width: '100vw',
    margin: 0,
    padding: 0,
    alignItems: 'center',
    direction: 'rtl',
    position:'absolute',
    transform: "translate(-50%, -50%)",
    left:'50vw',
    top: '50vh',
  },
  bg: {
    height: '100vh',
    width: '100vw',
    margin:0,
    padding:0,
  },
  

  button: {
    width: 'calc(250px + 2vw)',
    position: 'absolute',
    borderRadius: 50,
    paddingLeft: '1vw',
    paddingRight: '1vw',
    fontSize: 'calc(16px + .2vw)',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#2c2c2c',
    color: 'white',
    fontWeight: 600,
    border: '0.05rem solid rgb(234, 205, 128)',
    transform: "translate(-50%, -50%)",
    left:'50vw',
    top: '75vh',

  },
  
  form: {
    width: 'calc(300px + .2vw)',
    direction: "rtl",
    alignContent: 'center',
    margin: '0 auto 0',
    padding: 0,    
    backgroundColor:'red',
    },
  
 
  num: {
    width: 'calc(245px + 15vw)',
    position: "absolute",
    left: '50vw',
    top: '25vh',
    textAlign: 'center',
    paddingTop: 0,
    paddingBottom: 0,
    paddingRight: 0,
    paddingLeft: 0,
    transform: "translate(-50%, -50%)",
  },
  numtwo: {
    width: 300,
    position: "absolute",
    left: '50%', 
    textAlign: 'center',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 6,
    paddingLeft: 0,
    transform: "translate(-50%, -50%)",
    marginTop: 65,
  },
  input: {
    color: 'white',
    backgroundColor: 'red',

  },
  logo: {
    width: 'calc(180px + 3.5vw)',
    position: 'absolute',
    transform: "translate(-50%, -50%)",
    left: '50%',
    top: '30%',

  },

  
}));

export default function Home() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (

    <Blur img={BG} blurRadius={0} enableStyles className={classes.bg}>
      <Container component="main">
      <ThemeProvider theme={theme}>
        <div className={classes.paper} dir="rtl">     
            
          <Grid container spacing={0}>
                <Grid item xs={12} className={classes.num}>
                <img src={Logo} alt="Visapp" className={classes.logo}></img>
                <LottieControl/>
                </Grid>
          </Grid>
        </div>
        
     </ThemeProvider>     
    </Container>
    </Blur>

    
  );
}