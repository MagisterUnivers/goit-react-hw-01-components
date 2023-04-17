import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = props => {
  const data = props.items;
  return (
    <div className={css.tableHolder}>
      <table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {data.map(operation => (
            <tr key={operation.id}>
              <td>{operation.type}</td>
              <td>{operation.amount}</td>
              <td>{operation.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
