import { createContext, useState } from "react";

export const ProductsState = createContext();

export const ProductsStateProvider = ({ children }) => {
    const [productsCart, setProductsCart] = useState([]);

    const addProduct = (product) => {
        setProductsCart(prevProductsCart => {
            const findProduct = prevProductsCart.find(el => el.name === product.name);

            if (findProduct) {
                // Если продукт уже есть, обновите его количество.
                return prevProductsCart.map(el =>
                    el.name === product.name ? { ...el, count: el.count + 1 } : el
                );
            } else {
                // Если продукта нет, добавьте его с количеством 1.
                return [...prevProductsCart, { ...product, count: 1 }];
            }
        });
    }

    const minusProduct = (product) => {
        setProductsCart(prevProductsCart => {
            const findProduct = prevProductsCart.find(el => el.name === product.name);

            if (findProduct) {
                // Если продукт уже есть, обновите его количество.
                return prevProductsCart.map(el =>
                    el.name === product.name ? { ...el, count: el.count - 1 } : el
                );
            }
        });
    }

    const value = {
        productsCart,
        addProduct,
        minusProduct,
    }

    return (
        <ProductsState.Provider value={value}>
            {children}
        </ProductsState.Provider>
    )
}