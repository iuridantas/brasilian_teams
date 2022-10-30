import { Link } from 'react-router-dom';
import { CardDiv} from './style';

export function Home1() {
  return (
    <CardDiv>
        <div>
        <Link to="/seriea">
        <img src="./grupo1.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/serieb">
        <img src="./grupo2.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriec">
        <img src="./BrasileiroSerieC.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seried">
        <img src="./BrasileiroSerieD.png" alt="logo" ></img>
        </Link>
        </div>
    </CardDiv>
  );
}
