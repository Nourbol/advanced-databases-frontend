import {Layout} from "./components/layout/Layout.tsx";
import {LoginPage, MainPage, ProductPage, SearchProductsPage} from "./pages";
import {Route, Routes} from "react-router-dom";
import {ProfileProvider} from "./context/ProfileProvider.tsx";

function App() {
    return (
        <ProfileProvider>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/search" element={<SearchProductsPage/>}/>
                    <Route path="/product/:productId" element={<ProductPage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                </Route>
            </Routes>
        </ProfileProvider>
    );
}

export default App
