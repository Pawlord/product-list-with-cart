// Компоненты
import ProductCard from "../ProductCard/ProductCard"
import ProductsLayout from "../../layouts/ProductsLayout/ProductsLayout";

// Контекст
import { useContext, useMemo } from "react"
import { ProductsState } from "../../context/ProductsContext"

// Данные
import data from '../../../data/data.json';

export default function ProductList() {
    const { productsCart, addProduct, minusProduct } = useContext(ProductsState);

    const handleClick = (product) => {
        addProduct(product);
    }

    const handleDecrementClick = (e, product) => {
        e.stopPropagation();
        minusProduct(product)
    }

    const handleIncrementClick = (e, product) => {
        e.stopPropagation();
        addProduct(product)
    }

    const productCounts = useMemo(() => {
        const counts = {};
        productsCart.forEach(item => {
            counts[item.name] = item.count;
        });
        return counts;
    }, [productsCart]);

    return (
        <ProductsLayout>
            {
                data.map((el, i) => {
                    const count = productCounts[el.name] || 0;

                    return (
                        <ProductCard
                            key={i}
                            imgUrl={el.image.desktop}
                            name={el.name}
                            desc={el.category}
                            price={el.price}
                            handleClick={() => handleClick(el)}
                            count={count}
                            onDecrementClick={count > 0 && (e => handleDecrementClick(e, el))}
                            onIncrementClick={count > 0 && (e => handleIncrementClick(e, el))}
                        />
                    )
                }
                )
            }
        </ProductsLayout>
    )
}