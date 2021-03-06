import { ListItemIcon, makeStyles,ListItem,ListItemText} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles({
    list: {
        marginTop:10,
        border:'1px solid #F6F6F6'
    }
})
const Transactions = ({transaction,deleteTransaction}) => {
    const classes=useStyle();
    const color=transaction.amount >=0 ? 'Green' : 'Red';
    const sign=transaction.amount >=0 ? '₹' : '-₹';
    const amount= sign + Math.abs(transaction.amount);
    return (
     <ListItem className={classes.list} style={{backgroundColor:`${color}`, color :'FFF'}}>
     <ListItemIcon>
         <DeleteIcon onClick={()=>deleteTransaction(transaction.id)}/>
     </ListItemIcon>
         <ListItemText primary={transaction.text}/>
         <ListItemText primary={amount}/>
     </ListItem>
    )
}
export default Transactions
