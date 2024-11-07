import {Catalog} from "../components/catalog/Catalog.tsx";
import {useEffect, useState} from "react";
import {ProductPreview} from "../types/product.ts";
import {getViewedProducts} from "../service/products.ts";
import {useNavigate} from "react-router-dom";

export const UserViewHistory = () => {
    const [viewedProducts, setViewedProducts] = useState<ProductPreview[]>([]);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const handleProductClick = (product: ProductPreview) => {
        navigate(`/product/${product.id}`);
    };

    const handleLoadMore = () => setPage(prevState => prevState + 1);

    useEffect(() => {
        getViewedProducts({ size: 24, page }).then(response => setViewedProducts(prevState => [...prevState, ...response]));
    }, [page]);

    return (
        <div className="page">
            <h1>View history</h1>
            <Catalog products={viewedProducts} onProductClick={handleProductClick} onLoadMore={handleLoadMore} />
        </div>
    );
};
