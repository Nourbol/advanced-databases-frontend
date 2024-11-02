import {Catalog} from "../components/catalog/Catalog.tsx";
import {ProductPreview} from "../types/product.ts";

export const MainPage = () => {
    const products: ProductPreview[] = [
        {
            id: '1',
            title: 'Timson',
            price: 500,
            imageUrl: 'https://basket-13.wbbasket.ru/vol1931/part193143/193143755/images/big/1.webp'
        },
        {
            id: '2',
            title: 'Вешалка',
            price: 11400,
            imageUrl: 'https://basket-13.wbbasket.ru/vol1931/part193143/193143755/images/big/1.webp'
        },
        {
            id: '3',
            title: 'Утюг',
            price: 9500,
            imageUrl: 'https://basket-13.wbbasket.ru/vol1931/part193143/193143755/images/big/1.webp'
        },
        {
            id: '4',
            title: 'Ноутбук',
            price: 509500,
            imageUrl: 'https://basket-13.wbbasket.ru/vol1931/part193143/193143755/images/big/1.webp'
        },
        {
            id: '5',
            title: 'Зарядка от ноутбука',
            price: 10500,
            imageUrl: 'https://basket-13.wbbasket.ru/vol1931/part193143/193143755/images/big/1.webp'
        },
        {
            id: '6',
            title: 'Футболка',
            price: 8500,
            imageUrl: 'https://basket-13.wbbasket.ru/vol1931/part193143/193143755/images/big/1.webp'
        },{
            id: '7',
            title: 'Футболка',
            price: 8500,
            imageUrl: 'https://basket-13.wbbasket.ru/vol1931/part193143/193143755/images/big/1.webp'
        },
    ]
    return <div className="page"><Catalog products={products} /></div>;
};
