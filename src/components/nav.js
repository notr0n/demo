import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import HelpIcon from '@material-ui/icons/Help';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Grid from '@material-ui/core/Grid';





const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#151515',
        height:65,
    },
    fabButton: {
        top: -30,
        backgroundColor: 'rgb(234,205,128)',
        color: '#151515',
        borderColor:'black',
        borderWidth: 0,
        border: 'solid',
        boxShadow: '0px 5px 20px #767771'
    },
    walletcolor:{
        color: 'rgb(234,205,128)',
        fontSize:'large',
        boxShadow: '2px 5px 7px #767771'
    },
    homecolor:{
        color: 'rgb(234,205,128)',
        fontSize:'large',
        boxShadow: '-2px 5px 7px #767771'
    },
    offerbutton:{
        color: 'rgb(234,205,128)',
        boxShadow: '-2px 5px 7px #767771'
    },
    supportbutton:{
        color: 'rgb(234,205,128)',
        boxShadow: '2px 5px 7px #767771'
    }
}));


export default function BottomAppBar() {
  const classes = useStyles();
  return (
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            >



          <IconButton  className={classes.homecolor}>
            <HomeIcon />
          </IconButton>
          <IconButton  className={classes.offerbutton}>
            <CardGiftcardIcon />
          </IconButton>
          <Fab color="secondary" aria-label="add" className={classes.fabButton}>
            <AddIcon />
          </Fab>
          <IconButton className={classes.supportbutton}>
            <HelpIcon />
          </IconButton>
          <IconButton className={classes.walletcolor}>
            <AccountBalanceWalletIcon />
          </IconButton>

          </Grid>
        </Toolbar>
      </AppBar>
    );
    }