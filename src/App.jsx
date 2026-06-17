import "./assets/tailwind.css";

import { Routes, Route, Navigate } from "react-router-dom";

import { lazy, Suspense } from "react";

/* LAYOUT */
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Notes from "./pages/Notes";

/* LAZY PAGES */
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const NotFound = lazy(() => import("./pages/NotFound"));
const VisitorPage = lazy(() => import("./pages/VisitorPage"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));

/* AUTH */
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));

function DashboardLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex">
      <div id="layout-wrapper" className="flex flex-row flex-1">
        <Sidebar />

        <div id="main-content" className="flex-1 p-4">
          <Header />

          <Suspense fallback={<div className="p-10">Loading...</div>}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/products" element={<Products />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          Loading...
        </div>
      }
    >
      <Routes>

        {/* ROOT */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* VISITOR */}
        <Route path="/visitor" element={<VisitorPage />} />

        {/* AUTH */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* DASHBOARD */}
        <Route path="/*" element={<DashboardLayout />} />

        {/* NOT FOUND */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </Suspense>
  );
}

export default App;