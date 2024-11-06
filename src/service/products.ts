import {API_SERVICE} from "./index.ts";
import {PaginationRequest} from "../types/pagination.ts";
import {Product, ProductPreview} from "../types/product.ts";

export const searchProducts = async (query?: string, pagination?: PaginationRequest): Promise<ProductPreview[]> => {
    return await API_SERVICE.get('/v1/products', {
        params: {
            query,
            ...pagination,
        },
        paramsSerializer: {
            indexes: null,
        }
    }).then((response) => response.data);
};

export const getProduct = async (id: string): Promise<Product> => {
    return await API_SERVICE.get(`/v1/products/${id}`).then((response) => response.data);
};
