// Стили
import './product-card.scss';

// Компоненты
import UiButton from '../UiKit/UiButton/UiButton';

// Иконки
import CartIcon from '@public/assets/icon-add-to-cart.svg';

// Функции
import { formatCurrency } from '../../lib/formatCurrency';
import React from 'react';

function ProductCard({ imgUrl, name, desc, price, handleClick, count, onDecrementClick, onIncrementClick }) {

    const formatPrice = formatCurrency(price);

    return (
        <section className='product-item'>

            <div className="product-item__img-container">
                <img className='product-item__img' src={imgUrl} alt='Десерт' />

                <div className="product-item__btn-container">
                    {count > 0
                        ? <UiButton
                            type={'countBtn'}
                            text={count}
                            onClick={handleClick}
                            onDecrementClick={onDecrementClick}
                            onIncrementClick={onIncrementClick}
                        />
                        : <UiButton
                            type={'productItem'}
                            text={'Add to Cart'}
                            ico={CartIcon}
                            onClick={handleClick}
                        />
                    }
                </div>
            </div>

            <span className="product-item__name">{name}</span>
            <p className="product-item__desc">{desc}</p>
            <span className="product-item__price">{formatPrice}</span>
        </section>
    )
}

export default React.memo(ProductCard);