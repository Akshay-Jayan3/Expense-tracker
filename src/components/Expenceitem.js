import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const ExpenseItem=(props)=>{
    const {dispatch}=useContext(AppContext);
   


    const HandleDelete=()=>{
        dispatch({
            type:"DELETE_EXPENSE",
            payload:props.id
        })
    }
    return(
        <div>
       
      
        
       

    
        <li>
            <p>{props.name}</p>
            <p><span>&#8377;</span>{props.cost}</p>
            <button id="delete" onClick={HandleDelete}>Delete</button>

        </li>
        </div>
    )
}
export default ExpenseItem;