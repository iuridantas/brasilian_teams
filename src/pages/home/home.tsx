import { Link } from 'react-router-dom';
import { CardDiv} from './style';

export function Home() {
  return (
    <CardDiv>
        <div>
        <Link to="/seriea">
        <img src="https://logospng.org/download/brasileirao-serie-a/logo-brasileirao-2048.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/serieb">
        <img src="https://logospng.org/download/brasileirao-serie-a/logo-brasileirao-2048.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriec">
        <img src="https://logospng.org/download/brasileirao-serie-a/logo-brasileirao-2048.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seried">
        <img src="https://logospng.org/download/brasileirao-serie-a/logo-brasileirao-2048.png" alt="logo" ></img>
        </Link>
        </div>
    </CardDiv>
  );
}
