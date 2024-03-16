import { format } from 'date-fns';
import style from './CryptoHistory.module.css';

export const CryptoHistory = ({ items }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, price, amount, date }, idx) => {
          return (
            <tr key={id} className={style.tr}>
              <td className={style.td}>{idx + 1}</td>
              <td className={style.td}>{Math.round(price)}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{format(new Date(date), 'Pp')}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
