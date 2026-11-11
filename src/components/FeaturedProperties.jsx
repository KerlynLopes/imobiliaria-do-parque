import './FeaturedProperties.css'
import { Link } from 'react-router-dom'

const imoveis = [
    {
        id: 1,
        nome: 'Casa moderna',
        cidade: 'Porto Alegre',
        bairro: 'Tristeza',
        preco: 'R$ 850.000'
    },
    {
        id: 2,
        nome: 'Apartamento aconchegante',
        cidade: 'Canoas',
        bairro: 'Centro',
        preco: 'R$ 420.000'
    },
    {
        id: 3,
        nome: 'Casa com piscina',
        cidade: 'Eldorado do Sul',
        bairro: 'Centro',
        preco: 'R$ 690.000'
    }
]

function FeaturedProperties() {
    return (
        <section className="featured-properties">
            <h2>Imóveis em destaque</h2>
            <div className="properties-list">
                {[...imoveis, ...imoveis, ...imoveis].map((imovel, index) => (
                    <Link
                        to={`/imovel/${imovel.id}`}
                        className="property-card"
                        key={index}
                    >
                        <h3>{imovel.nome}</h3>
                        <p>{imovel.bairro}, {imovel.cidade}</p>
                        <strong>{imovel.preco}</strong>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default FeaturedProperties