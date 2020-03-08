import React from 'react';
import Blur from 'react-blur';
import bgIMG from '../../assets/img/homebg.jpg'
import visaIMG from '../../assets/img/visa.png'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
//Child Components
import China from './country/china.js'
import Azar from './country/azarbayejan.js'
import India from './country/india.js'
import Tiland from './country/tiland.js'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
      bg: {
          position: 'relative',
          height: '100vh',
          color: 'rgb(234,205,128)',
      },
      formControl: {
          color: 'red',
          position: 'absolute',
          width: 200,
          backgroundColor: '#1B1B1B',
          fontFamily: 'Cairo',
          boxShadow: '-2px 5px 7px #767771',
          borderRadius:'14px',
          transform: "translate(-50%, -50%)",
          left: '50%',
          top: '33vh',
          textAlign: 'right',
          direction: 'rtl',
          
      },
      step:{
          color: 'rgb(234,205,128)',

      },
      selectEmpty: {
          marginTop: theme.spacing(2),
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
      a1: {
          color: 'rgb(234,205,128)',
          backgroundColor: '#1B1B1B',
          fontFamily: 'Cairo',
          borderWidth: '5',
          borderStyle: 'solid',
          boxShadow: '-2px 5px 7px #767771',
          borderRadius:'24px',
          marginTop:'26%',
          paddingBottom:5
      },
      text2: {
          position: 'absolute',
          color: 'rgb(234,205,128)',
          textAlign: 'center',
          top: '15%',
          left: '50%',
          transform: "translate(-50%, -50%)",
          fontFamily: 'Quicksand',
          fontSize: 25,
      },
      IMG: {
          position: 'absolute',
          width: 150,
          top: '33%',
          left: '50%',
          transform: "translate(-50%, -50%)",
          
      },
      chip: {
          color: '#BC9658',
          borderColor: 'rgb(234,205,128)',
          fontFamily: 'Cairo',
          fontSize: 22,
          marginTop: 15,
          borderRadius: 15,
          
      },
      chip2: {
          backgroundColor: 'rgb(234,205,128)',
          fontFamily: 'Quicksand',
          color: 'white',
          fontSize: 30,
          minWidth: 30,
          

      },
      root: {
          position: 'absolute',
          width: '80%',
          height: '10%',
          marginTop: 50,
          transform: "translate(-50%, -50%)",
          top: '33%',
          left: '50%',
          

      },
      backButton: {
          marginRight: theme.spacing(1),
          color: 'rgb(234, 205, 128)',
          borderColor: 'rgb(234, 205, 128)',
          fontFamily: 'Cairo',
          
      },
      instructions: {
          marginTop: theme.spacing(1),
          marginBottom: theme.spacing(1),
          
      },
      Btn: {
          backgroundColor: 'rgb(234, 205, 128)',
          color: '#151515',
          fontFamily: 'Cairo',
          marginTop: '10',
          borderRadius:'17px'
          
      },
      Btn2: {
          color: 'rgb(234, 205, 128)',
          borderColor: 'rgb(234, 205, 128)',
          fontFamily: 'Cairo',
          borderRadius:'17px',
      },
      menuitem: {
        backgroundColor: '#1B1B1B',
        color:'rgb(234,205,128)',
        textAlign: 'center',
        direction: 'rtl',
      }
  }));



//Routes to child
export default function Visa(){
    return(
        <Router>
            <Switch>
                <Route exact path="/visa">
                    <Visa2/>
                </Route>
                <Route path="/visa/china">
                    <China/>
                </Route>
                <Route path="/visa/azar">
                    <Azar/>
                </Route>
                <Route path="/visa/india">
                    <India/>
                </Route>
                <Route path="/visa/tiland">
                    <Tiland/>
                </Route>
              </Switch>
        </Router>
    );
}


//Visa Component
function Visa2() {

  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };
