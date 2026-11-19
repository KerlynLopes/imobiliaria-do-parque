import './AdminLogin.css'
import { useState } from 'react'

function AdminLogin() {

    const [email, setEmail] = useState('')

    function handleLogin(event) {
        event.preventDefault()
        if (email === '') {
            alert('Por favor, informe seu e-mail.')
            return
        }
        if (senha === '') {
            alert('Por favor, informe sua senha.')
            return
        }
        alert('Formulário enviado!')
    }

    const [senha, setSenha] = useState('')

    return (
        <main className="admin-login-page">
            <div className="admin-login-card">

                <h1>Acesso administrativo</h1>

                <p>Entre com suas credenciais para continuar.</p>

                <form onSubmit={handleLogin}>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <label htmlFor="senha">Senha:</label>
                    <input
                        type="password"
                        id="senha"
                        placeholder="Digite sua senha"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                    />

                    <button type="submit">Entrar</button>
                </form>

                <span>Acesso exclusivo para administradores</span>

            </div>
        </main>
    )
}

export default AdminLogin