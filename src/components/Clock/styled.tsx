import styled from "styled-components"

export const Clock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  box-sizing: border-box; 

  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const Time = styled.p`
  display: flex;
  height: 85%;
  font-size: 9rem;
  font-weight: 700;

  @media screen and (max-height: 978px) {
    font-size: 8rem;
  }
`

export const Data = styled.p`
  font-size: 0.875rem;
`