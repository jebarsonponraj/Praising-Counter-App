import { useState, useEffect } from "react"
import "./mainCounter.css";

import neu_btn from "../../assets/neu_btn.svg";
import neu_Menu from "../../assets/neuMenu.svg";
import neu_Reset from "../../assets/neuReset.svg";
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
    }

    const handleLimit = () =>{
        setFinalLimit(limit);
        setLimit(" ");
    }

    const lapLimit = Number(finalLimit);

    if(counter !== 0 && counter % lapLimit === 0){
        navigator.vibrate(1000);
    }

    const handleReset = () =>{
        setCounter(0);
        setFinalLimit(0);
        setLimit(0);
        
    }
    
    return (
    <div className="lg:w-1/2 m-auto">
      <h1 className="text-tealish-blue text-2xl p-2 font-inter font-medium text-center">Praising Counter</h1>
    <div className="icon-container flex lg:justify-center lg:justify-items-center">
    <div className="icons">


    <img src={neu_Reset} alt="reset-button" onClick={handleReset}/>
    <CounterListPopUp counter={counter} addToDo={addToDo}/>

    <Link to="/counterList">
        <img src={neu_Menu} alt="menu-button"/>
    </Link>
    </div>
    {/* <div className="d-menu">
    <Dropdown color="white"/>
    </div> */}

    </div>
    <div className="counter-container">
    <div className="nav-container">

    
    </div>
    <div className="flex flex-row justify-center align-items-center gap-2"> 

    <p className="lap-limit">{`Lap Limit: ${finalLimit}`} </p>
    <LimitPopUp limit={finalLimit} setFinalLimit={setFinalLimit}/>

    </div>
    <button  onClick={handleCount} className="relative flex justify-center items-center" >
        <h3 className="text-7xl font-semibold text-tealish-blue font-inter absolute">{counter}</h3>
        <img src={neu_btn} className="w-96 h-96" alt="Btn" />
        
    </button>
    </div>

    </div>
  )
}

export default MainCounter;
