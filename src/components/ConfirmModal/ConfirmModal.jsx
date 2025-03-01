// Стили
import './confirm-modal.scss';

// Иконки
import CompleteIcon from '@src/icons/icon-order-confirmed.svg'

// Компоненты
import CartItem from '../CartItem/CartItem';

// React
import { useRef, useEffect, useContext } from 'react';

// Функции
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { formatCurrency } from '../../lib/formatCurrency';

// Контекст
import { ProductsState } from '../../context/ProductsContext';
import UiButton from '../UiKit/UiButton/UiButton';

export default function ConfirmModal({ isOpen, setIsOpen }) {
    const { productsCart, totalPrice, clearProductsCart } = useContext(ProductsState);

    const modalRef = useRef(null);

    const handleClear = e => {
        e.stopPropagation();
        clearProductsCart();
        setIsOpen(false);
    }

    useEffect(() => {
        if (isOpen) {
            disableBodyScroll(modalRef.current)
        } else {
            enableBodyScroll(modalRef.current)
        }

        return () => clearAllBodyScrollLocks()
    }, [isOpen])

    return (
        <div className="modal-overlay" ref={modalRef} onClick={() => setIsOpen(false)}>
            <div className="modal">
                <img src={CompleteIcon.src} alt="Confirmed icon" width={60} height={60} />
                <h2 className='modal__title'>Order Confirmed</h2>
                <p className="modal__subtitle">We hope you enjoy your food!</p>

                <div className="modal__cart-info-container">
                    <div className="cart-items-container">
                        {
                            productsCart.map((product, i) => (
                                <CartItem
                                    key={i}
                                    type='modal'
                                    productName={product.name}
                                    productImage={product.image.desktop}
                                    count={product.count}
                                    price={formatCurrency(product.price)}
                                    totalPrice={formatCurrency(product.count * product.price)}
                                />
                            ))
                        }
                    </div>

                    <div className="order-total">
                        <p className="order-total__text">Order Total</p>
                        <h4>{formatCurrency(totalPrice)}</h4>
                    </div>
                </div>

                <UiButton type={'cart'} text={'Start New Order'} onClick={e => handleClear(e)} />
            </div>
        </div>
    )
}