import React from 'react';
import Blur from 'react-blur';
import bgIMG from '../assets/img/homebg.jpg'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
      bg: {
          position: 'relative',
          height: '100vh',
          color: 'rgb(234,205,128)',
      },
      text: {
          position: 'absolute',
          color: '#BC9658',
          textAlign: 'center',
          top: '12%',
          left: '50%',
          transform: "translate(-50%, -50%)",
          fontFamily: 'Quicksand',
          fontSize: 22,
      },
  }));


function Support() {
    const classes = useStyles();
  return (
    <div>
      <Blur img={bgIMG} blurRadius={12} enableStyles className={classes.bg}>
        <center>
            <h2 className={classes.text}>
                برای شروع چت روی ایکون بالا سمت راست کلیک کنید
            </h2>
        </center>
      </Blur>
    </div>
  );
}

export default Support;
