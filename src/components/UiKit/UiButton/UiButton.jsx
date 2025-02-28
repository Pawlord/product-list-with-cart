import clsx from 'clsx';

// Стили
import './UiButton.scss';

export default function UiButton({ type, text, ico, onClick, onDecrementClick, onIncrementClick, leftIcon, rightIcon }) {

    const btnType = {
        productItem: 'product-item-button',
        cart: 'cart-button',
        countBtn: 'count-button',
    }[type]

    if (type === 'countBtn') {
        return (
            <button className={clsx(btnType, 'button')}>
                <span className="ico-left-container" onClick={onDecrementClick}>
                    {leftIcon}
                </span>

                {text}

                <span className="ico-right-container" onClick={onIncrementClick}>
                    {rightIcon}
                </span>
            </button>
        )
    }

    return (
        <button
            className={clsx(btnType, 'button')}
            onClick={onClick}
        >
            {ico && <img src={ico.src} alt='Icon' />}
            {text}
        </button>
    )
}