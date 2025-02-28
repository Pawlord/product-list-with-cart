// Стили
import './empty-cart.scss';

// Иконки
import emptyCartIcon from '@src/icons/illustration-empty-cart.svg';

export default function EmptyCart() {
  return (
    <aside className="empty-cart">
      <h2 className="empty-cart__title">Your Cart (0)</h2>
      <img className="empty-cart__img" src={emptyCartIcon.src} alt="Empty Cart" width={150} height={150} />
      <p className="empty-cart__desc">Your added items will appear here</p>
    </aside>
  )
}
