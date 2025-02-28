// Контекст
import { ProductsStateProvider } from "../../context/ProductsContext"

// React
import { useState } from "react"

// Компоненты
import ProductList from "../ProductList/ProductList"
import Carts from "../Carts/Carts"
import ConfirmModal from "../ConfirmModal/ConfirmModal"

export default function Main() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <ProductsStateProvider>
            <ProductList />
            <Carts setIsOpen={setIsOpen} />
            {isOpen && <ConfirmModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        </ProductsStateProvider>
    )
}