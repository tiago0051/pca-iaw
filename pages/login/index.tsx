import React, { useState } from "react";
import { FaEyeSlash, FaUser } from "react-icons/fa";
import { useAuth } from "../../context/UserContext";
import { Container, ContainerForm, Form, Titulo } from "../../styles/login";

export default function Login() {
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  async function handleLogin(e: any) {
    e.preventDefault();
    const logado = await signIn(email, password);

    if (logado) {
      setMessage("Logado com sucesso");
    } else {
      setMessage("Erro ao logar");
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
        {message && <p>{message}</p>}

        <Form onSubmit={(e) => handleLogin(e)}>
          <label>
            <input
              type="text"
              placeholder="Usuário"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <FaUser />
          </label>

          <label>
            <input
              type="password"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <FaEyeSlash />
          </label>

          <button type="submit">Entrar</button>
        </Form>
      </ContainerForm>
    </Container>
  );
}
