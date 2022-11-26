/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import ContainerGlobal from '../../components/ContainerGlobal'
import { Container } from '../../styles/dashboard'

export default function Home() {
  const materias = [
    {
      professor: {
        foto: '/avatar.webp',
        nome: 'Jorge Silva',
        contato: 'jorgesilva@unigranrio.edu.br'
      },
      nome: 'Matemática',
      status: 'pendente',
      materiaId: 1
    }
  ]
  return (
    <ContainerGlobal>
      <Container>
        <table>
          <thead>
            <tr>
              <th>Professor</th>
              <th>Nome</th>
              <th>Contato</th>
              <th>Status</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {materias.map(v => (
              <tr key={v.materiaId}>
                <td>
                  <div>
                    <img src={v.professor.foto} alt="professor" />
                    <p>{v.professor.nome}</p>
                  </div>
                </td>
                <td>{v.nome}</td>
                <td>{v.professor.contato}</td>
                <td>{v.status}</td>
                <td>
                  <button type="button">Ver conteudo</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </ContainerGlobal>
  )
}
