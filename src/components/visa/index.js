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
import yellow from '@material-ui/core/colors/yellow';
const yellow600 = yellow[600]; 
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


const Dark = createMuiTheme({
  overrides: {
    MuiStepLabel: {
      text: {
        color: 'rgb(234,205,128)',
      },
    },
  },
});


const useStyles = makeStyles(theme => ({
      bg: {
          position: 'relative',
          height: '100vh',
          color: 'rgb(234,205,128)',
      },
      formControl: {
          position: 'absolute',
          width: 200,
          backgroundColor: '#1B1B1B',
          fontFamily: 'Cairo',
          boxShadow: '-2px 5px 7px #767771',
          borderRadius:'14px',
          transform: "translate(-50%, -50%)",
          left: '50%',
          top: '33vh',
          
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
          borderRadius:'17px'
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
  return ['کشور موردنظر را انتخاب کنید', 'مدارک مورد نظر را آپلود کنید', 'فاکتور خود را پرداخت کنید'];
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
          <MenuItem value="">
            <em>-</em>
          </MenuItem>
          <Router>
              
          <a href="/visa/china"><MenuItem value={10}>چین</MenuItem></a>
          <MenuItem value={20}>روسیه</MenuItem>
          <a href="/visa/azar"><MenuItem value={30}>آذربایجان</MenuItem></a>
          <a href="/visa/india"><MenuItem value={40}>هند</MenuItem></a>
          <a href="/visa/tiland"><MenuItem value={50}>تایلند</MenuItem></a>
          <MenuItem value={60}>اندونزی</MenuItem>
          <MenuItem value={70}>فیلیپین</MenuItem>
          <MenuItem value={80}>مالزی</MenuItem>
          <MenuItem value={90}>تایوان</MenuItem>
          <MenuItem value={100}>ازبکستان</MenuItem>
          <MenuItem value={110}>قزاقستان</MenuItem>
          <MenuItem value={120}>تاجیکستان</MenuItem>
          <MenuItem value={130}>افغانستان</MenuItem>
          <MenuItem value={140}>هنگ کنگ</MenuItem>
          <MenuItem value={150}>دبی</MenuItem>
          <MenuItem value={160}>عمان</MenuItem>
          <MenuItem value={170}>قطر</MenuItem>
          <MenuItem value={180}>لبنان</MenuItem>
          <MenuItem value={190}>سنگاپور</MenuItem>
          <MenuItem value={200}>کره جنوبی</MenuItem>
          <MenuItem value={210}>ویتنام</MenuItem>
          <MenuItem value={220}>بنگلادش</MenuItem>
          <MenuItem value={230}>بلاروس</MenuItem>
          <MenuItem value={240}>کامبروج</MenuItem>
          <MenuItem value={250}>برزیل</MenuItem>
          <MenuItem value={260}>اوکراین</MenuItem>
          <MenuItem value={270}>عراق</MenuItem>
          <MenuItem value={280}>کانادا</MenuItem>
          <MenuItem value={290}>ایتالیا</MenuItem>
          <MenuItem value={300}>اتریش</MenuItem>
          <MenuItem value={310}>هلند</MenuItem>
          <MenuItem value={320}>فرانسه</MenuItem>
          <MenuItem value={330}>آلمان</MenuItem>
          <MenuItem value={340}>استرالیا</MenuItem>
          <MenuItem value={350}>سوییس</MenuItem>
          <MenuItem value={360}>انگلیس</MenuItem>
          </Router>
        </Select>
      </FormControl>
      <ThemeProvider theme={Dark}>
         <div className={classes.root} style={{color:'rgb(234,205,128)'}}>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.a1}>
        {steps.map(label => (
          <Step key={label} style={{color:'rgb(234,205,128)'}}>
            <StepLabel style={{color:yellow600}}>{label}</StepLabel>
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
    </ThemeProvider>
          
    </center>
    </Blur>
    </div>
  );
 }

