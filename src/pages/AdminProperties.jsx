import './AdminProperties.css'
import { Link } from 'react-router-dom'
import AdminPropertyCarousel from '../components/AdminPropertyCarousel'

function AdminProperties() {
    return (
        <main className="admin-properties-page">
            <div className="admin-properties-container">
                <h1>Gerenciar imóveis</h1>
                <p>Visualize e gerencie os imóveis cadastrados.</p>
               <section className="admin-properties-actions">
    <Link to="/admin/imoveis/novo" className="btn-new-property">
        + Cadastrar imóvel
    </Link>
</section>

<section className="admin-properties-search">
    <h2>Imóveis cadastrados</h2>

    <input
        type="text"
        placeholder="Pesquisar por título, cidade ou bairro..."
    />
</section>
<AdminPropertyCarousel />
            </div>
        </main>
    )
}

export default AdminProperties