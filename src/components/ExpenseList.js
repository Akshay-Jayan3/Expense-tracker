import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";
import ExpenseItem from "./Expenceitem";


const ExpenseList=()=>{

    const {expenses}=useContext(AppContext);
   
    const [newlist,setNewlist]=useState([]);
    const [enterValue,setEnterValue]=useState('');
    const [showlist,setShowlist]=useState(false);


    const searchFunction=(event)=>{

        setEnterValue(event.target.value);
        if (enterValue !== '') {
            const results = expenses.filter((user) => {
              return user.name.toLowerCase().startsWith(enterValue.toLowerCase());
           
              
            });
        setShowlist(true);

        setNewlist(results);
       
             }
        
        if (event.target.value===""){
            setShowlist(false);

        }
        
        


}
    
   







    return(
        <div className="listy">
            {expenses.length!==0 && <input type="text" placeholder="Search" onChange={searchFunction}/>}
             
             
             {showlist ?  <ul className="list">
               
                
               {newlist.map((expense)=>(
                   <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
               ))}
           </ul>:<ul className="list">
                
                {expenses.map((expense)=>(
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost}/>
                ))}

            </ul>
}
           

                <hr/>


             
             <br/>
             
        </div>)
}

export default ExpenseList;