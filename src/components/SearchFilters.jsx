import './SearchFilters.css'

function SearchFilters() {
    return (
        <section className="search-filters">
        <div className="filters-container">
        <div className="filter-group">
    <label htmlFor="finalidade">Finalidade</label>
    <select id="finalidade">
        <option value="comprar">Comprar</option>
        <option value="alugar">Alugar</option>
    </select>
</div>
        <div className="filter-group">
    <label htmlFor="cidade">Cidade</label>
    <input
        type="text"
        id="cidade"
        placeholder="Digite a cidade"
    />
</div>
        <div className="filter-group">
    <label htmlFor="bairro">Bairro</label>
    <input
        type="text"
        id="bairro"
        placeholder="Digite o bairro"
    />
</div>
        <div className="filter-group">
    <label htmlFor="tipo">Tipo de imóvel</label>
    <select id="tipo">
        <option value="">Todos</option>
        <option value="casa">Casa</option>
        <option value="apartamento">Apartamento</option>
        <option value="sitio">Sítio</option>
    </select>
</div>
        <div className="filter-group">
    <label htmlFor="preco-minimo">Preço mínimo</label>
    <input
        type="number"
        id="preco-minimo"
        placeholder="R$ mínimo"
    />
</div>
        <div className="filter-group">
    <label htmlFor="preco-maximo">Preço máximo</label>
    <input
        type="number"
        id="preco-maximo"
        placeholder="R$ máximo"
    />
</div>
        <div className="filter-group">
    <label htmlFor="quartos">Quartos</label>
    <select id="quartos">
        <option value="">Qualquer</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
    </select>
</div>

<div className="filter-group">
    <label htmlFor="banheiros">Banheiros</label>
    <select id="banheiros">
        <option value="">Qualquer</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
    </select>
</div>
        <div className="filter-group">
    <label htmlFor="vagas">Vagas de garagem</label>
    <select id="vagas">
        <option value="">Qualquer</option>
        <option value="1">1+</option>
        <option value="2">2+</option>
        <option value="3">3+</option>
        <option value="4">4+</option>
    </select>
</div>
        <button type="button">Buscar imóveis</button>
        </div>
        </section>
    )
}

export default SearchFilters