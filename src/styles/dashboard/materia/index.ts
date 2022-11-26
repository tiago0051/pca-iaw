import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 10px;
    color: rgb(50, 50, 50);
  }

  > ol {
    list-style: none;

    a {
      color: blue;
    }
  }

  > div > div {
    margin-top: 20px;

    > h2 {
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 10px;
      color: rgb(50, 50, 50);
    }

    > p {
      font-size: 16px;
      font-weight: 300;
      margin-bottom: 10px;
      color: rgb(70, 70, 70);
    }
  }
`
