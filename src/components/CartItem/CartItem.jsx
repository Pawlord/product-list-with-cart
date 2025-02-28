import CrossIcon from "../../icons/cross-icon"

export default function CartItem({ productName, count, price, totalPrice }) {
    return (
        <div className="cart__item">
            <p className='cart__item-name'>{productName}</p>

            <div className="cart__item-info">
                <div className="price-info">
                    <span className="cart__item-count">{count}x</span>
                    <span className="cart__item-price">@{price}</span>
                    <span className="cart__item-total-price">{totalPrice}</span>
                </div>
                <div className="delete-button-container">
                    <CrossIcon />
                </div>
            </div>
        </div>
    )
}