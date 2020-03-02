import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, ThemeProvider, withTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BG from '../assets/img/v.jpg'
import Blur from 'react-blur'
import CheckCircleOutlinedIcon from '@material-ui/icons/CheckCircleOutlined';
import InputBase from '@material-ui/core/InputBase';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


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
    width: '100%',
    left:0,
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    direction: 'rtl',
    position: 'absolute',

  },
  bg: {
    height: '100vh',
    margin:0,
    padding:0,
    position: 'relative',
  },
  

  button: {
    borderRadius: 50,
    paddingLeft: '15%',
    paddingRight: '15%',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: '180%',
    textAlign: 'center',
    verticalAlign: 'middle',
    backgroundColor: '#2c2c2c',
    color: 'white',
    marginTop: "85%",
    marginRight: '22%',
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 600,
    
  },
  
  form: {
    height: 100,
    width: 300,
    direction: "rtl",
    position: 'absolute',
    alignContent: 'center',
    transform: "translate(-50%, -50%)",
    top: '40%',
    left: '50%',
    margin: 0,
    padding: 0,
    },
  
 
  num: {
    width: '100%',
    position: "absolute",
    left: '50%', 
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

  
}));

export default function Wallet() {
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
      <Container component="main" maxWidth="xs" >
      <ThemeProvider theme={theme}>
        <div className={classes.paper} dir="rtl">     
            
          <Grid container spacing={0} maxWidth="xs">
          <form className={classes.form} noValidate>
              
              <Grid item xs={12} className={classes.num}>
                <Grid item style={{color: 'white', padding: 15,  backgroundColor: '#2c2c2c', borderRadius: 10, height:'calc(190px + 2vw)', border: '0.05rem solid rgb(234, 205, 128)'}}>
                    <Grid item style={{ float: 'right', textAlign: "justify", fontSize: 'calc(18px + .3vw)',}}>
                    <p>
                        موضوع:
                    </p> <p>
                        تاریخ:
                    </p> <p>
                        قیمت:
                    </p>
                    </Grid>
                    <Grid item style={{ float: 'left', textAlign: "justify", fontSize: 'calc(18px + .3vw)',}}>
                    <p>
                        فاکتور پرداخت
                    </p> <p>
                        25 / 12 / 98
                    </p> <p>
                        000'000'40 (ریال)
                    </p>
                    </Grid>
                    
                </Grid>
                <div>
      
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                  <DialogTitle id="form-dialog-title">کد تخفیف دارید؟</DialogTitle>
                  <DialogContent>
                    <DialogContentText>
                      مبلغ: 000'000'40 (ریال)
                    </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      id="coupon"
                      label="ثبت کد تخفیف"
                      type="email"
                      fullWidth
                      style={{textAlign: "right", direction: 'ltr'}}
                    />
                </DialogContent>
                <DialogActions>                  
                    <Button onClick={handleClose} style={{color: 'white', backgroundColor: '#2c2c2c', borderRadius: 4,}}>
                      پرداخت
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
              </Grid>
              <Grid item xs={12}>

                      <Button
                        variant="contained"
                        className={classes.button}
                        onClick={handleClickOpen}
                        >پرداخت</Button>
                  
              </Grid>
            </form>
            <div style={{ position: 'absolute', background: 'rgba(0,0,0,0.2)', color: '#fff', width: '100%', height: '9%',  transform: "translate(-50%, -50%)", left: '50%', bottom: '-4.5%', textAlign: "center", margin: 0,}}>
                <p style={{lineHeight: '7vh', fontSize: '90%',}}>Rose Mark © 2020</p>
            </div> 
          </Grid>
          
          
        </div>
        
     </ThemeProvider>     
    </Container>
    </Blur>

    
  );
}
