
import {Routes, Route} from "react-router-dom";
import MainCounter from "./components/home/MainCounter"
import CounterList from "./components/counterList/CounterList";
import Settings from "./components/settings/Settings";
import { useState,useEffect } from "react";
import {v4 as uuidv4} from "uuid";
import "./app.css"
uuidv4();


const App = () => {
    const [listCounters, setListCounter] = useState([]);

    useEffect(() => {
        const counters = JSON.parse(localStorage.getItem("counters"));
        if (counters) {
          setListCounter(counters);
        }
      }, []);
    
      useEffect(() => {
        localStorage.setItem("counters", JSON.stringify(listCounters));
      }, [listCounters]);


    const addToDo = (todo, counterCount) => {

        setListCounter(
            [
                ...listCounters,
                {
                    id: uuidv4(),
                    task: todo, 
                    counter: counterCount, 
                    isEditing: false
                }
            ]);
  
    }

    const deleteToDo = (id) => {
        setListCounter(listCounters.filter((todo) => todo.id !== id));
      };

    useEffect(() => {
        console.log(listCounters);
        // console.log("Log of Local Storage");
        // console.log(localStorage.getItem("counters"));
      });

  return (
        <Routes>
            <Route path="/counterList" element={<CounterList counterList={listCounters} deleteToDo={deleteToDo} />}></Route>
            
            <Route path="/" element={<MainCounter addToDo={addToDo}/>}></Route>
            {/* <Route path="/settings" element={<Settings/>}></Route> */}
        </Routes>
  )
}

export default App;
