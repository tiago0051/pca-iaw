import styled from 'styled-components'

export const Container = styled.div`
  > table {
    width: 100%;
    white-space: nowrap;

    > tbody > tr > td {
      :first-child {
        > div {
          display: flex;
          align-items: center;
          > img {
            width: 70px;
            height: 60px;
            border-radius: 4px;
          }
        }
      }
    }
  }
`
