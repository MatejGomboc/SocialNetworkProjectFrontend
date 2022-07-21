import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import "./index.scss";

const LandingPage: React.FC = lazy(() => import("./pages/LandingPage"));
const RegisterPage: React.FC = lazy(() => import("./pages/RegisterPage"));
const NotFoundPage: React.FC = lazy(() => import("./pages/NotFoundPage"));

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route index element={<LandingPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    </React.StrictMode>
);
