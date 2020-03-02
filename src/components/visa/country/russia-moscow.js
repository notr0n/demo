import React from 'react';
import Blur from 'react-blur';
import bgIMG from '../../../assets/img/homebg.jpg'
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    bg: {
        position: 'relative',
        height: '100vh',
        color: 'rgb(234,205,128)',
        fontFamily: 'Cairo',
    },
    appBar: {
        backgroundColor: '#151515',
        color: 'rgb(234,205,128)',
        fontFamily: 'Cairo',
    },
    appBar2: {
        color: 'rgb(234,205,128)',
        fontFamily: 'Cairo',
    },
    formControl: {
        direction: 'rtl',
        textAlign: 'right',
        position: 'absolute',
        width: 200,
        backgroundColor: '#1B1B1B',
        fontFamily: 'Cairo',
        boxShadow: '-2px 5px 7px #767771',
        borderRadius: '14px',
        transform: "translate(-50%, -50%)",
        left: '50%',
        top: '50vh',

    },
    text: {
        transform: "translate(-50%, -50%)",
        position: 'absolute',
        top: '30vh',
        left: '50%',
        fontSize: '4.6vw',
        textAlign: 'justifyRight',
    },
    country: {
        transform: "translate(-50%, -50%)",
        position: 'absolute',
        top: '15vh',
        left: '50%',
        fontSize: '6vw',
        fontWeight: '900',
        textAlign: 'justifyRight',
    },
    menuitem: {
        fontSize: '4.5vw',
    }
}));

//Visa Component
function Visa2() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = event => {setAge(event.target.value);
    };
}

export default function Russiaone() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = event => {
        setAge(event.target.value);
    };
    return ( <Blur img = {bgIMG}
                   blurRadius = {12}
                   enableStyles className = {classes.bg} >
        <center >
        <p className = {classes.country} > روسیه (موسکو) </p>
        <p className = {classes.text} > لطفا نوع ویزای مورد نظر خود را انتخاب کنید </p>
        <FormControl variant = "filled" className = {classes.formControl}>
        <InputLabel id = "demo-simple-select-filled-label" > نوع ویزا </InputLabel>
        <Select labelId = "demo-simple-select-filled-label" id = "demo-simple-select-filled" value = {age}
        onChange = {handleChange}>
        <MenuItem value = "" className = {classes.menuitem} > < em > توریستی طبق بیلیط </em></MenuItem >
        <MenuItem value = "" className = {classes.menuitem} > < em > توریستی فوری طبق بیلیط </em></MenuItem >
        <MenuItem value = "" className = {classes.menuitem} > < em > یک ماهه تجاری عادی </em></MenuItem >
        <MenuItem value = "" className = {classes.menuitem} > < em > یک ماهه تجاری فوری </em></MenuItem >
        <MenuItem value = "" className = {classes.menuitem} > < em > سه ماهه تجاری عادی </em></MenuItem >
        < MenuItem value = "" className = {classes.menuitem} > < em > سه ماهه تجاری فوری </em></MenuItem >
        < MenuItem value = "" className = {classes.menuitem} > < em > سه ماهه تجاری دبل عادی </em></MenuItem >
        < MenuItem value = "" className = {classes.menuitem} > < em > سه ماهه تجاری دبل فوری </em></MenuItem >
        < MenuItem value = "" className = {classes.menuitem} > < em > یک ساله مولتی پل </em></MenuItem >
        < MenuItem value = "" className = {classes.menuitem} > < em > یک ساله مولتی پل فوری </em></MenuItem >
        < MenuItem value = "" className = {classes.menuitem} > < em > یک ساله مولتی پل تاپ ارجنت< /em></MenuItem >
        </Select>
        </FormControl>
        </center>
        </Blur>
    );
}


function china1() {
    return ( <div > Hi </div>);
}

function china2() {
    return ( <div >Hello </div>
    );
}