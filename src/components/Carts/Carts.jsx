// Компоненты
import EmptyCart from "../EmptyCart/EmptyCart";
import CartLayout from "../../layouts/CartLayout/CartLayout";
import CartItem from "../CartItem/CartItem";

// Контекст
import { useContext } from "react";
import { ProductsState } from "../../context/ProductsContext";

// Функции
import { formatCurrency } from "../../lib/formatCurrency";

export default function Carts({ setIsOpen }) {
    const { productsCart, totalPrice, totalCount } = useContext(ProductsState)

    if (!totalPrice) {
        return <EmptyCart />
    }

    const productItem = productsCart.map((product, i) => (
        <CartItem
            key={i}
            productName={product.name}
            count={product.count}
            price={formatCurrency(product.price)}
            totalPrice={formatCurrency(product.price * product.count)}
        />
    ))

    const handleModalOpen = () => {
        setIsOpen(true);
    }

    return (
        <CartLayout
            cartItem={productItem}
            totalPrice={formatCurrency(totalPrice)}
            totalCount={totalCount}
            handleClick={handleModalOpen}
        />
    )
}