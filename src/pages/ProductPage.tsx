import {DetailedProductCard} from "../components/product/DetailedProductCard.tsx";

export const ProductPage = () => {
    return (
        <div className="page">
            <DetailedProductCard
                imageUrl="https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6979674908.jpg"
                title="Macbook Air"
                description="Apple"
                price={1500000}
                quantity={50}
            />
        </div>
    );
};
