import { useEffect, useState } from "react"
import products from "../Products/products"
import ProductList from "../ProductList/productList"
const DataLoader = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)
        return () => clearTimeout(timer)
    }, []);
    return (
        <div>
        {isLoading ? (
            <p>Загрузка...</p>
        ) : (
            <ul>
                {ProductList()}
            </ul>
        )}
        </div>
    )
}
export default DataLoader