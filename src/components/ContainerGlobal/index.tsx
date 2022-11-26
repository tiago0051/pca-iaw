import Image from 'next/image'
import React, { ReactElement } from 'react'
import {
  FaBell,
  FaBookOpen,
  FaChevronDown,
  FaSearch,
  FaUser,
  FaUsers
} from 'react-icons/fa'
import { Container, NavItem } from './style'

export default function ContainerGlobal({
  children
}: {
  children: ReactElement | ReactElement[]
}) {
  return (
    <Container>
      <header>
        <div>
          <Image
            src="/logo.png"
            alt="Logo unigranrio"
            width={213}
            height={35}
          />
        </div>
        <label>
          <FaSearch />
          <input type="text" placeholder="Buscar..." />
        </label>

        <div>
          <FaBell />
          <Image src="/avatar.webp" alt="Avatar" width={40} height={35} />
          <div>
            <p>Luke Asote</p>
            <p>Admin for Associations</p>
          </div>
          <FaChevronDown />
        </div>
      </header>
      <nav>
        <NavItem>
          <FaUser />
          <p>Perfil</p>
        </NavItem>

        <NavItem>
          <FaUsers />
          <p>Usuários</p>
        </NavItem>

        <NavItem selecionado>
          <FaBookOpen />
          <p>Matérias</p>
        </NavItem>
      </nav>
      <main>{children}</main>
    </Container>
  )
}
