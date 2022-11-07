import { Link } from 'react-router-dom';
import { CardDiv } from './style';

export function Home() {
  return (
    <CardDiv>
      <div>
        <Link to="/seriea">
          <img src="./BrasileiroSerieA.png" alt="logo"></img>
        </Link>
      </div>
      <div>
        <Link to="/serieb">
          <img src="./BrasileiroSerieB.png" alt="logo"></img>
        </Link>
      </div>
      <div>
        <Link to="/seriec">
          <img src="./BrasileiroSerieC.png" alt="logo"></img>
        </Link>
      </div>
      <div>
        <Link to="/seried">
          <img src="./BrasileiroSerieD.png" alt="logo"></img>
        </Link>
      </div>
    </CardDiv>
  );
}
