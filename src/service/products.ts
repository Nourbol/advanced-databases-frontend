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

export const getCategoryProducts = async (categoryId: string, pagination?: PaginationRequest): Promise<ProductPreview[]> => {
    return await API_SERVICE.get(`/v1/categories/${categoryId}/products`, {
        params: {
            ...pagination,
        },
        paramsSerializer: {
            indexes: null,
        }
    }).then((response) => response.data);
};

export const getViewedProducts = async (pagination?: Omit<PaginationRequest, 'sort'>): Promise<ProductPreview[]> => {
    return await API_SERVICE.get('/v1/products/views', {
        params: {
            ...pagination,
        }
    }).then((response) => response.data);
};

export const getLikedProducts = async (pagination?: Omit<PaginationRequest, 'sort'>): Promise<ProductPreview[]> => {
    return await API_SERVICE.get('/v1/products/likes', {
        params: {
            ...pagination,
        }
    }).then((response) => response.data);
};

export const getProduct = async (id: string): Promise<Product> => {
    return await API_SERVICE.get(`/v1/products/${id}`).then((response) => response.data);
};

export const likeProduct = async (id: string): Promise<void> => {
    return await API_SERVICE.post(`/v1/products/${id}/likes`).then((response) => response.data);
};

export const unlikeProduct = async (id: string): Promise<void> => {
    return await API_SERVICE.delete(`/v1/products/${id}/likes`).then((response) => response.data);
};

export const getRecommendations = async (size: number): Promise<ProductPreview[]> => {
    return await API_SERVICE.get(`/v1/products/recommendations`, { params: { size }}).then((response) => response.data);
};
