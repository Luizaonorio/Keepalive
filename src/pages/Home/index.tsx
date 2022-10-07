
import LogoCompassOul from "../../assets/LogoCompassoBlack.png";
import DateHour from "../../components/Clock";
import Footer from "../../components/Footer";
import { Logo } from "../../components/pages/Home/styled";
import MainHome from "../../components/TextHome";
import { ConteinerHome, PatterHeader, LogoCompass }from "../Home/styled";
import Location from "../../components/Weather/index";

export const Home = () => {

  return (
    <ConteinerHome>
      <PatterHeader>
        <LogoCompass>
          <Logo src={LogoCompassOul} alt="Logo Compass.Oul"/>
        </LogoCompass>
        <DateHour/>
        <Location/>
      </PatterHeader>

      <MainHome/>
      <Footer/>
    </ConteinerHome>
  );
};

export default Home;

function setDateState(arg0: Date) {
  throw new Error("Function not implemented.");
}

