// Стили
import './cart-layout.scss';

// Иконка
import Delivery from '../../icons/icon-carbon-neutral.svg'

// Компоненты
import UiButton from '../../components/UiKit/UiButton/UiButton';

export default function CartLayout({ totalCount, cartItem, totalPrice, handleClick, scrollRef }) {

    return (
        <div className="cart">
            <h2 className="cart__title">Your Cart ({totalCount})</h2>

            <div className="cart__item-container" ref={scrollRef}>
                {cartItem}
            </div>

            <div className="cart__confirm-order">
                <div className="total-price-info">
                    <span className="order-text">Order Total</span>
                    <h5 className="order-total-price">{totalPrice}</h5>
                </div>

                <div className="cart__confirm-order-delivery">
                    <img src={Delivery.src} alt="Delivery-icon" />
                    <p className="delivery-text">This is the <span>carboon-neutral</span> delivery</p>
                </div>

                <UiButton type={'cart'} text={'Confirm order'} onClick={handleClick} />
            </div>
        </div>
    )
}