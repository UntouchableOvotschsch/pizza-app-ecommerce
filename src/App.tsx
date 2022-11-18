import React, {Suspense} from "react";
import "./scss/app.scss"
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";


const Cart = React.lazy(() => import("./pages/Cart"))
const NotFound = React.lazy(() => import("./components/NotFoundBlock"))

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/cart" element={
                        <Suspense fallback={<h2>Загрузка</h2>}>
                            <Cart/>
                        </Suspense>}
                    />
                    <Route path="*" element={
                        <Suspense fallback={<h2>Загрузка</h2>}>
                            <NotFound/>
                        </Suspense>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;
