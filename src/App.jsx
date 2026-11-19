import Header from './components/Header'
import Hero from './components/Hero'
import SearchFilters from './components/SearchFilters'
import FeaturedProperties from './components/FeaturedProperties'
import Footer from './components/Footer'
import { Routes, Route, Outlet } from 'react-router-dom'
import AdminLogin from './pages/AdminLogin'
import PropertyDetails from './pages/PropertyDetails'
import AdminPropertyForm from './pages/AdminPropertyForm'
import AdminProperties from './pages/AdminProperties'

function LayoutPublico() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

function App() {
    return (
        <Routes>
            {/* Área administrativa */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/imoveis/novo" element={<AdminPropertyForm />} />
            <Route path="/admin/imoveis" element={<AdminProperties />} />

            {/* Área pública */}
            <Route element={<LayoutPublico />}>
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <SearchFilters />
                            <FeaturedProperties />
                        </>
                    }
                />

                <Route
                    path="/imovel/:id"
                    element={<PropertyDetails />}
                />
            </Route>
        </Routes>
    )
}

export default App