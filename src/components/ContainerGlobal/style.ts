import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 250px 1fr 300px;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    'header header header'
    'nav content content';

  > header {
    grid-area: header;
    background-color: #0078f0;
    display: grid;
    grid-template-columns: 250px 1fr 300px;
    align-items: center;

    > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    > label {
      position: relative;
      width: 50%;

      > svg {
        position: absolute;
        top: 10px;
        left: 10px;
        color: gray;
        font-size: 14px;
      }
      > input {
        height: 35px;
        border: none;
        border-radius: 4px;
        width: 100%;
        padding-left: 40px;

        ::placeholder {
          color: grey;
        }
      }
    }

    > div:last-child {
      display: flex;
      align-items: center;
      justify-content: center;

      > svg {
        color: white;
        margin-right: 30px;
        font-size: 20px;

        :last-child {
          font-size: 14px;
        }
      }

      > img {
        border-radius: 4px;
        margin-right: 15px;
      }

      > div {
        color: white;
        font-size: 12px;
        margin-right: 15px;
      }
    }
  }

  > nav {
    grid-area: nav;
    background: rgba(0, 120, 240, 0.5);
    padding-top: 20px;
  }

  > div {
    grid-area: content;
  }
`

export const NavItem = styled.div<{ selecionado?: boolean }>`
  display: flex;
  background: transparent;
  padding: 10px calc(50% - 60px);
  color: white;
  background: ${props =>
    props.selecionado ? 'rgba(0, 120, 240, 0.5)' : 'none'};
  border-left: ${props => (props.selecionado ? '4px solid white' : 'none')};

  > svg {
    margin-right: 20px;
    font-size: 20px;
  }
`
