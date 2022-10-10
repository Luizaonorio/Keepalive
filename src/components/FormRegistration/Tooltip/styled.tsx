import styled from "styled-components";

export const Tooltip = styled.div`
  position: absolute;
  width: 40%;
  background: red;
`

export const SpanPassword = styled.span<{ dye: any }>`
    display: flex;
    font-size: 0.875rem;
    gap: 4px;
    color: ${({dye} : any) => dye ? "green" : "orange"};
`