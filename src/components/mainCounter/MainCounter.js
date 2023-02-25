import { useState } from "react"
import "./mainCounter.css";
import { GrAddCircle } from 'react-icons/gr';
import { GrPowerReset } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';




const MainCounter = () => {

    const [counter, setCounter] = useState(0);
    const [limit, setLimit]  = useState(" ");

    const [finalLimit, setFinalLimit] = useState(" ");



    const handleCount = () =>{
        setCounter(counter + 1);
        navigator.vibrate(40);
        
    }




    const handleChange = (event) =>{
        setLimit(event.target.value);
        setFinalLimit(event.target.value);
    }

    const handleLimit = () =>{
        setFinalLimit(limit);
        setLimit(" ");
    }

    const lapLimit = Number(finalLimit);
    console.log(lapLimit);
    if(counter !== 0 && counter % lapLimit === 0){
        navigator.vibrate(1000);
    }

    const handleReset = () =>{
        setCounter(0);
        
    }

  return (
    <div>
    <div className="icon-container">
    <GrPowerReset className="add-icon" onClick={handleReset}/>
    <GrAddCircle className="add-icon"/>
    <HiMenu className="add-icon"/>

    

    </div>
    <div className="counter-container">
    <div className="nav-container">
    <h1 className="logo-heading">Praising Counter</h1>
    </div>
    <div>
    <input type="number" className="limit-input" value={limit} onChange={handleChange}/>
    <button onClick={handleLimit}>Set Limit</button>
    </div>
    <button className="counter-btn" onClick={handleCount} >{counter}</button>
    </div>
    </div>
  )
}

export default MainCounter
