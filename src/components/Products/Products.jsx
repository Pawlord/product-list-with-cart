// Контекст
import { ProductsStateProvider } from "../../context/ProductsContext";

// Компоненты
import ProductList from "../ProductList/ProductList";

export default function Products({ productsList }) {
    return (
        <ProductsStateProvider>
            <ProductList productsList={productsList} />
        </ProductsStateProvider>
    )
}