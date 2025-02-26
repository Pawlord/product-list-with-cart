// Стили
import './product-card.scss';

// Компоненты
import UiButton from '../UiKit/UiButton/UiButton';

// Иконки
import CartIcon from '@public/assets/icon-add-to-cart.svg'

export function ProductCard() {
    return (
        <section className='product-item'>

            <div className="product-item__img-container">
                <img className='product-item__img' src='/assets/image-waffle-desktop.jpg' alt='Вафли' />

                <div className="product-item__btn-container">
                    <UiButton type={'productItem'} text={'Add to Cart'} ico={CartIcon} />
                </div>
            </div>

            <span className="product-item__name">Waffle</span>
            <p className="product-item__desc">Waffle with Berries</p>
            <span className="product-item__price">$6.50</span>
        </section>
    )
}