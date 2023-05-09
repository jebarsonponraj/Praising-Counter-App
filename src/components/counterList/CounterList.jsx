import { TbEdit } from "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import "./counterList.css";

const counterList = ({counterList}) => {

  return (
    <div className="counter-list-container">
    <h3 className="counter-heading"> Counter List</h3>
      <ul className="main-list">
        <li className="list">
            <h4 className="list-name">{counterList.task}</h4>
            <div className="counterList-icons-container">
            <p>{counterList.counter}</p>
            <TbEdit />
            <MdDeleteForever/>
            </div>
        </li>
        

        
      </ul>
    </div>
  )
}

export default counterList;
