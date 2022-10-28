import { useState } from "react";

const EditBudget=(props)=>{
    const [newBudget,setNewbudget]=useState(props.budget)
    
    return(
        <div>
           
            <input type="number"  id= "saveinput" onChange={(event)=>setNewbudget(event.target.value)}/>
            <br/>
            <button  id ="save"onClick={()=>props.HandleSave(newBudget)}>Save</button>
          
          
        </div>
    )

}
export default EditBudget;