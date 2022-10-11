import styled from "styled-components";

export const Tooltip = styled.div<{appear: boolean}>`
  display: ${({appear} : any) => appear ? "block" : "none"};
  z-index: 5;
  position: absolute;
  width: 90.6%;
  padding: 2%;
  background: white;
  border-radius: 5px;
  margin-top: 92%;

  @media screen and (max-width: 1780px) {
    margin-top: 100%;
}

@media screen and (max-width: 1580px) {
  margin-top: 110%;
}

@media screen and (max-width: 1440px) {
  margin-top: 92%;
}

@media screen and (max-width: 1300px) {
  margin-top: 100%;
}

@media screen and (max-width: 1140px) {
  margin-top: 113%;
}

@media screen and (max-width: 1023px) {
  margin-top: 85%;
}

@media screen and (max-width: 850px) {
  margin-top: 95%;
}

@media screen and (max-width: 750px) {
  margin-top: 105%;
}

@media screen and (max-width: 675px) {
  margin-top: 115%;
}
`



export const Arrow = styled.span`
  display: block;
  position: absolute;
  z-index: 4;
  background-color: white;
  top: -12px;
  right: 50%;
  padding: 5px;
  transform: translateY(6.53553391px) rotate(45deg);
`

export const Title = styled.h1`
  font-size: 0.875rem;
  margin-bottom: 1%; 
`

export const SpanPassword = styled.span<{ dye: any }>`
    display: flex;
    font-size: 0.875rem;
    gap: 4px;
    color: ${({dye} : any) => dye ? "green" : "orange"};
`