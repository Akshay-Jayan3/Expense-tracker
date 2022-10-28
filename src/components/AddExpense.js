import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

const AddExpense=()=>{
    const {expenses,dispatch,budget}=useContext(AppContext);

    const [name,setName]=useState("");
    const [cost,setCost]=useState("");
    
      
    


    const HandleSubmit=(event)=>{
        
        event.preventDefault();
        const expense={
            id: expenses.length === 0 ? 1 : expenses[expenses.length - 1].id + 1,
            name:name,
            cost:parseInt(cost)
        }

        dispatch({
            type:'ADD_EXPENSE',
            payload:expense
        })
        setName('');
        setCost('')

        

    }
    return(
        <div className="Add">
            {budget!==0 && <form onSubmit={HandleSubmit}>
            <label for="name">
            Enter Transaction:
            <input type="text" value={name} required  id="name" onChange={(event)=>setName(event.target.value)}/>
            </label>
            
            <br/>
            <label for="cost">
                <br/>
            Enter Cost:
            <input type="number"  value={cost} required  id="cost"  onChange={(event)=>setCost(event.target.value)}/>
            </label>
            <br/>
            <br/>
            <button  id="Add" type="submit">ADD</button>
            
                
            </form>}
            
            
        </div>
    )
}

export default AddExpense