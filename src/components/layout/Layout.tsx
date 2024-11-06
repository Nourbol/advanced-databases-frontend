import {useEffect, useState} from "react";
import {Header} from "../header/Header.tsx";
import {Footer} from "../footer/Footer.tsx";
import {CategoryList} from "../category/CategoryList.tsx";
import {Category} from "../../types/category.ts";
import {getCategories} from "../../service/categories.ts";
import {Outlet, useNavigate} from "react-router-dom";
import './Layout.css';

export const Layout = () => {
    const navigate = useNavigate();

    const [categories, setCategories] = useState<Category[]>([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleCategoryClick = (category: Category) => navigate(`/category/${category.id}`);

    const handleMenuButtonClick = () => setIsSidebarOpen(prevState => !prevState);

    useEffect(() => {
        getCategories().then(response => setCategories(response));
    }, []);

    return (
        <>
            <Header onMenuButtonClick={handleMenuButtonClick} />
            {isSidebarOpen && (
                <aside className="category-sidebar">
                    <CategoryList categories={categories} onCategoryClick={handleCategoryClick}/>
                </aside>
            )}
            <main className={`main ${isSidebarOpen && 'shadow-overlay'}`}>
                <Outlet/>
            </main>
            <Footer className={`footer ${isSidebarOpen && 'shadow-overlay'}`}/>
        </>
    );
};
