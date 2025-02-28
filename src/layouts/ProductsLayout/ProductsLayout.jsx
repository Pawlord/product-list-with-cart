// Стили
import './products-layout.scss';

export default function ProductsLayout({ children }) {
    return (
        <main className="products-container">
            <h1 className="products-title">Deserts</h1>
            <div className="products-grid-container">
                {children}
            </div>
        </main>
    )
}