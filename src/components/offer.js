import React from 'react';
import Blur from 'react-blur';
import bgIMG from '../assets/img/offers.jpg'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import Avatar from '@material-ui/core/Avatar';
import LottieControl from './offerlottie.js'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    bg: {
        position: 'relative',
        height:1000,
        color: 'rgb(234,205,128)',
    },
    text:{
      position: 'absolute',
      color: 'rgb(234,205,128)',
      textAlign: 'center',
      top: '25%',
      left: '50%',
      transform: "translate(-50%, -50%)",
      fontFamily: 'Cairo',
      fontSize:25,
    },
    chip:{
        color: 'rgb(234,205,128)',
        borderColor: 'rgb(234,205,128)',
        fontFamily: 'Cairo',
        fontSize:22,
        marginBottom:10,
    },
    chip2:{
        backgroundColor: 'rgb(234,205,128)',
        fontFamily:'Quicksand',
        color:'white',
        fontSize:30,
    },
    bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Cairo',
    color: '#151515',
  },
  pos: {
    marginBottom: 12,
    fontFamily: 'Cairo',
  },
  root: {
    minWidth: 275,
    position :'absolute',
    textAlign: 'center',
    top: '40%',
    left: '50%',
    transform: "translate(-50%, -50%)",
    borderRadius:25,
    backgroundColor: 'rgb(234,205,128)',
    fontFamily: 'Cairo',
  },
}));

export default function Offer() {
  const classes = useStyles();
  return (
    <Blur img={bgIMG} blurRadius={12} enableStyles className={classes.bg}>
        <center>
        <br/>
        <Chip
        avatar={<Avatar className={classes.chip2}>Off</Avatar>}
        label="تخفیف های شما"
        clickable
        className={classes.chip}
        variant="outlined"
      />
        <LottieControl/>

            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    کد تخفیف
                    </Typography>
                    <Typography variant="h5" component="h2">
                    20
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                    درصد
                    </Typography>
                    <Typography variant="h5" component="h2">
                    welcome20
                    </Typography>
                </CardContent>
                </Card>

        </center>
    </Blur>
  );
}
