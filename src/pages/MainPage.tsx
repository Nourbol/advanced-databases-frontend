import {Catalog} from "../components/catalog/Catalog.tsx";
import {ProductPreview} from "../types/product.ts";
import {useEffect, useState} from "react";
import {searchProducts} from "../service/products.ts";
import {useNavigate} from "react-router-dom";

export const MainPage = () => {
    const [products, setProducts] = useState<ProductPreview[]>([]);
    const navigate = useNavigate();

    const handleProductClick = (product: ProductPreview) => {
        navigate(`/product/${product.id}`);
    };

    useEffect(() => {
        searchProducts().then(response => setProducts(response));
    }, []);

    return (
        <div className="page">
            <Catalog products={products} onProductClick={handleProductClick}/>
        </div>
    );
};
