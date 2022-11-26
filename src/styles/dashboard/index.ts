import styled from 'styled-components'

export const Container = styled.div`
  > h1 {
    font-size: 20px;
    font-weight: 300;
    margin-bottom: 10px;
    color: rgb(50, 50, 50);
  }
  > div {
    display: block;
    border-radius: 4px;
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.2);
    overflow: auto;
    > table {
      width: 100%;
      white-space: nowrap;
      border-collapse: collapse;

      > thead > tr > th {
        text-align: left;
        padding: 10px 20px;
        color: grey;
        font-weight: 300;
        border-bottom: 1px solid rgb(240, 240, 240);
      }

      > tbody > tr > td {
        padding: 10px 20px;
        color: rgb(100, 100, 100);
        border-bottom: 1px solid rgb(240, 240, 240);

        :first-child {
          > div {
            display: flex;
            align-items: center;
            > img {
              width: 70px;
              height: 60px;
              border-radius: 4px;
              margin-right: 10px;
            }
          }
        }

        :nth-child(4) {
          > div {
            padding: 3px 5px;
            text-transform: capitalize;
            background-color: rgb(255, 255, 200);
            border: 1px solid rgb(225, 205, 10);
            border-radius: 15px;

            display: flex;
            justify-content: center;
            align-items: center;

            color: rgb(225, 205, 10);

            font-weight: 300;
          }
        }

        :nth-child(5) {
          > button {
            border: none;
            border-radius: 4px;
            background-color: rgba(0, 120, 240);
            color: white;
            font-weight: 300;
            padding: 5px 10px;
            cursor: pointer;
          }
        }
      }
    }
  }
`
