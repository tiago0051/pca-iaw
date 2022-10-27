import React from 'react'
import { FaEyeSlash, FaUser } from 'react-icons/fa'
import { Container, ContainerForm, Form, Titulo } from '../../styles/login'

export default function Login() {
  return (
    <Container>
      <ContainerForm>
        <div>
          <FaUser />
        </div>
        <Titulo>Login</Titulo>

        <p>Por favor preencha o dados abaixo para começar!</p>

        <Form>
          <label>
            <input type="text" placeholder="Usuário" />
            <FaUser />
          </label>

          <label>
            <input type="password" placeholder="Senha" />
            <FaEyeSlash />
          </label>

          <button type="submit">Entrar</button>
        </Form>
      </ContainerForm>
    </Container>
  )
}
