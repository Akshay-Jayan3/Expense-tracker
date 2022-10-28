import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
export const TotalExpense=()=>{
    const {expenses}=useContext(AppContext);
    const TotalExpense=expenses.reduce((total,item)=>total+item.cost,0)
    return(
        <div><h2>Total Expenses: <span>&#8377;</span>{TotalExpense}</h2></div>
    )
}