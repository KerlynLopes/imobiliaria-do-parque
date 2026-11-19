import './AdminPropertyForm.css'
import { useState } from 'react'

function AdminPropertyForm() {
    const [fotos, setFotos] = useState([1])
    return (
        <main className="admin-property-page">
            <div className="admin-property-container">
                <h1>Cadastrar imóvel</h1>
                <p>Preencha as informações para anunciar um novo imóvel.</p>
                <section className="property-form-section">
    <h2>Informações do imóvel</h2>

    <form>
        <div className="form-group">
    <label htmlFor="titulo">Título do anúncio</label>
    <input
        type="text"
        id="titulo"
        placeholder="Ex: Casa moderna com piscina"/>
</div>
        <div className="form-group">
    <label htmlFor="tipo">Tipo de imóvel</label>
    <select id="tipo">
        <option value="">Selecione o tipo</option>
        <option value="casa">Casa</option>
        <option value="apartamento">Apartamento</option>
        <option value="terreno">Terreno</option>
        <option value="comercial">Comercial</option>
    </select>
</div>
<div className="form-group">
    <label htmlFor="finalidade">Finalidade</label>
    <select id="finalidade">
        <option value="">Selecione a finalidade</option>
        <option value="venda">Venda</option>
        <option value="aluguel">Aluguel</option>
    </select>
</div>
<div className="form-group">
    <label htmlFor="preco">Preço (R$)</label>
    <input
        type="number"
        id="preco"
        placeholder="Ex: 450000"
        min="0"
    />
</div>
<section className="property-form-section">
    <h2>Localização</h2>

    <div className="form-group">
        <label htmlFor="cidade">Cidade</label>
        <input
            type="text"
            id="cidade"
            placeholder="Ex: Porto Alegre"
        />
    </div>
    <div className="form-group">
    <label htmlFor="bairro">Bairro</label>
    <input
        type="text"
        id="bairro"
        placeholder="Ex: Centro"
    />
</div>
<div className="form-group">
    <label htmlFor="endereco">Endereço</label>
    <input
        type="text"
        id="endereco"
        placeholder="Rua, número e complemento"
    />
</div>
</section>

<section className="property-form-section">
    <h2>Características</h2>
    <div className="form-group">
    <label htmlFor="quartos">Quartos</label>
    <input
        type="number"
        id="quartos"
        min="0"
        placeholder="Ex: 3"
    />
</div>
<div className="form-group">
    <label htmlFor="banheiros">Banheiros</label>
    <input
        type="number"
        id="banheiros"
        min="0"
        placeholder="Ex: 2"
    />
</div>
<div className="form-group">
    <label htmlFor="area">Área (m²)</label>
    <input
        type="number"
        id="area"
        min="0"
        placeholder="Ex: 120"
    />
</div>
</section>

<section className="property-form-section">
    <h2>Descrição e fotos</h2>

    <div className="form-group">
        <label htmlFor="descricao">Descrição do imóvel</label>
        <textarea
            id="descricao"
            rows="5"
            placeholder="Descreva os detalhes e diferenciais do imóvel..."
        />
    </div>

    <div className="form-group">
        <label>Fotos do imóvel</label>

        {fotos.map((foto, index) => (
            <div className="photo-input-group" key={foto}>
                <div className="form-group">
                    <label htmlFor={`foto-${foto}`}>
                        Foto {index + 1}
                    </label>

                    <input
                        type="file"
                        id={`foto-${foto}`}
                        accept="image/*"
                    />
                </div>

                    <button
                        type="button"
                        className="btn-remove-photo"
                        onClick={() => setFotos(fotos.filter(item => item !== foto))}
                    >
                        ×
                    </button>
                
            </div>
        ))}

        <button
            type="button"
            className="btn-add-photo"
            onClick={() => setFotos([...fotos, Math.max(0, ...fotos) + 1])}
        >
            +
        </button>
    </div>

</section>

<button type="submit" className="btn-save-property">
    Cadastrar imóvel
</button>

</form>
</section>
</div>
</main>
)
}

export default AdminPropertyForm