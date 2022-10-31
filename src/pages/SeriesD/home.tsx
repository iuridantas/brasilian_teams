import { Link } from 'react-router-dom';
import { CardDiv} from './style';

export function HomeSerieD() {
  return (
    <CardDiv>
        <div>
        <Link to="/seriedgrupo1">
        <img src="./grupo1.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriedgrupo2">
        <img src="./grupo2.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriedgrupo3">
        <img src="./grupo3.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriedgrupo4">
        <img src="./grupo4.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriedgrupo5">
        <img src="./grupo5.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriedgrupo6">
        <img src="./grupo6.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriedgrupo7">
        <img src="./grupo7.png" alt="logo" ></img>
        </Link>
        </div>
        <div>
        <Link to="/seriedgrupo8">
        <img src="./grupo8.png" alt="logo" ></img>
        </Link>
        </div>
    </CardDiv>
  );
}
