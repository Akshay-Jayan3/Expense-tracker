const ViewBudget=(props)=>{
    return (
        <div>
        <h2><span>&#8377;</span>{props.budget}</h2>
        <button id="edit" onClick={props.HandleEdit}>Enter your budget</button>
    
        </div>)
        
}
export default ViewBudget;