import {Catalog} from "../components/catalog/Catalog.tsx";
import {ProductPreview} from "../types/product.ts";
import {useEffect, useState} from "react";
import {getRecommendations, searchProducts} from "../service/products.ts";
import {useNavigate} from "react-router-dom";
import {RecommendationList} from "../components/recommendation/RecommendationList.tsx";

export const MainPage = () => {
    const [products, setProducts] = useState<ProductPreview[]>([]);
    const [recommendedProducts, setRecommendedProducts] = useState<ProductPreview[]>([]);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const handleProductClick = (product: ProductPreview) => {
        navigate(`/product/${product.id}`);
    };

    const handleLoadMore = () => setPage(prevState => prevState + 1);

    useEffect(() => {
        searchProducts(undefined, { page, size: 24 })
            .then(response => setProducts(prevState => [...prevState, ...response]));
    }, [page]);

    useEffect(() => {
        getRecommendations(6)
            .then(response => setRecommendedProducts(response));
    }, []);

    return (
        <div className="page">
            <RecommendationList products={recommendedProducts} onProductClick={handleProductClick} />
            <Catalog products={products} onProductClick={handleProductClick} onLoadMore={handleLoadMore}/>
        </div>
    );
};
