import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-about">
                    <h2>Imobiliária do Parque</h2>
                    <p>
                        Encontramos o lugar ideal para você
                        construir novas histórias.
                    </p>
                </div>

                <div className="footer-contact">
                    <h3>Contato</h3>
                    <p>Telefone: (51) 99999-9999</p>
                    <p>E-mail: contato@imobiliariadoparque.com.br</p>
                    <p>WhatsApp: (51) 99999-9999</p>
                </div>

                <div className="footer-links">
                    <h3>Navegação</h3>
                    <a href="#">Início</a>
                    <a href="#">Comprar</a>
                    <a href="#">Alugar</a>
                    <Link to="/admin" className="admin-link">
    Área administrativa
</Link>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Imobiliária do Parque. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer