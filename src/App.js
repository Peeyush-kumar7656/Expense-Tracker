import { Typography,makeStyles,Box} from '@material-ui/core';
import {useState} from 'react';
import './App.css';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransaction from './Components/NewTransaction';
import Transaction from './Components/Transaction';
const useStyle=makeStyles({
  header :{
    color:'blue',
    fontSize:35,
    margin:'10px 0',
    textTransform:'uppercase'
  },
  component : {
     backgroundColor:'#FFF',
     width:800,
     padding:10,
     borderRadius:20,
     display:'flex',
     '& > *':{
       width:'50%',
       padding: 10,
       height: '70vh'
     }
  }
})
function App() {
  const classes=useStyle();

  const [transactions, setTransactions] = useState([
    { id: 1, text: 'Flower', amount: -20},
    { id: 2, text: 'Salary', amount: 300},
    { id: 3, text: 'Book', amount: -10},
    { id: 4, text: 'Bonous', amount: 150 },
  ]);

  const deleteTransaction=(id)=>{
    setTransactions(transactions.filter(transaction=>transaction.id!==id));
  }

  const addTransaction = (transaction) => {
    setTransactions(transactions => [transaction, ...transactions]);
    console.log(transaction);
    console.log(transactions);
  }

  return (
    <div className="App">
      <Typography  className={classes.header}>Expense Tracker</Typography>
      <Box className={classes.component}>
      <Box>
        <Balance transactions={transactions}/>
        <ExpenseCard transactions={transactions}/>
        <NewTransaction addTransaction={addTransaction}/>
      </Box>
      <Box>
        <Transaction transactions={transactions} deleteTransaction={deleteTransaction}/>
      </Box>
      </Box>
    </div>
  );
}
export default App;
