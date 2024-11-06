import {Layout} from "./components/layout/Layout.tsx";
import {LoginPage, MainPage, ProductPage, SearchProductsPage} from "./pages";
import {Route, Routes} from "react-router-dom";
import {ProfileProvider} from "./context/ProfileProvider.tsx";

function App() {
    return (
        <ProfileProvider>
            <Routes>
                <Route path="/" element={<Layout><MainPage/></Layout>}/>
                <Route path="/search" element={<Layout><SearchProductsPage/></Layout>}/>
                <Route path="/product/:productId" element={<Layout><ProductPage/></Layout>} />
                <Route path="/login" element={<Layout><LoginPage/></Layout>} />
            </Routes>
        </ProfileProvider>
    );
}

export default App
