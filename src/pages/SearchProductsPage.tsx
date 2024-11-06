import {Catalog} from "../components/catalog/Catalog.tsx";
import {useEffect, useState} from "react";
import {ProductPreview} from "../types/product.ts";
import {useNavigate, useSearchParams} from "react-router-dom";
import {searchProducts} from "../service/products.ts";

export const SearchProductsPage = () => {
    const [products, setProducts] = useState<ProductPreview[]>([]);
    const navigate = useNavigate();
    const [parameters] = useSearchParams();

    const handleProductClick = (product: ProductPreview) => {
        navigate(`/product/${product.id}`);
    };

    useEffect(() => {
        const query = parameters.get('query');
        searchProducts(query || undefined).then(response => setProducts(response));
    }, [parameters]);

    return (
        <div className="page">
            <Catalog products={products} onProductClick={handleProductClick}/>
        </div>
    );
};
