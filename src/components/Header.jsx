import './Header.css'

function Header() {
    return (
        <header className="header">
            <h1>Imobiliária do Parque</h1>

            <nav>
                <ul>
                    <li><a href="#">Início</a></li>
                    <li><a href="#">Comprar</a></li>
                    <li><a href="#">Alugar</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header