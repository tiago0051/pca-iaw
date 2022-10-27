import styled from 'styled-components'

export const Container = styled.div`
  background: #fff;
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
`

export const ContainerForm = styled.div`
  position: relative;
  background: #ffffff;
  box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.1),
    0px 8px 53px rgba(0, 120, 240, 0.4);
  border-radius: 10px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 0 68px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  > div {
    position: absolute;
    top: -50px;

    width: 100px;
    height: 100px;
    background: rgba(0, 120, 240, 0.05);
    box-shadow: 0px 4px 4px rgba(0, 120, 240, 0.05);
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
    > svg {
      font-size: 26px;
      filter: drop-shadow(0px 4px 4px rgba(0, 120, 240, 0.25));
      color: #0078f0;
      box-shadow: 0px 4px 4px rgba(0, 120, 240, 0.1);
    }
  }

  > h1 {
    margin-top: 95px;
  }

  > p {
    font-family: 'Public Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: flex-end;
    text-align: center;

    color: rgba(0, 0, 0, 0.6);

    margin-top: 52px;
  }
`

export const Titulo = styled.h1`
  font-family: 'Public Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 31px;
  /* identical to box height */

  display: flex;
  align-items: flex-end;

  color: rgba(0, 120, 240, 0.5);
`

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  margin-top: 37px;
  margin-bottom: 61px;

  > label {
    width: 100%;
    max-width: 289px;
    position: relative;

    :last-of-type {
      margin-top: 50px;
    }

    > input {
      width: 100%;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.44);
      padding: 8px 35px 8px 0;
      background: none;

      font-family: 'Public Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 17.9255px;
      line-height: 21px;
      display: flex;
      align-items: flex-end;

      color: rgba(0, 0, 0, 0.8);

      ::placeholder {
        font-family: 'Public Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 17.9255px;
        line-height: 21px;
        display: flex;
        align-items: flex-end;

        color: rgba(0, 0, 0, 0.44);
      }

      :focus {
        border-bottom: 1px solid #0078f0;
      }
    }

    > svg {
      position: absolute;
      right: 5px;
      top: 6px;
      font-size: 20px;
      color: rgba(0, 120, 240, 0.44);
    }
  }

  > button {
    margin-top: 41px;
    max-width: 288.09px;
    width: 100%;
    padding: 15px 0;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 15.3647px;
    line-height: 18px;
    text-transform: uppercase;

    /* Azul/Default */

    color: #0078f0;

    background: rgba(0, 120, 240, 0.1);
    border: 1px solid #0078f0;
    border-radius: 10px;

    :hover {
      filter: brightness(1.5);
      cursor: pointer;
    }
  }
`
