// Компоненты
import EmptyCart from "../EmptyCart/EmptyCart";
import CartLayout from "../../layouts/CartLayout/CartLayout";
import CartItem from "../CartItem/CartItem";

// Анимация
import { AnimatePresence } from "framer-motion";

// Контекст
import { useContext, useEffect, useRef } from "react";
import { ProductsState } from "../../context/ProductsContext";

// Функции
import { formatCurrency } from "../../lib/formatCurrency";

export default function Carts({ setIsOpen }) {
    const { productsCart, totalPrice, totalCount, deleteProduct, addProduct } = useContext(ProductsState)

    const scrollItemRef = useRef(null);
    const previousProductsCount = useRef(0);

    useEffect(() => {
        if (scrollItemRef.current) {
            const currentProductsCount = productsCart.length;

            if (currentProductsCount > previousProductsCount.current) {
                scrollItemRef.current.scrollTo({
                    top: scrollItemRef.current.scrollHeight,
                    behavior: 'smooth',
                });
            }

            previousProductsCount.current = currentProductsCount;

        }
    }, [productsCart])

    if (!totalPrice) {
        return <EmptyCart />
    }

    const onDeleteHandler = (name) => {
        deleteProduct(name)
    }

    const productItem =
        <AnimatePresence>
            {productsCart.map((product, i) => (
                <CartItem
                    key={i}
                    productName={product.name}
                    count={product.count}
                    price={formatCurrency(product.price)}
                    totalPrice={formatCurrency(product.price * product.count)}
                    onDeleteHandler={() => onDeleteHandler(product.name)}
                />
            ))}
        </AnimatePresence>

    const handleModalOpen = () => {
        setIsOpen(true);
    }

    return (
        <CartLayout
            cartItem={productItem}
            totalPrice={formatCurrency(totalPrice)}
            totalCount={totalCount}
            handleClick={handleModalOpen}
            scrollRef={scrollItemRef}
        />
    )
}