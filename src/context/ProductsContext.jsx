import { createContext, useState, useMemo } from "react";

export const ProductsState = createContext();

export const ProductsStateProvider = ({ children }) => {
    const [productsCart, setProductsCart] = useState([]);

    const addProduct = (product) => {
        setProductsCart(prevProductsCart => {
            const findProduct = prevProductsCart.find(el => el.name === product.name);

            if (findProduct) {
                return prevProductsCart.map(el =>
                    el.name === product.name ? { ...el, count: el.count + 1 } : el
                );
            } else {
                return [...prevProductsCart, { ...product, count: 1 }];
            }
        });
    }

    const minusProduct = (product) => {
        setProductsCart(prevProductsCart => {
            const findProduct = prevProductsCart.find(el => el.name === product.name);

            if (findProduct) {
                const updatedCart = prevProductsCart.map(el => {
                    if (el.name === product.name) {
                        const newCount = el.count - 1;
                        return { ...el, count: newCount }
                    }
                    return el;
                }).filter(item => item.count !== 0);
                return updatedCart;
            }

            return prevProductsCart;
        });
    }

    const deleteProduct = (name) => {
        setProductsCart(prevProducts => prevProducts.filter(product => product.name !== name));
    }

    const clearProductsCart = () => setProductsCart([]);

    const cartSummary = useMemo(() => {
        return productsCart.reduce(
            (acc, item) => {
                acc.totalPrice += item.count * item.price;
                acc.totalCount += item.count;
                return acc;
            },
            { totalPrice: 0, totalCount: 0 }
        );
    }, [productsCart]);

    const value = {
        productsCart,
        addProduct,
        minusProduct,
        clearProductsCart,
        deleteProduct,
        ...cartSummary,
    }

    return (
        <ProductsState.Provider value={value}>
            {children}
        </ProductsState.Provider>
    )
}