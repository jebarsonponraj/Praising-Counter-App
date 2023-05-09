
import {Routes, Route} from "react-router-dom";
import MainCounter from "./components/home/MainCounter"
import CounterList from "./components/counterList/CounterList";
import { useState,useEffect } from "react";
import {v4 as uuidv4} from "uuid";
uuidv4();


const App = () => {
    const [listCounters, setListCounter] = useState([]);


    const addToDo = (todo, counterCount) => {

        setListCounter([...listCounters,{id: uuidv4(), task: todo, counter: counterCount, isEditing: false}]);
        console.log(listCounters);
    }

    useEffect(() => {
        // console.log(listCounter);
      }, [listCounters]);

  return (
        <Routes>
        {listCounters.map((list, index, count)=>(
            <Route path="/counterList" element={<CounterList counterList={list} key={index} count={count} />}></Route>
        ))}
            
            <Route path="/" element={<MainCounter addToDo={addToDo}/>}></Route>
        </Routes>
  )
}

export default App;
