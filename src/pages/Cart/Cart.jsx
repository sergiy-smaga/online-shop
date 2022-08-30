import useCart from '../../redux/cartSlice';
import css from './Cart.module.css';

export default function Cart() {
  const {
    totalValue,
    handleDeleteItem,
    handleIncrease,
    handleDecrease,
    items,
    handleClearCart,
  } = useCart();

  return (
    <main>
      <h2>Cart</h2>
      <div style={{ backgroundColor: '#ddd' }} className={css.item}>
        <p>ID</p>
        <p>Item name</p>
        <div className={css.div}>
          <p>Price per 1</p>
          <p>Amount</p>
          <p>Total</p>
          <p>Delete</p>
        </div>
      </div>
      <ul style={{ padding: 0 }}>
        {items.map(({ id, price, counter, title }) => {
          return (
            <li key={id} className={css.item}>
              <p>{id}</p>
              <p>{title}</p>
              <div className={css.div}>
                <p>{price}</p>
                <button
                  className={css.button}
                  disabled={!counter}
                  onClick={() => {
                    handleDecrease(id);
                  }}
                  type="button"
                >
                  -
                </button>
                <p>{counter}</p>
                <button
                  className={css.button}
                  onClick={() => {
                    handleIncrease(id);
                  }}
                  type="button"
                >
                  +
                </button>
                <p>{(counter * price).toFixed(2)}</p>
                <button
                  type="button"
                  onClick={() => {
                    handleDeleteItem(id);
                  }}
                  className={css.button}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className={css.div}>
        <p>{`Due to pay: ${totalValue.toFixed(2)}`} </p>
        <button className={css.button} disabled>
          Pay now
        </button>
        <button onClick={handleClearCart} className={css.button}>
          Clear cart
        </button>
      </div>
    </main>
  );
}
