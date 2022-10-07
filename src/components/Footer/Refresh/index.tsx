import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SecondsDiv, TextRefresh, Seconds, ParagraphNumber, ParagraphSeconds } from "./styled";

interface Props {
  fresh: number;
}

export default function Refresh() {

const [counter, setCounter] = useState(600);
const navigate = useNavigate();

    useEffect(() => {
        counter >= 1 ? setTimeout(() => setCounter(counter - 1), 1000) : navigate("/");
    }, [counter]);

    return (
      <SecondsDiv>
      <TextRefresh>Application <br/>refresh in</TextRefresh>
      <Seconds>
          <ParagraphNumber>
              {counter}
          </ParagraphNumber>
          <ParagraphSeconds>Seconds</ParagraphSeconds>
        </Seconds>
      </SecondsDiv> 
    );
}