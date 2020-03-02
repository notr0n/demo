import React from 'react';
import Blur from 'react-blur';
import bgIMG from '../assets/img/homebg.jpg'
import { makeStyles } from '@material-ui/core/styles';
import LottieControl from './homelottie.js'

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
    text2:{
      position: 'absolute',
      color: 'rgb(234,205,128)',
      textAlign: 'center',
      top: '30%',
      left: '50%',
      transform: "translate(-50%, -50%)",
      fontFamily: 'Lobster',
      fontSize:48,
      textShadow: '0px 5px 12px #464743'
    },
    text3:{
      position: 'absolute',
      color: 'white',
      textAlign: 'center',
      top: '40%',
      left: '50%',
      transform: "translate(-50%, -50%)",
      fontFamily: 'Quicksand',
      fontSize:18,
      textShadow: '2px 4px 5px rgb(234,205,128)'
    }
  }
)
);

export default function Home() {
  const classes = useStyles();
  return (
    <Blur img={bgIMG} blurRadius={12} enableStyles className={classes.bg}>
        <center>
          <LottieControl/>
          <h2 className={classes.text}>زمان شما طلاست</h2>
          <h2 className={classes.text2}>Arad724</h2>
          <h2 className={classes.text3}>Rose Mark (c) 2020</h2>
        </center>
    </Blur>
  );
}
