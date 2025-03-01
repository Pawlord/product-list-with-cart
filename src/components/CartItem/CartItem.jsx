import clsx from "clsx";
import CrossIcon from "../../icons/cross-icon"

// Стили
import './cart-item.scss';

// Анимации
import { motion } from "framer-motion";

export default function CartItem({ type = 'cart', productName, productImage, count, price, totalPrice }) {

    if (type === 'modal') {
        return (
            <div className="cart-item">
                <div className="cart-item__info">
                    <div className="price-info">
                        <img
                            src={productImage}
                            alt="Product"
                            className="cart-item__img"
                            width={70}
                            height={70}
                            style={{ borderRadius: '20px' }}
                        />
                        <div className="product-info-container">
                            <p className='cart-item__name'>{productName}</p>
                            <span className="cart-item__count">{count}x</span>
                            <span className="cart-item__price">@{price}</span>
                        </div>
                    </div>
                    <div className='total-price-container'>
                        <span className="cart-item__total-price">{totalPrice}</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <motion.div
            className="cart-item"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
        >
            <p className='cart-item__name'>{productName}</p>
            <div className="cart-item__info">
                <div className="price-info">
                    <span className="cart-item__count">{count}x</span>
                    <span className="cart-item__price">@{price}</span>
                    <span className="cart-item__total-price">{totalPrice}</span>
                </div>
                <div className='delete-button-container'>
                    <CrossIcon />
                </div>
            </div>
        </motion.div>
    )
}