
import './App.css';
import { Budget } from './components/Budget';
import { Remaining } from './components/Remaing';
import { TotalExpense } from './components/TotalExpense';
import AddExpense from './components/AddExpense';
import { AppProvider } from './Context/AppContext';
import ExpenseList from './components/ExpenseList';


function App() {
  return (


    <AppProvider>
      <div className="App">
      <div className='container'>
        <div className='top'>
        <h1 id="heading">Expense Tracker</h1>
        <div className='display'>
          <div className='budget'> <Budget/></div>
          <div className='Remaining'> <Remaining/></div>
          <div className='Totalexpense'><TotalExpense/></div>
        </div>
        
         
          
          


        
        
        </div>
        <div className='bottom'>
          <div className='Addexpense'> <AddExpense/></div>
          <div className='expense'><ExpenseList/>
          </div>
       
        
        </div>
      </div>
    </div> 

    </AppProvider>
    
  );
}

export default App;
