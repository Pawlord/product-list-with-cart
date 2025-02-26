import clsx from 'clsx';

// Стили
import './UiButton.scss';


export default function UiButton({ type, text, ico }) {
    const btnType = {
        productItem: 'product-item-button',
        cart: 'cart-button'
    }[type]

    return (
        <button className={clsx(btnType)}>{ico && <img src={ico.src} alt='Icon' />}{text}</button>
    )
}