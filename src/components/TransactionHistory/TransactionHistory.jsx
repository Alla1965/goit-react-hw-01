import transactions from "../transactions/transactions.json";
import styles from "../TransactionHistory/TransactionHistory.module.css"; //

export default function TransactionHistory({items}) {
     return (
                <table className={styles.TransTable}>
  <thead className={styles.TransTableHead}>
    <tr>
      <th className={styles.TransTableHeadItem}>Type</th>
      <th className={styles.TransTableHeadItem}>Amount</th>
      <th className={styles.TransTableHeadItem}>Currency</th>
    </tr>
  </thead>

             <tbody className={styles.TransTableBody}>
                 {items.map(item => (
                     <tr key={item.id} className={styles.TransTableBodyItem}>
                         <td className={`${styles.TransTableBodyItemColumn} ${styles.TransTableBodyItemFirst}`}>{item.type}</td>
                         <td className={styles.TransTableBodyItemColumn}>{item.amount}</td>
                         <td className={styles.TransTableBodyItemColumn}>{item.currency}</td>
                          </tr> 
                 ))}
    
  </tbody>
</table>
        
    );

}
