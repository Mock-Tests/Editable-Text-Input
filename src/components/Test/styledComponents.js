import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f5d0fe;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 14px;
  background-color: #ffffff;
  font-family: Roboto;
  width: 40%;
  height: 25%;
`

export const Heading = styled.h1`
  color: #000000;
  font-size: 26px;
  font-weight: bold;
`

export const InputBtn = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  height: 30px;
  width: 80%;
  border: 1px solid #323f4b;
  border-radius: 4px;
  margin-right: 12px;
  color: #cbd2d9;
  font-size: 16px;
  outline: none;
`

export const Btn = styled.button`
  height: 30px;
  width: 125px;
  color: #ffffff;
  background-color: #d946ef;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-size: 14px;
`

export const Para = styled.p`
  color: #cbd2d9;
  font-size: 15px;
  margin-right: 15px;
`
