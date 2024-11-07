import {Catalog} from "../components/catalog/Catalog.tsx";
import {useEffect, useState} from "react";
import {ProductPreview} from "../types/product.ts";
import {getLikedProducts} from "../service/products.ts";
import {useNavigate} from "react-router-dom";

export const UserFavorites = () => {
    const [likedProducts, setLikedProducts] = useState<ProductPreview[]>([]);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    const handleProductClick = (product: ProductPreview) => {
        navigate(`/product/${product.id}`);
    };

    const handleLoadMore = () => setPage(prevState => prevState + 1);

    useEffect(() => {
        getLikedProducts({ size: 24, page })
            .then(response => setLikedProducts(prevState => [...prevState, ...response]));
    }, [page]);

    return (
        <div className="page">
            <h1>Favorites</h1>
            <Catalog products={likedProducts} onProductClick={handleProductClick} onLoadMore={handleLoadMore} />
        </div>
    );
};
