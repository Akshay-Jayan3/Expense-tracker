import ViewBudget from "./ViewBudget";
import EditBudget from "./Edit";
import { AppContext } from "../Context/AppContext";
import { useContext, useState } from "react";


export const Budget=()=>{
    const [edit,setEdit]=useState(false);

    const {budget,dispatch}=useContext(AppContext);

    const HandleEdit=()=>{
        setEdit(true);
    }

    const HandleSave=(value)=>{
        dispatch({
			type: 'EDIT_BUDGET',
			payload: value,
		});
		setEdit(false);
    }
    


   


    return(
        <div>
            {edit?(<EditBudget HandleSave={HandleSave } budget={budget}/>):(<ViewBudget HandleEdit={HandleEdit} budget={budget}/>)}
        </div>
        
           
           
        
    )
}