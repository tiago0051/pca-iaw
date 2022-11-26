import Image from 'next/image'
import { useRouter } from 'next/router'
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
  const router = useRouter()
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
        <label className="desktop">
          <FaSearch />
          <input type="text" placeholder="Buscar..." />
        </label>

        <div>
          <FaBell className="desktop" />
          <Image src="/avatar.webp" alt="Avatar" width={40} height={35} />
          <div className="desktop">
            <p>Luke Asote</p>
            <p>Admin for Associations</p>
          </div>
          <FaChevronDown />
        </div>
      </header>
      <nav>
        <NavItem selecionado onClick={() => router.push('/dashboard')}>
          <FaBookOpen />
          <p>Matérias</p>
        </NavItem>
      </nav>
      <main>{children}</main>
    </Container>
  )
}
