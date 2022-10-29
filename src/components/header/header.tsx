import { Link, useNavigate } from "react-router-dom";
import {
  HeaderButtons,
  HeaderComponent,
  HeaderLogo,
} from "./style";

export function Header() {
    const navigate = useNavigate();

  return (
    <HeaderComponent>
      <HeaderLogo>
        <Link to="/">
          <h1>Campeonato Brasileiro 2022</h1>
          <img src="./liga.png" alt="logo" height="40" width="40"></img>
        </Link>
      </HeaderLogo>
      <HeaderButtons>
        <div>
        <button onClick={() => {navigate("/seriea");}}>Serie A</button>
        </div>
        <div>
        <button onClick={() => {navigate("/serieb");}}>Serie B</button>
        </div>
        <div>
        <button onClick={() => {navigate("/seriec");}}>Serie C</button>
        </div>
        <div>
        <button onClick={() => {navigate("/seried");}}>Serie D</button>
        </div>
        <div>
        <button onClick={() => {navigate("/login");}}>Login</button>
        </div>
      </HeaderButtons>
    </HeaderComponent>
  );
}