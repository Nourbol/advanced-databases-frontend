import {Catalog} from "../components/catalog/Catalog.tsx";
import {ProductPreview} from "../types/product.ts";

export const MainPage = () => {
    const products: ProductPreview[] = [
        {
            id: '1',
            title: 'Timson',
            price: 500,
            imageUrl: 'https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6979674908.jpg'
        },
        {
            id: '2',
            title: 'Вешалка',
            price: 11400,
            imageUrl: 'https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6979674908.jpg'
        },
        {
            id: '3',
            title: 'Утюг',
            price: 9500,
            imageUrl: 'https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6979674908.jpg'
        },
        {
            id: '4',
            title: 'Ноутбук',
            price: 509500,
            imageUrl: 'https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6979674908.jpg'
        },
        {
            id: '5',
            title: 'Зарядка от ноутбука',
            price: 10500,
            imageUrl: 'https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6979674908.jpg'
        },
        {
            id: '6',
            title: 'Футболка',
            price: 8500,
            imageUrl: 'https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6979674908.jpg'
        },{
            id: '7',
            title: 'Футболка',
            price: 8500,
            imageUrl: 'https://ir-3.ozone.ru/s3/multimedia-1-k/wc1000/6979674908.jpg'
        },
    ]
    return <div className="page"><Catalog products={products} /></div>;
};
