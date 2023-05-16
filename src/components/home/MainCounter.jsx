import { useState, useEffect } from "react"
import "./mainCounter.css";

import { GrPowerReset } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';

import 'flowbite'
import { Link } from "react-router-dom";
import CounterListPopUp from "../popup/CounterListPopUp";
import LimitPopUp from "../popup/LimitPopUp";

import Dropdown from "../dropdown/Dropdown";





const MainCounter = ({addToDo}) => {

    const [counter, setCounter] = useState(0);
    const [limit, setLimit]  = useState("");

    const [finalLimit, setFinalLimit] = useState(0);



    const handleCount = () =>{
        setCounter(counter + 1);
        navigator.vibrate(40);
        
    }


   

    const handleChange = (event) =>{
        setLimit(event.target.value);
        // setFinalLimit(event.target.value);
    }

    const handleLimit = () =>{
        setFinalLimit(limit);
        setLimit(" ");
    }

    const lapLimit = Number(finalLimit);
    console.log(counter);
    if(counter !== 0 && counter % lapLimit === 0){
        navigator.vibrate(1000);
    }

    const handleReset = () =>{
        setCounter(0);
        setFinalLimit(0);
        setLimit(0);
        
    }

  return (
    <div>
    <div className="icon-container">
    <div className="icons">


    <GrPowerReset className="add-icon" onClick={handleReset}/>
    <CounterListPopUp counter={counter} addToDo={addToDo}/>

    <Link to="/counterList">
        <HiMenu className="add-icon"/>
    </Link>
    </div>
    <div className="d-menu">
    <Dropdown color="white"/>
    </div>

    </div>
    <div className="counter-container">
    <div className="nav-container">
    <h1 className="logo-heading">Praising Counter</h1>
    {/* {finalLimit !== "" ?  : ""} */}
    
    </div>
    <div className="flex flex-row justify-center align-items-center gap-2"> 
    {/* <input type="number" className="limit-input" value={limit} onChange={handleChange}/> */}
    <p className="lap-limit">{`Lap Limit: ${finalLimit}`} </p>
    <LimitPopUp limit={finalLimit} setFinalLimit={setFinalLimit}/>
    {/* <TbEdit onClick={handleLimit}/> */}
    </div>
    <button className="counter-btn" onClick={handleCount} >
        {counter}
    </button>
    </div>

    </div>
  )
}

export default MainCounter;
