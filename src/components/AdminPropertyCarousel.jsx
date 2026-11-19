
import { useState } from 'react'
import './AdminPropertyCarousel.css'

function AdminPropertyCarousel() {

    const [imoveis, setImoveis] = useState([
        {
            id: 1,
            titulo: 'Casa moderna com piscina',
            cidade: 'Eldorado do Sul',
            bairro: 'Centro',
            preco: 'R$ 650.000',
            imagem: '/images/casa1.jpg'
        },
        {
            id: 2,
            titulo: 'Apartamento aconchegante',
            cidade: 'Porto Alegre',
            bairro: 'Moinhos de Vento',
            preco: 'R$ 420.000',
            imagem: '/images/casa2.jpg'
        },
        {
            id: 3,
            titulo: 'Casa ampla com jardim',
            cidade: 'Canoas',
            bairro: 'Igara',
            preco: 'R$ 580.000',
            imagem: '/images/casa3.jpg'
        },
        {
            id: 4,
            titulo: 'Casa térrea com garagem',
            cidade: 'Esteio',
            bairro: 'Centro',
            preco: 'R$ 490.000',
            imagem: '/images/casa4.jpg'
        },
        {
            id: 5,
            titulo: 'Apartamento com varanda',
            cidade: 'Porto Alegre',
            bairro: 'Menino Deus',
            preco: 'R$ 350.000',
            imagem: '/images/casa5.jpg'
        },
        {
            id: 6,
            titulo: 'Sobrado contemporâneo',
            cidade: 'Canoas',
            bairro: 'Igara',
            preco: 'R$ 720.000',
            imagem: '/images/casa6.jpg'
        },
        {
            id: 7,
            titulo: 'Terreno residencial',
            cidade: 'Eldorado do Sul',
            bairro: 'Parque Eldorado',
            preco: 'R$ 180.000',
            imagem: '/images/casa7.jpg'
        },
        {
            id: 8,
            titulo: 'Casa com espaço gourmet',
            cidade: 'Guaíba',
            bairro: 'Colina',
            preco: 'R$ 560.000',
            imagem: '/images/casa8.jpg'
        },
        {
            id: 9,
            titulo: 'Apartamento moderno',
            cidade: 'Cachoeirinha',
            bairro: 'Vila Cachoeirinha',
            preco: 'R$ 390.000',
            imagem: '/images/casa9.jpg'
        },
        {
            id: 10,
            titulo: 'Casa ampla com pátio',
            cidade: 'Esteio',
            bairro: 'São Sebastião',
            preco: 'R$ 610.000',
            imagem: '/images/casa10.jpg'
        }
    ])

    const [paginaAtual, setPaginaAtual] = useState(1)

    const imoveisPorPagina = 9

    const inicio = (paginaAtual - 1) * imoveisPorPagina

    const imoveisVisiveis = imoveis.slice(
        inicio,
        inicio + imoveisPorPagina
    )

    const totalPaginas = Math.ceil(
        imoveis.length / imoveisPorPagina
    )

    function excluirImovel(id) {
        const confirmar = window.confirm(
            'Tem certeza que deseja excluir este imóvel?'
        )

        if (confirmar) {
            setImoveis(imoveis.filter(imovel => imovel.id !== id))
        }
    }

    return (
        <section className="admin-property-carousel">
            <h2>Imóveis cadastrados</h2>

            <div className="admin-property-list">
                {imoveisVisiveis.map((imovel) => (
                    <article className="admin-property-card" key={imovel.id}>
                        <img src={imovel.imagem} alt={imovel.titulo} />

                        <div className="admin-property-info">
                            <h3>{imovel.titulo}</h3>
                            <p>{imovel.bairro}, {imovel.cidade}</p>
                            <strong>{imovel.preco}</strong>

                            <div className="admin-property-buttons">
                                <button type="button" className="btn-edit">
                                    Editar
                                </button>

                                <button
                                    type="button"
                                    className="btn-delete"
                                    onClick={() => excluirImovel(imovel.id)}
                                >
                                    Excluir
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            {totalPaginas > 0 && (
                <div className="pagination">
                    <button
                        onClick={() => setPaginaAtual(paginaAtual - 1)}
                        disabled={paginaAtual === 1}
                    >
                        Anterior
                    </button>

                    <span>
                        Página {paginaAtual} de {totalPaginas}
                    </span>

                    <button
                        onClick={() => setPaginaAtual(paginaAtual + 1)}
                        disabled={paginaAtual === totalPaginas}
                    >
                        Próxima
                    </button>
                </div>
            )}
        </section>
    )
}

export default AdminPropertyCarousel
