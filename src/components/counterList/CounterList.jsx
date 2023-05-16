
import { MdDeleteForever } from "react-icons/md";
import "./counterList.css";


const counterList = ({counterList, deleteToDo}) => {

  return (
    <div className="flex flex-col items-center">
    <footer className="fixed top-0 left-0 z-20 w-full p-2.5 bg-white border-gray-200 z-10">
        <h5 className="text-gray-950 font-medium text-xl text-center">
                Counter List
        </h5>
            
    </footer>
    {/* <h3 className="mt-3 text-center fixed bg-black"> Counter List</h3> */}
      <ul className="flex flex-col items-center justify-center gap-2 px-2 mt-12 w-full mb-2">
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
