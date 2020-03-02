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
import HelpIcon from '@material-ui/icons/Help';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import Grid from '@material-ui/core/Grid';
import LocalActivityIcon from '@material-ui/icons/LocalActivity';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        backgroundColor: '#1B1B1B',
        height:65,
        boxShadow: '-1px -4px 12px #767771',
        borderTopLeftRadius:'17px',
        borderTopRightRadius:'17px',
    },
    fabButton: {
        top: 0,
        backgroundColor: '#BC9658',
        color: '#151515',
        borderColor:'black',
        borderRadius:10,
        borderWidth: 0,
        width:'34px',
        height:'33.9px',
        border: 'solid',
    },
    walletcolor:{
        color: 'gray',
        fontSize:'large',
    },
    homecolor:{
        color: 'gray',
        fontSize:'large',
    },
    offerbutton:{
        color: 'gray',

    },
    supportbutton:{
        color: 'gray',
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


          <Router>
                    <a href="/">
                    <IconButton  className={classes.homecolor}>
                      <HomeIcon />
                    </IconButton>
                    </a>

                    <a href="/off">
                  <IconButton  className={classes.offerbutton}>
                    <LocalActivityIcon/>
                  </IconButton>
                  </a>
                  <a href="/visa">
                  <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <AddIcon />
                  </Fab>
                  </a>
                  <a href="/support">
                  <IconButton className={classes.supportbutton}>
                    <HelpIcon />
                  </IconButton>
                  </a>
                  <a href="/wallet">
                  <IconButton className={classes.walletcolor}>
                    <AccountBalanceWalletIcon />
                  </IconButton>
                  </a>
          </Router>
          </Grid>
        </Toolbar>
      </AppBar>
    );
    }