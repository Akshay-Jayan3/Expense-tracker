import { useContext } from "react";
import { AppContext } from "../Context/AppContext";



export const Remaining=()=>{
    const {expenses,budget}=useContext(AppContext);
    
    
    const TotalExpense=expenses.reduce((total,item)=>total+item.cost,0);
    const RemainingExpense=budget-TotalExpense;
    if (RemainingExpense<0){
        alert("Warning!!: Your Expense reach the limit")

    }
    
 
   

    return(
        <div>{RemainingExpense<0?<h2 style={{color:"red" }}>Remaining: <span>&#8377;</span>{RemainingExpense} </h2>:<h2 style={{color:"#04AA6D" }}>Remaining: <span>&#8377;</span>{RemainingExpense} </h2>}</div>
    )
}