function getSteps() {
  return [
    <span style={{color:'rgb(234,205,128)', textAlign:'center'}}>کشور موردنظر را انتخاب کنید</span>
    , 
    <span style={{color:'rgb(234,205,128)', textAlign:'center'}}>مدارک مورد نظر را آپلود کنید</span>
    ,
    <span style={{color:'rgb(234,205,128)', textAlign:'center'}}>فاکتور خود را پرداخت کنید</span>
  ];
}
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  
  return (
    <div>
    <Blur img={bgIMG} blurRadius={12} enableStyles className={classes.bg}>
        <center>
            <Chip
                avatar={<Avatar className={classes.chip2}>VISA</Avatar>}
                label="درخواست رزرو ویزا"
                clickable
                className={classes.chip}
                variant="outlined"
            />
            <img src={visaIMG} className={classes.IMG}/>
            <h2 className={classes.text}>کشوری که از آن ویزا میخواهم</h2>

            <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label" style={{color:'rgb(234,205,128)'}} >انتخاب کنید</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="" style={{backgroundColor:'#1B1B1B'}}>
            <em className={classes.menuitem}></em>
          </MenuItem>
          <Router>
              
          <a href="/visa/china" style={{textDecoration:'none', }}><MenuItem value={10} className={classes.menuitem}>چین</MenuItem></a>
          <MenuItem value={20} className={classes.menuitem}>روسیه</MenuItem>
          <a href="/visa/azar" style={{textDecoration:'none', }}><MenuItem value={30} className={classes.menuitem}>آذربایجان</MenuItem></a>
          <a href="/visa/india" style={{textDecoration:'none', }}><MenuItem value={40} className={classes.menuitem}>هند</MenuItem></a>
          <a href="/visa/tiland" style={{textDecoration:'none', }}><MenuItem value={50} className={classes.menuitem}>تایلند</MenuItem></a>
          <MenuItem value={60} className={classes.menuitem}>اندونزی</MenuItem>
          <MenuItem value={70} className={classes.menuitem}>فیلیپین</MenuItem>
          <MenuItem value={80} className={classes.menuitem}>مالزی</MenuItem>
          <MenuItem value={90} className={classes.menuitem}>تایوان</MenuItem>
          <MenuItem value={100} className={classes.menuitem}>ازبکستان</MenuItem>
          <MenuItem value={110} className={classes.menuitem}>قزاقستان</MenuItem>
          <MenuItem value={120} className={classes.menuitem}>تاجیکستان</MenuItem>
          <MenuItem value={130} className={classes.menuitem}>افغانستان</MenuItem>
          <MenuItem value={140} className={classes.menuitem}>هنگ کنگ</MenuItem>
          <MenuItem value={150} className={classes.menuitem}>دبی</MenuItem>
          <MenuItem value={160} className={classes.menuitem}>عمان</MenuItem>
          <MenuItem value={170} className={classes.menuitem}>قطر</MenuItem>
          <MenuItem value={180} className={classes.menuitem}>لبنان</MenuItem>
          <MenuItem value={190} className={classes.menuitem}>سنگاپور</MenuItem>
          <MenuItem value={200} className={classes.menuitem}>کره جنوبی</MenuItem>
          <MenuItem value={210} className={classes.menuitem}>ویتنام</MenuItem>
          <MenuItem value={220} className={classes.menuitem}>بنگلادش</MenuItem>
          <MenuItem value={230} className={classes.menuitem}>بلاروس</MenuItem>
          <MenuItem value={240} className={classes.menuitem}>کامبروج</MenuItem>
          <MenuItem value={250} className={classes.menuitem}>برزیل</MenuItem>
          <MenuItem value={260} className={classes.menuitem}>اوکراین</MenuItem>
          <MenuItem value={270} className={classes.menuitem}>عراق</MenuItem>
          <MenuItem value={280} className={classes.menuitem}>کانادا</MenuItem>
          <MenuItem value={290} className={classes.menuitem}>ایتالیا</MenuItem>
          <MenuItem value={300} className={classes.menuitem}>اتریش</MenuItem>
          <MenuItem value={310} className={classes.menuitem}>هلند</MenuItem>
          <MenuItem value={320} className={classes.menuitem}>فرانسه</MenuItem>
          <MenuItem value={330} className={classes.menuitem}>آلمان</MenuItem>
          <MenuItem value={340} className={classes.menuitem}>استرالیا</MenuItem>
          <MenuItem value={350} className={classes.menuitem}>سوییس</MenuItem>
          <MenuItem value={360} className={classes.menuitem}>انگلیس</MenuItem>
          </Router>
        </Select>
      </FormControl>
         <div className={classes.root} style={{color:'rgb(234,205,128)'}}>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.a1}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel classes={{
              labelContainer : classes.step
            }} >{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>به همین سادگی</Typography>
          </div>
        ) : (
          <div>
              <br/>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                قبلی
              </Button>
              <Button className={classes.Btn} variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'همین' : 'بعدی'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
          
    </center>
    </Blur>
    </div>
  );
 }

