import styled from "styled-components";

export const SecondsDiv = styled.div`
  display: flex;
  width: 32%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width:1200px) {
    justify-content: space-between;
    margin-bottom: 2%;
    width: 40%;
  }

  @media screen and (max-width: 645px) {
    width: 59%;
    margin: 7% 0;
  }

  @media screen and (max-width: 400px) {
    width: 80%;
  }
`

export const TextRefresh = styled.div`
  // margin-left: 6.4%;
  text-align: right;
  font-size: 0.875rem;

  @media screen and (max-width:1200px) {
    justify-content: center;
    margin-left: 0;
  }

  @media screen and (max-width: 795px) {
    margin-right: none;
  }

  @media screen and (max-width: 645px) {
    margin: 0;
  }

  @media screen and (max-width: 355px) {
    font-size: 0.875rem;
  }
`

export const Seconds = styled.div`
  text-align: center;
  width: 23%;

  @media screen and (max-width:1200px) {
    margin: 0;
    width: 58%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (max-width: 795px) {
    width: 64%;
  }

  @media screen and (max-width: 645px) {
    width: 61%;
  }
`

export const ParagraphNumber = styled.p`
    height: 53%;
    font-size: 3rem;

    @media screen and (max-width:1200px) {
      width: 38%;
    }

    @media screen and (max-width: 795px) {
      width: 50%;
    }

    @media screen and (max-width: 645px) {
      width: 59%;
      font-size: 2rem;
      margin: 0;
    }
`

export const ParagraphSeconds = styled.p`
  font-size: 0.875rem;

  @media screen and (max-width:1200px) {
    display: flex;
    align-items: center;
  }
`
