/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useRouter } from 'next/router'
import ContainerGlobal from '../../components/ContainerGlobal'
import { Container } from '../../styles/dashboard'

export default function Home() {
  const router = useRouter()
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
    },
    {
      professor: {
        foto: '/avatar.webp',
        nome: 'Gracielle Silva',
        contato: 'graciellesilva@unigranrio.edu.br'
      },
      nome: 'Português',
      status: 'pendente',
      materiaId: 2
    },
    {
      professor: {
        foto: '/avatar.webp',
        nome: 'Gabriel Silva',
        contato: 'gabrielsilva@unigranrio.edu.br'
      },
      nome: 'Geografia',
      status: 'pendente',
      materiaId: 3
    }
  ]
  return (
    <ContainerGlobal>
      <Container>
        <h1>Matérias matriculadas</h1>
        <div>
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
                  <td>
                    <div>{v.status}</div>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => router.push('/dashboard/' + v.materiaId)}
                    >
                      Ver conteudo
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </ContainerGlobal>
  )
}
