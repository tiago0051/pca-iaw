import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { useAuth } from '../../context/UserContext'
import { Container, ContainerForm, Form, Titulo } from '../../styles/login'

export default function Login() {
  const router = useRouter()
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [showPassword, setShowPassword] = useState(false)

  const [erroMessage, setErroMessage] = useState('')

  async function handleLogin(e: any) {
    e.preventDefault()
    const logado = await signIn(email, password)

    if (logado) {
      router.push('/dashboard')
    } else {
      setErroMessage('Usuário ou senha incorreto(s).')
    }
  }

  return (
    <Container>
      <ContainerForm>
        <div>
          <FaUser />
        </div>
        <Titulo>Login</Titulo>

        <p>Por favor preencha o dados abaixo para começar!</p>
        {erroMessage && <p className="error">{erroMessage}</p>}

        <Form onSubmit={e => handleLogin(e)}>
          <label>
            <input
              type="text"
              placeholder="Usuário"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <FaUser />
          </label>

          <label>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <button type="button" onClick={() => setShowPassword(sp => !sp)}>
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </label>

          <button type="submit">Entrar</button>
        </Form>
      </ContainerForm>
    </Container>
  )
}
