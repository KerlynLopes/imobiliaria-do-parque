import Header from './components/Header'
import Hero from './components/Hero'
import SearchFilters from './components/SearchFilters'
import FeaturedProperties from './components/FeaturedProperties'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

import PropertyDetails from './pages/PropertyDetails'


function App() {
    return (
        <>
            <Header />

            <Routes>
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
            </Routes>

            <Footer />
        </>
    )
}

export default App