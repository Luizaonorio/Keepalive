import styled from "styled-components";

export const Tooltip = styled.div`
  display: ${({dye} : any) => dye ? "green" : "orange"};
  z-index: 5;
  position: absolute;
  width: 90.6%;
  padding: 2%;
  background: white;
  border-radius: 5px;
  margin-top: 92%;
  margin-top: 101%;
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

export const SpanPassword = styled.span<{ dye: any }>`
    display: flex;
    font-size: 0.875rem;
    gap: 4px;
    color: ${({dye} : any) => dye ? "green" : "orange"};
`