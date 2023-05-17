
import { MdDeleteForever } from "react-icons/md";
import "./counterList.css";
import neuBack from "../../assets/neuBack.svg";
import { Link } from "react-router-dom";


const counterList = ({counterList, deleteToDo}) => {

  return (
    <div className="flex flex-col items-center">
    <header className="flex items-center gap-14 fixed top-0 left-0 w-full p-2.5 bg-white counterHeader">
    <Link to="/">
    <img src={neuBack} alt="back-btn" />
    </Link>
        <h5 className="text-tealish-blue font-medium text-2xl text-center mb-1 font-satoshi">
                Counter List
        </h5>
            
    </header>

      <ul className="flex flex-col items-center justify-center gap-2 px-2 mt-16 w-full mb-2">
      {counterList.map((counters) =>(
        <li className="flex items-center justify-between gap-28 h-14 border-2 border-black rounded w-full px-2" key={counters.id}>
            <h4 className="text-xl">{counters.task}</h4>
            <div className="flex content-center items-center gap-2">
            <p className="text-xl">{counters.counter}</p>
            <MdDeleteForever className="text-2xl" onClick={() => deleteToDo(counters.id)}/>
            </div>
        </li>
      ))}

        

        
      </ul>
    </div>
  )
}

export default counterList;
