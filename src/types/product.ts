export type ProductPreview = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
};

export type Product = {
    id: string;
    title: string;
    description: string;
    price: number;
    quantity: number;
    deleted: boolean;
    imageUrl: string;
    category: {
        id: string;
        name: string;
    };
    likes: number;
    liked: boolean;
};
